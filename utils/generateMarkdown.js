// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![Github License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `Learn more about the license at: https://choosealicense.com/licenses/mit/`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}

# ${data.title}

## Description 
${data.description1} ${data.description2} ${data.description3} ${data.description4}

## Table of Contents
* [Description of Application](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contributions](#contributions)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
* [License](#license)
      
## Installation Instructions 
${data.instructions}
      
## Usage Information 
${data.usage}
        
## Contributions & Credit 
${data.contributions}
      
## Test Instructions
${data.test}
     
## Questions?
Please reach out with application questions via the email address and/or Github account below:

Github Username: [github.com/${data.github}](https://github.com/${data.github})

Email Address: ${data.email}
      
## License Type
${data.license} 
`
}

module.exports = generateMarkdown;
