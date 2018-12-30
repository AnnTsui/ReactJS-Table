const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  database : 'AT_001'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    /*connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
     
    console.log('Connected to the MySQL server.')});
    connection.query('SELECT * FROM scrty_info', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
    */
   var data = [["id", "subject1", "subject2", "subject3"], ["jack", 85, 90, 68], ["sam", 77, 89, 69]]
   res.send(data)
});
// Start the server
app.listen(8020, () => {
 console.log('Go to http://localhost:8020/posts to see posts');
});