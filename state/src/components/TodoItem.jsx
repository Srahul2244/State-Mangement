import React from "react";

const TodoItem = ({ data, handleStatus, handleDelete, handleEdit }) => {
  return (
    <div>
      <div> {data.id}</div>
      {data.title} -{data.status ? "Done" : "Not Completed"}
      <button onClick={() => handleStatus(data.id)}>Toggle</button>
      <button onClick={() => handleDelete(data.id)}>Delete</button>
      <button onClick={() => handleEdit(data.title)}>Edit</button>
    </div>
  );
};

export default TodoItem;
