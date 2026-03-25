// /// GET request

import https from "https";
import http from "http";
import url from "url";
// import { hostname } from "os";

const options = {
  method: "GET",
  hostname: "localhost",
  path: "/",
  port: 8000,
};

const req = http.request(options, (response) => {
  response.on("data", (chunk) =>
    console.log("data received ", JSON.parse(chunk)),
  );
  response.on("end", () => console.log("data ended"));
});

req.on("error", (err) => {
  console.log(err);
});

req.end();

// POST

// const todoItem = JSON.stringify({ title: "dnhjs", userId: 5 });
// const optionss = {
//   method: "POST",
//   hostname: "dummyjson.com",
//   path: "/posts/add",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-length": todoItem.length,
//   },
// };

// const request = https.request(optionss, (response) => {
//   response.on("data", (data) => process.stdout.write(data));

//   response.on("end", () => process.stdout.write("end"));
// });

// request.on("error", (error) => {
//   console.error(error);
// });

// request.write(todoItem);

// request.end();

///

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ data: "Hellow World" }));
});

server.listen(8000);

///

const dummyUrl = new URL("https://dummyjson.com/todos?limit=3&skip=10");

dummyUrl.host;
