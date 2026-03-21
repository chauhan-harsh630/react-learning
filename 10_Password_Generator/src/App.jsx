import { useEffect, useState, useCallback, useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const CopyToClipBoard = useCallback(async () => {
    try {
      passwordRef.current?.select();
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => { setCopied(false) }, 2000);
    } catch (error) {
      console.log(error);
    }
  }, [password])
  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="box">
          <input type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef} />
          <button onClick={CopyToClipBoard} disabled={copied}>
            {copied ? "Copied ✅" : "Copy"}</button>
        </div>
        <div className="box">
          <input type="range"
            value={length}
            min={6}
            max={16}
            onChange={(e) => { setLength(Number(e.target.value)) }}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="box">
          <input type="checkbox"
            checked={numberAllowed}
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="box">
          <input type="checkbox"
            checked={charAllowed}
            onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;