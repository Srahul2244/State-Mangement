import React, { useState } from "react";

const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");

  // const handleChange =(e)=>{
  //   const data =e.target.value;
  //   setText(data)
  // }

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter Text"
        value={text}
      />
      <button onClick={() => getData(text)}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
