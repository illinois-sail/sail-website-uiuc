// import the .env file
require('dotenv').config();

// Import the mysql module
import mysql from 'mysql';

// store the DATABASE_USERNAME and DATABASE_PASSWORD from the .env file
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: username,
    password: password,
    database: 'your_database'
});

// Execute a query
function query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    query,
};
