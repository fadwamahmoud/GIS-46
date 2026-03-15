import { useState } from "react";

function GamePage() {
  // when game ends => reset
  const [key, setKey] = useState(0);

  // new instance of Game with a fresh state
  // control when a specific component should be the same instance as
  // brand new instance with fresh state
  return <Game key={key} resetGame={() => setKey(key + 1)} />;
}
