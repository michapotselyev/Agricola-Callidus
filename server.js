const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("players.db", {root: __dirname }, sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message);
});
db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY NOT NULL, login TEXT NOT NULL, password TEXT NOT NULL)");

app.get("/api", (req, res) => {
    res.json({ message: "I`m alive!" });
});

app.listen(3001, () => {
    console.log('Server listening to data...');
});