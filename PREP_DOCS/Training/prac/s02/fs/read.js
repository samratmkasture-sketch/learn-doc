const fs = require("fs");

fs.writeFile("a.txt", "Hellow World", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Data Saved!");
});

fs.appendFile("a.txt", " Some More data", (err, data) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Data Saved!");
});

fs.readFile("a.txt", (err, data) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Data Read: ", data.toString());
});
console.log("Data Read: ");
fs.unlink("a.txt", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("File deleted");
});

fs.mkdir("./dir2/l1/l2/l3", { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});
const result = fs.mkdirSync("dir1/l1/l2", { recursive: true });

const result = fs.readFileSync("./a.txt");
console.log("result ", result.toString());

fs.rename("a.txt", "aa.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
fs.rmdir(
  "./dir1",
  {
    recursive: false,
  },
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("removed");
  }
);
