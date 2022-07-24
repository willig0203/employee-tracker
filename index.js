const inquirer = require('inquirer');
const { printTable } = require('console-table-printer');
const mysql = require('mysql');
require('dotenv').config();

const promptUser = teamData => {
  console.log(`
  ============
  Team Manager
  ============
  `);
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Select an option... (Use arrow key down to select another option)...',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',

          'Add a department',
          'Add a role',
          'Add an employee',

          'Update an employee role']
      },
    ])
    .then(answers => {
      console.info('Answer:', answers.choice);

      let qry;

      if (answers.choice === 'View all departments') {
        qry = 'SELECT * FROM department';
        viewTbl(qry);
      }
      if (answers.choice === 'View all roles') {
        qry = 'SELECT * FROM roles join department on department_id=department.id';
        viewTbl(qry);
      }
      if (answers.choice === 'View all employees') {
        qry = "select * from department join roles on department.id=roles.department_id join employee on roles.id=employee.role_id";
        viewTbl(qry);
      }

      if (answers.choice === 'Add a department') {
        qry = `INSERT INTO Department (name) VALUES (?);`;
        addDept(qry,answers);
      }
      if (answers.choice === 'Add a role') {
        qry = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`;
        addRole(qry,answers);
      }
      if (answers.choice === 'Add an employee') {
        qry = 'SELECT * FROM employee';
      }


      if (answers.choice === 'Update an employee role') {
        qry = 'SELECT * FROM employee';
      }
    });
};

const addRole = (qry) => {
  console.log(`
  ========
  Add Role
  ========
  `);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'newRoleTitle',
        message: 'What is the title of your new Role? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a Role title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'newRoleSalary',
        message: 'What is the Salary of your new Role? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a Salary for the Role name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'newRoleDepartment',
        message: 'What is the Department number of your new Role? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a department number for the Role name!');
            return false;
          }
        }
      }

    ])
    .then(answers => {
      console.info('Answer:', answers);

      let connection;

      connection = mysql.createConnection({
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD
      });
    
      connection.connect((error) => {
        if (error) {
          console.log('Error connecting to the MySQL Database');
          return;
        }
        console.log();
        // console.log(choice);
        console.log('Connection established sucessfully');
      });
    
      connection.query(qry, [answers.newRoleTitle, answers.newRoleSalary, answers.newRoleDepartment], function (err, rows, fields) {
        if (err) throw err;
        console.table(rows);
      });
    
      // free connection
      connection.end();
    
          // recursive
          promptUser();

    });
};

const addDept = (qry) => {
  console.log(`
  ==============
  Add Department
  ==============
  `);

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'newDept',
        message: 'What is the name of your new Department? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a Department name!');
            return false;
          }
        }
      }
    ])
    .then(answers => {
      console.info('Answer:', answers);

      let connection;

      connection = mysql.createConnection({
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD
      });
    
      connection.connect((error) => {
        if (error) {
          console.log('Error connecting to the MySQL Database');
          return;
        }
        console.log();
        // console.log(choice);
        console.log('Connection established sucessfully');
      });
    
      connection.query(qry, [answers.newDept], function (err, rows, fields) {
        if (err) throw err;
        console.table(rows);
      });
    
      // free connection
      connection.end();
    
          // recursive
          promptUser();

    });
};



const viewTbl = (qry) => {
  let connection;

  connection = mysql.createConnection({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD
  });

  connection.connect((error) => {
    if (error) {
      console.log('Error connecting to the MySQL Database');
      return;
    }
    console.log();
    // console.log(choice);
    console.log('Connection established sucessfully');
  });

  connection.query(qry, function (err, rows, fields) {
    if (err) throw err;
    console.table(rows);
  });

  // free connection
  connection.end();

      // recursive
      promptUser();
};

promptUser();
