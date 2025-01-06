import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle, styled } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import TodoCreate from "./component/TodoCreate";
import TodoList from "./component/TodoList";
import { TodoProvider, useTodoState } from "./TodoContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
    body{
    background-image: linear-gradient(to right bottom, slateblue, thistle);
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
}
`;

const H1 = styled.h1`
  margin-top: 50px;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  // ✅ 백엔드 API 경로 수정
  useEffect(() => {
    axios
      .get("http://localhost:8080/app/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // ✅ POST 요청 경로 수정
  const addTodo = async () => {
    try {
      await axios.post("http://localhost:8080/app/todos", newTodo);
      alert("Todo added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding Todo:", error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTodo.description}
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
// return (
//     <>
//       <TodoProvider>
//         <GlobalStyle/>
//           <TodoTemplate>

//               <H1>
//               To Do List
//               </H1>

//             <TodoCreate/>
//             <TodoList/>

//           </TodoTemplate>
//       </TodoProvider>
//     </>
// );

export default App;
