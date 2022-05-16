// Few License links stored in an array
[
    'The MIT License', 'ISC License (ISC)', 'The Perl License', 'Mozilla Public License 2.0',
]
var licenses = [{
        license: 'The MIT License',
        name: 'The MIT License',
        svg: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        link: 'https://opensource.org/licenses/MIT'
    },
    {
        license: 'ISC License (ISC)',
        name: 'ISC',
        svg: 'https://img.shields.io/badge/License-ISC-blue.svg',
        link: 'https://img.shields.io/badge/license-Unlicense-blue.svg,http://unlicense.org/'
    },
    {
        license: 'The Perl License',
        name: 'Artistic-2.0',
        svg: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
        link: 'https://opensource.org/licenses/Artistic-2.0'
    },
    {
        license: 'Mozilla Public License 2.0',
        name: 'MPL 2.0',
        svg: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
        link: 'https://opensource.org/licenses/MPL-2.0'
    }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(name) {
    var markup = '';
    let index = licenses.findIndex(function(el, index) {
        if (el.license == name) {
            return true
        }
    });
    // '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  '
    var markup = `[![License: ${licenses[index].name}](${licenses[index].svg})](${licenses[index].link})`;
    return markup;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    let index = licenses.findIndex(function(el, index) {
        if (el.license == license) {
            return true
        }
    });

    return licenses[index].link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    var markup = `
## License
Distributed under the ${license} for more information see [${license}](${renderLicenseLink(license)})`
    return markup
}

// TODO: Create a function that returns the installation section of README
// If there is no installation, return an empty string
function renderInstallationSection(install) {
    if (install != '')
        return `### Installation Instructions
${install}`

    return ''

}


// TODO: Create a function that returns the usage section of README
// If there is no usage, return an empty string
function renderUsageSection(usage) {

    if (usage != '')
        return `### Usage Information
${usage}`

    return ''
}


// TODO: Create a function that returns the contribution section of README
// If there is no contribution, return an empty string
function renderContributionSection(contribution) {
    if (contribution != '')
        return `### Contribution Guidelines
${contribution}`
    return ''
}


// TODO: Create a function that returns the test section of README
// If there is no test, return an empty string
function renderTestSection(test) {
    if (test != '')
        return `### Test Instructions
${test}`
    return ''
}

// TODO: Create a function that returns the Questions section of README
// If there is no Questions, return an empty string
function renderQuestionsSection(username, email) {
    if (username != '' && email != '') {
        return `## Questions
My username: ${username}
My email: ${email}`
    }

    return ''
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}

# ${data.title}
    
## About The Project
${data.description}

## Getting Started

${renderInstallationSection(data.installation)}

${renderUsageSection(data.usage)}

${renderContributionSection(data.contribution)}

${renderTestSection(data.test)}

${renderLicenseSection(data.license)}

${renderQuestionsSection(data.username,data.email)}

<details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
      </li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
    </ol>
</details>
`;
}

module.exports = generateMarkdown;