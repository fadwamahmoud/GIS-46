// default props

function Button({ text = "click me", color = "blue", fontSize = 12, ayhaga }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  // dynamically generated
  return (
    <button style={buttonStyle} onClick={ayhaga}>
      {text}
    </button>
  );
}

export default Button;
