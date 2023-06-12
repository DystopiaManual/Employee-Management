const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'})


app.get('/api/employees', (req,res) => {
    connection.query(
      "SELECT * FROM EMPLOYEE",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
})

app.use('/image', express.static('./upload'));

app.post('/api/employees', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO EMPLOYEE VALUES(null, ?, ?, ?, ?, ?, ?, ?)';
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let NAME = req.body.NAME;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let POSITION = req.body.POSITION;
  let joindate = req.body.joindate;
  console.log(NAME);
  console.log(birthday);
  console.log(gender);
  console.log(job);
  console.log(POSITION);
  console.log(joindate);
  console.log(image);
  

  let params = [image, NAME, birthday, gender, job, POSITION, joindate];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(rows);
    }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));