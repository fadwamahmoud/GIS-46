// CALLBACK

myDiv.addEventListener("click", function () {
  // do smth
  // callback hell
});

// Promises

// object => value at some point in the future

const getData = function () {
  // go fetch data from some API
  // process

  return data;
};

const processedData = getData();
// undefined
const pieceOfData = processedData.name;

// promises

const mypromise = getData(); // => promise
const name = mypromise.then(function (data) {
  const whatever = data.name;
  return whatever;
});
