import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  const Data = (todo) => {
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todoList, payload]);
  };

  const handleStatus = (id) => {
    setTodoList(
      todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((e) => (e.id !== id ? e : "")));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.title);
  };

  const handleSave = () => {
    setTodoList(
      todoList.map((item) =>
        item.id === editId ? { ...item, title: editText } : item
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <TodoInput getData={Data} />
      {/*todo list :*/}
      {todoList.map((item) => (
        <div key={item.id}>
          {editId === item.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <TodoItem
              data={item}
              handleStatus={handleStatus}
              handleDelete={handleDelete}
              handleEdit={() => handleEdit(item)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
