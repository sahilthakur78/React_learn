import { useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(17);
  const [numbers, setNumbers] = useState(true);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+[]{}";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numbers, characters]);

  const copyPassword = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h2>Password generator</h2>

        <div className="input-group">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Password"
          />
          <button onClick={copyPassword}>copy</button>
        </div>

        <div className="controls">
          <input
            type="range"
            min="6"
            max="25"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <span>Length: {length}</span>

          <label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={characters}
              onChange={() => setCharacters(!characters)}
            />
            Characters
          </label>
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;