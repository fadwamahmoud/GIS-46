import http from "http";

// dummy json
// https://dummyjson.com/test

const option = {
  hostname: "localhost",
  path: "/",
  method: "GET",
  port: 8000,
};
const req = http.request(option, (res) => {
  console.log("status: ", res.statusCode);

  res.on("data", (data) => {
    console.log("data received: ", data.toString());
  });

  res.on("end", () => {
    console.log("response ended");
  });

  ///
});

req.on("error", (error) => console.log(error));

req.end();
