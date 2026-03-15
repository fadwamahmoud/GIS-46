import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Test from "./Test.jsx";
import TodoList from "./TodoList.jsx";
import Person from "./Person.jsx";
import CustomInput from "./CustomInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomInput />
  </StrictMode>,
);

// document
// root object
// render => App

// UI => Navigation Bar + Main Article + Side Bar + Sign Up

// components

//JSX
// Syntax extension for js
// HTML => inside js
// more concise

// What is jsx? => syntactic sugar
// createElement function
// object

// jsx => js objects

// WHY use jsx
// html + js => separation of concerns

// separate into components

// Data transfer in React
// transfer data from parents to children => props (properties)
// unidirectional
// restriction => control on the data flow => fewer errors
