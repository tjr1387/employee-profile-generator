// This file contains all of the potential inquirer questions for the project
// It will use the supplemental package 'inquirer-loop' and then 'when' field for conditionals

const questions = [
    {
        type: 'input',
        message: "Please enter the team manager's name.",
        name: 'name',
        default: 'Anonymous'
    },
    {
        type: 'input',
        message: "Please enter the manager's employee ID.",
        name: 'id',
        default: '[None given]'
    },
    {
        type: 'input',
        message: "Please enter the manager's email address.",
        name: 'email',
        default: 'idontknow@thisisntreal.com'
    },
    {
        type: 'input',
        message: "Please enter the manager's office number.",
        name: 'officeNum',
        default: '[None given]'
    },
    {
        type: 'loop',
        message: 'Would you like to add a team member? (Hit "Y" to add)',
        name: 'addEmployee',
        questions: [
            {
                type: 'list',
                message: "Which would you like to add?",
                name: 'role',
                choices: [
                    'Engineer',
                    'Intern'
                ]
            },
            {
                type: 'input',
                message: "Please enter the employee's name.",
                name: 'name',
                default: 'Anonymous'
            },
            {
                type: 'input',
                message: "Please enter the employee's ID.",
                name: 'id',
                default: '[None given]'
            },
            {
                type: 'input',
                message: "Please enter the employee's email address.",
                name: 'email',
                default: 'idontknow@thisisntreal.com'
            },
            {
                when: input => {
                    return input.role === 'Engineer'
                },
                type: 'input',
                message: "Please enter the employee's GitHub username.",
                name: 'gitHub',
                default: 'None. Get 404d!'
            },
            {
                when: input => {
                    return input.role === 'Intern'
                },
                type: 'input',
                message: "Please enter the intern's school.",
                name: 'school',
                default: '[None given]'
            }
        ]
    }
];


module.exports = questions;
