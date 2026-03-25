import https from "https";

// fetch('https://dummyjson.com/todos/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     todo: 'Use DummyJSON in the project',
//     completed: false,
//     userId: 5,
//   })
// })
// .then(res => res.json())
// .then(console.log);

const todoItem = JSON.stringify({
  todo: "Use DummyJSON in the project",
  completed: false,
  userId: 5,
});

const options = {
  hostname: "dummyjson.com",
  path: "/todos/add",
  method: "POST",
  headers: {
    "content-type": "application/json",
    "api-key": "gdhgahdgasdgh325662256",
  },
};
const req = https.request(options, (res) => {
  res.on("data", (data) => process.stdout.write(data));

  res.on("end", () => process.stdout.write("end"));
});

req.on("error", (error) => console.log(error));

req.write(todoItem);

req.end();
