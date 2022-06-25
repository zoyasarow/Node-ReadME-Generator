// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
  const questions = [
          {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title', 
          },
          {
            type: 'input',
            message: 'What does this project do? (do not forget a "." after each sentence)',
            name: 'description1',  
          },
          {
            type: 'input',
            message: 'What was the motivation for this project? (do not forget a "." after each sentence)',
            name: 'description2',  
          },
          {
            type: 'input',
            message: 'What problem/challenge does it solve? (do not forget a "." after each sentence)',
            name: 'description3',  
          },
          {
            type: 'input',
            message: 'What did you learn? (do not forget a "." after each sentence)',
            name: 'description4',  
          },
          {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
            name: 'instructions',  
          },
          {
            type: 'input',
            message: 'Provide instructions or examples for use. Include screenshots as needed',
            name: 'usage',    
          },
          {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles! If you used any third-party assets that require attribution, list the creators with links to their primary web presence! If you followed tutorials, include links to those too',
            name: 'contributions',    
          },
          {
            type: 'input',
            message: 'Give information on how to run any necessary tests',
            name: 'test',    
          },
          {
            type: 'input',
            message: 'What is your gitHub username?',
            name: 'github',   
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',    
          },
          {
            type: 'list',
            name: 'license',
            message: 'Select a license associated with this project',
            choices: ["MIT", "GPLv3", "GLP", "BSD", "No License"]
          },
        ]

        function writeToFile(fileName, data) {
            fs.writeFileSync(fileName, data)
        } 

        function init() {
            inquirer.prompt(questions)
            .then(userInput => {
                const readMePath = path.join(__dirname, "/dist","README.md") 
                writeToFile(readMePath, generateMarkdown(userInput))
                      console.log('Created!')
                    }
                )}
           
        init()

