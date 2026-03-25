import fs from "fs";

// fs.rename("./before.json", "after.json", (err) => {
//   console.log(err);
// });

///

const someContent =
  "This is some content inside a file, and this is some more content";

const testContent = "/n dghqwuwjuhrgqwiuyequwyewyqu";
// fs.writeFile("./test.txt", someContent, { flag: "a+" }, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.appendFile("test.txt", testContent, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

///

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
