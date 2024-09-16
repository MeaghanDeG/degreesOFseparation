Social Network App

This is a simple social network application built with **Node.js** and **Express**. The app allows users to add individuals, create friendships, and calculate the degree of separation between two individuals.


Make sure you have the following installed:

**Node.js** (https://nodejs.org) - Required to run the backend.
- **Git** (optional, for cloning the repository) - https://git-scm.com


First, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/social-network-app.git
cd social-network-app

npm install

node server.js

The server will start and listen on http://localhost:3001. You should see the message:
Server is running on http://localhost:3001

Open the index.html file in your browser

Using the app


Add Individual: Enter an individual's name and click "Add Individual."

Add  Friendship: Enter the names of two individuals and click "Add Friendship" to create a connection.

Calculate Degree of Separation: Enter the names of two individuals and click "Calculate Degree of Separation" to find out the shortest path between them.


Technologies Used
Node.js: Server-side JavaScript runtime.
Express.js: Web framework for Node.js to create API endpoints.
CORS: Middleware to handle Cross-Origin Resource Sharing.
Body-parser: Middleware to parse incoming request bodies in JSON format.
HTML/CSS/JavaScript: For the frontend user interface.


/social-network-app
├── public           # Contains frontend files (index.html, styles.css, script.js)
├── node_modules     # Installed dependencies
├── server.js        # Node.js backend server
├── package.json     # Project configuration and dependencies
└── README.md        # Project instructions


This project is licensed under the MIT License.