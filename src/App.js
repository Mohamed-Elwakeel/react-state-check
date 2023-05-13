import "./App.css";
import { useState } from "react";
import ME from "../src/assets/me.jpg";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="App">
      {isEnabled && (
        <div>
          <h1>FullName: Mohamed Hassan Elwakeel</h1>
          <h2>Profession: Civil Engineer</h2>
          <p>
            Bio: A civil engineer graduate who is aspiring to be a fullstack web
            developer.
          </p>
          <img src={ME} alt="Photo of me!!" />
        </div>
      )}

      <button onClick={() => setIsEnabled(!isEnabled)} role="button">
        Toggle State
      </button>
    </div>
  );
}

export default App;
