const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS recruit (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, create_at NUMERIC)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, message TEXT, create_at NUMERIC)"
  );
});
