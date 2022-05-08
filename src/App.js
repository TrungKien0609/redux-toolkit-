import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fake-api";
import { useEffect } from "react";

const { Title } = Typography;
setupServer();
function App() {
  useEffect(() => {
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({
        id: 4,
        name: "lean react4",
        completed: false,
        priority: "Medium",
      }),
    })
      .then((res) => fetch("/api/todos"))
      .then((res) => res.json())
      .then((res) => console.log(res));
    fetch("/api/todos")
      .then((res) => res.json())
      .then((res) => console.log(res));

    fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify({
        id: 4,
        name: "lean heheh",
        completed: true,
        priority: "Medium",
      }),
    }).then(() => {
      fetch("/api/todos")
        .then((res) => res.json())
        .then((res) => console.log(res));
    });
  });
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
//34.56
