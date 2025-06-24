// Commonjs module

//
// readFile
//

/* const fs = require("fs"); */
const path = require("path"); // to make path of the file not be hardcoded

/* fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }
);
 */
/* console.log("Hello!"); */

// catch error uncaughtException

/* process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
}); */

//
// writeFile
//

/* fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("write complete");
  }
); */

//
// appendFile
//

// creating a file

/* fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "Testing text",
  (err) => {
    if (err) throw err;
    console.log("Append complete");
  }
); */

// updating a file

/* fs.writeFile(
  path.join(__dirname, "files", "replyWithAppend.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("Write with append complete");

    fs.appendFile(
      path.join(__dirname, "files", "replyWithAppend.txt"),
      "\n\nYes it is",
      (err) => {
        if (err) throw err;
        console.log("Append with write complete");
      }
    );
  }
); */

//
// renaming a file after updating it
//

// Note: All these operations are async but we are controlling when they come into action by nesting them in the callbacks of operations we need them to occur after

/* fs.writeFile(
  path.join(__dirname, "files", "replyWithAppend.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("Write with append complete");

    fs.appendFile(
      path.join(__dirname, "files", "replyWithAppend.txt"),
      "\n\nYes it is",
      (err) => {
        if (err) throw err;
        console.log("Append with write complete");

        fs.rename(
          path.join(__dirname, "files", "replyWithAppend.txt"),
          path.join(__dirname, "files", "newReplyWithAppend.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename inside Write>Append complete");
          }
        );
      }
    );
  }
); */

// The code above is good but it is called the callback hell in JS. Because we are putting one operation inside the callback of another operation. So we are able to controll the flow of operations but at the same time we can avoid this callback hell using async/await in Node.js as well! Code down below

//
// async/await
//

const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
