import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const colors = ["pink", "green", "blue", "yellow", "purple"];
export default function App() {
  // state => component's memory
  // backgroundColor => current state value
  // function => update state
  // initial value => component's first render
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  // initial value

  // primitives
  let ayHagaMutatable = "string";
  ayHagaMutatable = "new string";
  let numberOfColors = 10;
  numberOfColors = 11;

  //reference type values ie arrays or objects
  //state is immutable => cannot be canged
  // useState => setState

  const onButtonClick = (color) => {
    setBackgroundColor(color);
  };
  // background-color
  // Parent => child
  return (
    <div
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {colors.map((color) => (
        <button key={color} onClick={() => onButtonClick(color)}>
          {/* when button is clicked => button text "selected" */}
          {backgroundColor === color ? "Selected" : color}
        </button>
      ))}
    </div>
  );
}
