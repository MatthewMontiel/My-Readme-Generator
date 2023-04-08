// TODO: Include packages needed for this application
const fs = require("fs");
const { default: inquirer } = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        prompt: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        prompt: "Provide a description about your project, and what it should do",
    },
    {
        type: "input",
        name: "installation",
        prompt: "What steps must be taken for installation?"
    },
    {
        type: "input",
        name: "usage",
        prompt: "Provide instructions on how a user must interact with your project.",
    },
    {
        type: "input",
        name: "credits",
        prompt: "List any Collaborators or references",
    },
    {
        type: "checkbox", 
        name: "license",
        message: "Please check the license for your project",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    },
    {
        type: "input",
        name: "features",
        prompt: "List any features your project has",
    },
    {
        type: "input",
        name: "contributers",
        prompt: "Please enter the GitHub user name of any contributers.",
    },
    {
        type: "input",
        name: "test",
        prompt: "Does your project include any tests?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Please wait while I process your information");
        writeToFile("./Output/README.md", generateMarkdown({...answers}));
    });
}

// Function call to initialize app
init();
