import express from "express";
import authorRouter from "./routes/authorRouter.js";
// import bookRouter from "./routes/bookRouter.js";
// import indexRouter from "./routes/indexRouter.js";

// app is the server

// 1. initialize the app variable => the server
const app = express();
app.use("/authors", authorRouter);
// app.use("/books", bookRouter);
// app.use("/", indexRouter);

// access
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`App is running ${PORT}`);
});

//2. Routes
