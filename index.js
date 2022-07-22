const inquirer = require('inquirer');


const promptUser = teamData => {
    console.log(`
    ===============
    Buisiness owner
    ===============
    `);
    if (!teamData.employee) {
      teamData.employee = [];
    }
    return inquirer.prompt([
      {
        type: 'list',
        name: 'choices',
        message: 'What role is the employee responsible for?',
        choices: ['View all departments', 'View all roles', 'View allemployees', 'Add an employee']
      }, 
      {
        type: 'input',
        name: 'name',
        message: 'What is your team manager\'s name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your team manager\'s name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your team manager\'s employee ID (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your team manager\'s employee ID!');
            return false;
          }
        }
      }
    ])
    .then(employeeData => {
      teamData.employee.push(employeeData);
        return teamData;    
    });
  };


  promptUser(promptEmployee)
  .then(promptEmployee)
  .then(teamData => {
    return generatePage(teamData);
  })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
  .catch(err => {
    console.log(err);
  });