# Employee Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Using NodeJS and its 'Inquirer' package (plus the 'inquirer-loop' supplement), this app runs through a series of questions prompting the user to give a few bits of data about each employee on a team, starting with the (one) manager. The user may then choose to add more employees (interns or engineers, as many as the user wants) and give a bit of data on each. Once done, an HTML page will be generated with a card for each employee added. The manager is required, but all other additions are optional. The OOP classes have their own tests that can be run with 'jest', if the user so chooses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Comments/Flaws](#comments/flaws)
- [License](#license)

## Installation

Need both NodeJS (preferably with Git Bash if using Windows) and its 'Inquirer' package (npm i inquirer@8.2.4), along with the supplemental package 'inquirer-loop'. If you want to run the class tests, you will want to install 'jest' as well.

## Usage

You will want to pull this repo down so you can run the file in your command line. Once in the project directory in your terminal, run 'node index.js' to begin the questions. You will be asked to give the name, id, email and office number of a manager. Then you will have the option to add more employees (enter 'Y' to add) -- you can choose between interns and engineers, and may add as many as you want. Each additional employee will need their name, id and email given, with the engineers being asked for their GitHub username and the interns being asked for their school. Once you've chosen (entered 'n') to not add another employee, the questions will cease and an HTML page 'employees.html' featuring a card for every added employee will be generated in the 'dist/' folder. Additionally, if you have 'jest' installed and run 'npm test', you will run all the test suites created for the special classes -- they should all pass. (Note: You can change the file name and location of the generated HTML page by specifying it in the first argument of the 'writeToFile' function, in 'index.js')

Link to video: https://drive.google.com/file/d/1TgKcqHIh-vhSoqFu4b9CKXN0B0kj8lLM/view

Screenshot(s):
![Finished inquirer question set & jest tests](./assets/images/terminal-test-and-sample.png?raw=true "Example of a finished inquirer set and completed test suite")
![Sample HTML file generated](./assets/images/generated-html-example.png?raw=true "A sample HTML file generated from running the question set")

## Credits

GitHub user 'andreasonny83' for a nice boilerplate '.gitignore' file, and 'inquirer-loop' package for making my life much easier! Also 'inquirer' & 'jest' packages, and Bootstrap.

## Tests

All OOP Classes have their own test suite. All the method are simple 'get' methods, so they aren't very complicated

## Comments/Flaws

I probably could have done more to control inputs. Inquirer takes in everything as a string, and even number fields (officeNum and ID) aren't used in calculations and can stay as strings. This made the test suites rather underwhelming -- I didn't get super creative with them because there wasn't much need to (everything comes in as a string _and_ all the methods are simple 'get'). Other than that, the styling is very bare bones, as I usually do unless I'm forced to do otherwise, though it uses flexbox well enough. Overall this is totally functional but there were certainly no bells and whistles added! OOP has always intimidated me a bit.

## License

Covered under the MIT license.
