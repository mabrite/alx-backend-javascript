0x05-Node_JS_basic
Table of Contents
Introduction
Project Structure
Getting Started
Usage
Endpoints
Testing
License
Introduction
The 0x05-Node_JS_basic project focuses on the fundamentals of Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine. This project aims to help you understand the basics of Node.js, including creating a server, handling requests, and working with modules.

Project Structure
The project directory contains the following files and folders:

go
Copy code
0x05-Node_JS_basic/
├── controllers/
│   ├── AppController.js
│   ├── StudentsController.js
├── routes/
│   ├── index.js
├── utils/
│   ├── readDatabase.js
├── .eslintrc.js
├── .gitignore
├── app.js
├── package.json
├── README.md
└── server.js
Getting Started
Prerequisites
Node.js (version 12 or higher)
npm (Node package manager)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your_username/0x05-Node_JS_basic.git
Navigate to the project directory:
bash
Copy code
cd 0x05-Node_JS_basic
Install the required packages:
bash
Copy code
npm install
Usage
To run the application, execute the following command:

bash
Copy code
node server.js
The server will start and listen on http://localhost:1245.

Endpoints
Index Endpoint
GET /: Returns a message "Hello Holberton School!".
App Endpoints
GET /students: Returns the list of students sorted by field.
GET /students/
: Returns the list of students for a specific major.
Testing
To run the tests, execute the following command:

bash
Copy code
npm test
This will run all tests defined in the tests directory.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Additional Notes
AppController.js: Contains the logic for handling the root endpoint and common application functionality.
StudentsController.js: Contains the logic for handling student-related endpoints.
index.js: Defines the routes and links them to the appropriate controller functions.
readDatabase.js: Utility for reading and parsing the database file.
server.js: Initializes and starts the Node.js server.
.eslintrc.js: Configuration for ESLint, a tool for identifying and fixing problems in JavaScript code.
