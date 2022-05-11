// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    { name: 'title', message: 'Please enter your project title' },
    { name: 'description', message: 'Please enter your prject description' },
    { name: 'installation', message: 'Please enter your installation instructions' },
    { name: 'usage', message: 'Please enter your usage information' },
    { name: 'guidelines', message: 'Please enter your contribution guidelines' },
    { name: 'test', message: 'Please enter your test instructions' },
    { name: 'username', message: 'Please enter your GitHub username' },
    { name: 'email', message: 'Please enter your email address' },
    {
        name: 'license',
        message: 'select you license',
        type: 'list',
        choices: [
            'The MIT License', 'ISC License (ISC)', 'The Perl License', 'Mozilla Public License 2.0',
        ],
    }



];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw new Error(err);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./README.md', answers);
        console.log("README Generated Successfully !");

    }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.message)
        } else {
            // Something else went wrong
            console.log(error)
        }
    });

}

// Function call to initialize app
init();