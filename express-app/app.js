import express from "express";
import authorRouter from "./routes/authorRouter.js";
// import bookRouter from "./routes/bookRouter.js";
// import indexRouter from "./routes/indexRouter.js";

// app is the server

// 1. initialize the app variable => the server
const app = express();

app.use(
  "/authors",
  (req, res, next) => {
    req.propertyFromApp = "This property is set from app level";
    next();
  },
  authorRouter,
);
// app.use("/books", bookRouter);
// app.use("/", indexRouter);

// app.use((req, res, next) => {
//   // simulate
//   // code => throw error
//   throw new Error("ERROR ERROR ERROR ERRORRRR!!!!!!");
// });

//error handler middleware => at the end of all middleware functions
app.use((err, req, res, next) => {
  console.log("Error: ", err);
  // specify err.statusCode => 404 ?
  // server error => 500
  res.status(err.statusCode || 500).send(err.message);
});

// access
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`App is running ${PORT}`);
});

// app level middleware vs router-level middleware
// (  (        authorController) (blablaController) (blablabalbabController) ==========>           [app + middleware+ errorHandler middleware] )

// 1. Next() => pass control to next middleware

// 2. next(new Error(...)) => pass control directly to the error handling middleware

// 3. next('books') => pass control to the next route handler with the same matching path

// 4. next('router') => skip to all middleware attached to the specific router instance => pass control back OUTSIDE router instance => app-level (parent router)
// authorRouter('/', (req,res,next)=> next('router'))
