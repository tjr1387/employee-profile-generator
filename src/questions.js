// This file contains all of the potential inquirer questions for the project
// It will use the supplemental package 'inquirer-loop' and then 'when' field for conditionals

const questions = [
    {
        type: 'input',
        message: "Please enter the team manager's name.",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the manager's employee ID.",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the manager's email address.",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the manager's office number.",
        name: 'officeNum'
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
                name: 'name'
            },
            {
                type: 'input',
                message: "Please enter the employee's ID.",
                name: 'id'
            },
            {
                type: 'input',
                message: "Please enter the employee's email address.",
                name: 'email'
            },
            {
                when: input => {
                    return input.role === 'Engineer'
                },
                type: 'input',
                message: "Please enter the employee's GitHub username.",
                name: 'gitHub'
            },
            {
                when: input => {
                    return input.role === 'Intern'
                },
                type: 'input',
                message: "Please enter the intern's school.",
                name: 'school'
            }
        ]
    }
];

// const engineerQuestions = [
//     {
//         type: 'input',
//         message: "Please enter the engineer's name.",
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: "Please enter the engineer's employee ID.",
//         name: 'id'
//     },
//     {
//         type: 'input',
//         message: "Please enter the engineer's email address.",
//         name: 'email'
//     },
//     {
//         type: 'input',
//         message: "Please enter the engineer's GitHub username.",
//         name: 'gitHub'
//     },
//     {
//         type: 'list',
//         message: 'Would you like to add another team member?',
//         name: 'addEmployee',
//         choices: [
//           'Add Intern',
//           'Add Engineer',
//           'Nope. All Done.'
//         ]
//     }
// ];

// const internQuestions = [
//     {
//         type: 'input',
//         message: "Please enter the intern's name.",
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: "Please enter the intern's employee ID.",
//         name: 'id'
//     },
//     {
//         type: 'input',
//         message: "Please enter the intern's email address.",
//         name: 'email'
//     },
//     {
//         type: 'input',
//         message: "Please enter the intern's school.",
//         name: 'school'
//     },
//     {
//         type: 'list',
//         message: 'Would you like to add another team member?',
//         name: 'addEmployee',
//         choices: [
//           'Add Intern',
//           'Add Engineer',
//           'Nope. All Done.'
//         ]
//     }
// ];

module.exports = questions;
