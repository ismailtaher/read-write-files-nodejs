// ES Module
import { readFile } from "node:fs";

readFile("./files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Commonjs module
/* const fs = require("fs");

fs.readFile("./files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

 */

console.log("Hello!");

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
