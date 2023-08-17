const sqlite3 = require("sqlite3").verbose();
import { open } from "sqlite";

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
});

export const getDB = async () => {
  return await open({
    filename: "./database/database.db",
    driver: sqlite3.Database,
  });
};
