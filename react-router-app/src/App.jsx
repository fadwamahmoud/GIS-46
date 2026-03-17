import { useState } from "react";

import "./App.css";
import { Link } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is the main page</h1>

      <p>Here are some links to other pages: </p>

      <nav>
        <ul>
          <li>
            <Link to="profile/default"> Profile page</Link>
          </li>
          <li>
            <Link to="profile/fadwa"> Fadwa</Link>
          </li>
          <li>
            <Link to="profile/batman"> Batman</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
