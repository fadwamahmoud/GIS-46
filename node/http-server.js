import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  // this is the header
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World",
    }),
  );
});

server.listen("8000");
