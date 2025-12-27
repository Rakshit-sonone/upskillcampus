const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rakshit@123",
    database: "support_chat_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});
