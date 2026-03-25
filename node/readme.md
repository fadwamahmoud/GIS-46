1. read file (10 sec)
2. print file contents
3. query db => GET (20 sec)
4. filter db query result


synch => sequential 

asynch event-driven
// write code in collection of functions, each function is in response to an event (network request) 

1. read file AND THEN print contents => takes time file system=> file.end =>  callback1
2. query db AND THEN filter db query result => takes time => db triggers an event => callback function2 


///

## Modules in node:

What is a module: File in javascript 

1. CommonJS (.cjs)

- Loads the files synchronously 

2. ES Modules (ESM)