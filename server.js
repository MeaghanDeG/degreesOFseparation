const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Express app setup, run on Port 3001
const app = express();
const port = 3001; 

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Start server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3001`);
});

// Memory storage for friends
const network = {};

// Function adding an individual
const addIndividual = (name) => {
    if (!network[name]) {
        network[name] = { friends: [] };
        return `${name} added to the network.`;
    }
    return `${name} already exists in the network.`;
};

// Function adding a friendship
const addFriendship = (individual1, individual2) => {
    if (!network[individual1] || !network[individual2]) {
        return 'One or both individuals do not exist.';
    }
    if (!network[individual1].friends.includes(individual2)) {
        network[individual1].friends.push(individual2);
    }
    if (!network[individual2].friends.includes(individual1)) {
        network[individual2].friends.push(individual1);
    }
    return `${individual1} and ${individual2} are now friends.`;
};

// Function calculating the degree of separation
const degreeOfSeparation = (start, target) => {
    if (!network[start] || !network[target]) {
        return "One or both individuals do not exist.";
    }

    let queue = [[start, 0]];
    let visited = new Set();

    while (queue.length > 0) {
        let [current, degree] = queue.shift();

        if (current === target) {
            return `Degree of separation between ${start} and ${target} is ${degree}.`;
        }

        if (!visited.has(current)) {
            visited.add(current);
            for (const friend of network[current].friends) {
                if (!visited.has(friend)) {
                    queue.push([friend, degree + 1]);
                }
            }
        }
    }
    return `${start} and ${target} are not connected.`;
};

// API Endpoints

// Add individual 
app.post('/api/addIndividual', (req, res) => {
    const { name } = req.body;
    const result = addIndividual(name);
    res.json({ message: result });
});

// Add friendship 
app.post('/api/addFriendship', (req, res) => {
    const { individual1, individual2 } = req.body;
    const result = addFriendship(individual1, individual2);
    res.json({ message: result });
});

// result- degree of separation 
app.post('/api/degreeOfSeparation', (req, res) => {
    const { start, target } = req.body;
    const result = degreeOfSeparation(start, target);
    res.json({ message: result });
});


