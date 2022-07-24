// const mysql = require('mysql');

// require('dotenv').config();

// let connection;

// module.exports = new function connectDB () {
//   connection = mysql.createConnection({
//     user: process.env.DB_USER,
//     database:  process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     password: process.env.DB_PASSWORD
//   });

//   connection.connect((error) => {
//     if (error) {
//       console.log('Error connecting to the MySQL Database');
//       return;
//     }
//     console.log('Connection established sucessfully');
//   });
// };

// module.exports = new function disconnectDB() {
//     connection.end();
// };

// module.exports = new function setQuery() {
//   connection.query('SELECT * FROM employee', function (err, rows, fields) {
//     if (err)
//       throw err;

//     console.log(rows[0]);
//   });
// };

