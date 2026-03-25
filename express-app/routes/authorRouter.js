import { Router } from "express";

const authorRouter = Router();

// use it similar to app

authorRouter.get("/", (req, res) => res.send("All authors"));

authorRouter.get(
  "/:authorId",
  (req, res, next) => {
    const isLoggedIn = false;
    // if (!isLoggedIn) {
    //   res.redirect("/login");
    // }

    next();
  },
  (req, res) => {
    const { authorId } = req.params;

    // res.send(`Author id is: ${authorId}`);
    // content-type: application/json
    //   res.json({ name: "fadwa" });
    //redirect to different url

    // res.send("OK");

    // renders html view
    // res.render()

    // does not end the request-response cycle
    res.status(207).send("ok");
  },
);
authorRouter.post("/:authorId", (req, res) => {
  const author = req.body;
  // author => db
  // 201 CREATED
  res.status(201).send(`author created, ${req.params.authorId}`);
});

export default authorRouter;
