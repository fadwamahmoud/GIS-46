import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("hello world");
  })
  .listen(8080);

if ("production") {
  const query = db.createQuery(
    `${process.env.DB_username}:${process.env.DB_password}mongodbblabla/gis`,
  );
}

query.get("collection");
