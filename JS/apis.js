// APIS
// server  : blog posts, user data , game scores....

// server: open service
// weather data, stock prices, book data....

// 1. API
// 2. accessing an API
// 3. how to fetch from an api
// 4. why an api request can be blocked form bropwser

// API=> Application Programming Interface
// url, query

// url path
// documentation
// https://weather.visualcrossing.com/rest/services/cairo => 100 free tier  10000
// https://weather.visualcrossing.com/rest/other/uv
// https://weather.visualcrossing.com/rest/ayhaga/ayhaga

// NO API key or session found.

// API Keys => endpoints => urls

//Fetching Data

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  try {
    request = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

request.open("GET", "https://url.com/some/url", true);
request.send(null);

//axios

// fetch

fetch("https://url.com/some/url")
  .then(function (response) {
    // ay haga
  })
  .catch(function (err) {
    //err
  });
