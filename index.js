// Import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import and destructure question sets
const questions = require('./src/questions');

// Import HTML generation function
const generateHtml = require('./src/generateHtml');

// Import filesystem and inquirer/inquirer-loop
const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));


// Function which will create/write the generated HTML page
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// Function which will run inquirer -- some trickery involved with the potential loop here
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
        });
}

init();