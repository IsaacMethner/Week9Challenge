// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");



// TODO: Create an array of questions for user input
import inquirer from "inquirer";
 const questions = [
      {
     name: 'title',
     type: input,
     question: ("What is the title of your project?"),
     answer: (''),
     validate: titleAnswer => {
         if (titleAnswer) {
             return true;
         } else {
             console.log ("Please enter a title for your project!!");
             return false;
         }
     } 
 },
 {
     name: 'description',
     type: input,
     question: ("What is a breif description of your project,?"),
     answer: (""),
     validate: questionAnswer => {
         if (questionAnswer) {
             return true;
        } else {
            console.log ("Please enter a breif description for your project!!");
            return false;
        }
     }
  },
{
    name: 'installation',
    type: input,
    question: ("What is the installation process of your project?"),
    answer: (""),
    validate: installationAnswer => {
        if (installationAnswer) {
            return true;
        } else { 
            console.log("Please enter the installation process for your project!!");
            return false;
        }
    }
},
 {
     name: 'Usage',
     type: input,
    question: ("how do you use your application?"),
    answer: (""),
    validate: usageAnswer => {
        if (usageAnswer) {
            return true;
        } else {
            console.log("Please enter your application usage information!!");
            return false;
        }
    }
},
{
    name: 'contribution',
    type: input,
    question: ("who contributed on this project?"),
    answer: (""),
    validate: contributionAnswer => {
        if (contributionAnswer) {
            return true;
        } else {
            console.log("Please enter all contributes!!");
            return false;
        }
    }
}, 
{
    name: 'test',
    type: input,
    question: ("what test needed to be done on this project?"),
    answer: (""),
    validate: testAnswer => {
        if (testAnswer) {
            return true;
        } else {
            console.log("Please Enter test Description")
            return false;
        }
    }
},
{
    name: 'license',
    type: list,
    question: ("What license did you use to create this project?"),
    choices: ["MIT", "Eclipse", "GNU","Apache"]
},
{
    name: 'github',
    type: input,
    question: ("What is your github user name?"),
    answer: (""),
    validate: answer => {
        if (answer) {
            return true;
        } else {
            console.log("Please Enter your GitHub username!!")
            return false;
        }
    }
},
{
    name: 'email',
    type: input,
    question: ("What is your email address?"),
    answer: (""),
    validate: answer => {
        if (answer) {
            return true;
        } else {
            console.log("Enter your email adress!!")
            return false;
        }
    }
}
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log("README file created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => { 
        return readmeData;
    })
}

// Function call to initialize app
function init() {
    inquirer.propmt(questions).then(function(userInputs){
        console.log(userInputs);
        writeToFile("README.md", generateMarkdown(userInputs));
    });
}
init();