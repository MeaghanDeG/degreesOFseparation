
const BASE_URL = 'http://localhost:3001/api/...';

// Event Listener: Add Individual
document.getElementById('add-individual-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('individual-name').value.trim();
    
    try {
        const response = await fetch('http://localhost:3001/api/addIndividual', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error: Add Individual', error);
    }

    document.getElementById('individual-name').value = '';
});

// Event Listener: Add Friendship
document.getElementById('add-friendship-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const friend1 = document.getElementById('friend1').value.trim();
    const friend2 = document.getElementById('friend2').value.trim();

    try {
        const response = await fetch('http://localhost:3001/api/addFriendship', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ individual1: friend1, individual2: friend2 })
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error: Add friendship', error);
    }

    document.getElementById('friend1').value = '';
    document.getElementById('friend2').value = '';
});

// Event Listener: Calculate Degree of Separation
document.getElementById('degree-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const start = document.getElementById('start-individual').value.trim();
    const target = document.getElementById('target-individual').value.trim();

    try {
        const response = await fetch('http://localhost:3001/api/degreeOfSeparation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ start, target })
        });
        const result = await response.json();
        document.getElementById('degree-result').innerText = result.message;
    } catch (error) {
        console.error('Error:', error);
    }

    document.getElementById('start-individual').value = '';
    document.getElementById('target-individual').value = '';
});
