import url from "url";

const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#fadwa",
);

// parse =>

console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.hash);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.username);
console.log(myURL.password);

// constructing a url

const hostname = "https://dummyjson.com";

// pathname

const newUrl = new URL(hostname);
newUrl.pathname = "/todos";
newUrl.searchParams.set("limit", 10);
newUrl.searchParams.set("page", "2");

console.log({ newUrl });
