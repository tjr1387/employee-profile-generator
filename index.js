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

function createInstances(inqResult) {
    const result = [new Manager(inqResult.name, inqResult.id, inqResult.email, inqResult.officeNum)];
    if (inqResult.addEmployee.length > 0) {
        for (const employee of inqResult.addEmployee) {
            if (employee.role === 'Engineer') {
                result.push(new Engineer(employee.name, employee.id, employee.email, employee.gitHub));
            } else {
                result.push(new Intern(employee.name, employee.id, employee.email, employee.school));
            }
        }
    }
    return result;
}

// Function which will run inquirer -- some trickery involved with the potential loop here
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const madeHtml = generateHtml(createInstances(response));
            writeToFile('./dist/employees.html', madeHtml);
        });
}

init();

