import { useState } from "react";

function App() {

  const [text, setText] = useState("");

  function handleChange(e){
    setText(e.target.value);
  }

  function handleKeyDown(e){
    console.log(e.key);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submitted");
  }

  function handleClick(){
    console.log("Button clicked");
  }

  return (
    <>
      <h1>Event Handling</h1>

      <button onClick={handleClick}>Click me</button>

      <button onClick={()=>alert("Button clicked")}>
        Alert button
      </button>

      <input
        type="text"
        placeholder="Enter here"
        onChange={handleChange}
      />

      <p>You are typing: {text}</p>

      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={handleKeyDown}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onFocus={()=>console.log("Input focused")}
          onBlur={()=>console.log("Input blurred")}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;