import express from "express";

// app is the server

// 1. initialize the app variable => the server
const app = express();

//2. Routes
// localhost:3000/

// middleware => functions
//1. logging middleware
const logger = (req, res, next) => {
  console.log(`Request received ${req.method}, route: ${req.url}`);
  //required
  next();
};

//2. authentication middleware
const auth = (req, res, next) => {
  // ???
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.send("Unauthorized");
  }

  // if logged in
  next();
};
// /fadwa/mesages => messages
// /abdelrahman/messages => messages
// ahmed/messages => messages
app.get("/:username/messages", logger, auth, (req, res) => {
  console.log(req.params);
  res.send("welcome to the app");
});

// ROUTE PARAMS
// [ {id: 1, message: "message number 1"}, {id: 12, message: "message number 2"}, {id: 1564345, message: "message number 3"},{id:5 1, message: "message number 4"}]
// /fadwa/messages/342567
app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params.messageId);
  const mesageId = req.params.messageId;
  // query db => username
  // result.filter(7877)

  res.send({ message });
});

// QUERY PARAMS

// ? => start of query parameter ?key=62348236772&t=45656237

app.get("/:username/orders", (req, res) => {
  console.log("params:", req.params);
  console.log("query:", req.query);

  // date => sorting logic
  const sort = req.query.sort;
  const direction = req.query.direction;

  res.end();
});

// Match /message and /messages
// app.get("/message{s}", (req, res) => res.send("These are my messages"));
app.get("/messages", (req, res) => res.send("These are my messages or root"));

// match allll paths => page for a 404 not found (fallback route)
app.get("/{*wildcard}", (req, res) => res.send("this matches everything"));
// Match both / and /messages

// Match /use/this and /use/blabla/this
app.get("/use{/blabla}/this", (req, res) =>
  res.send("These are use/this or use/blabla/this"),
);

// react router => route parameters
// path => parameters

// no match

// matches any method (GET/POST/PUT/DELETE)
app.all("/secret", (req, res) => {
  console.log("accessing the secret path...");

  res.send("This is the secret path");
});

// fallback
const PORT = process.env.PORT || 3000;

//3. listen on port
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Express app is running on port ${PORT}`);
});
