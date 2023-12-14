import * as sqlite3 from "sqlite3";
const database = sqlite3.verbose();

import { open } from "sqlite";

export const getDB = async () => {
  return await open({
    filename: "./database/database.db",
    driver: database.Database,
  });
};
