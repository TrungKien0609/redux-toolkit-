// const initialState = [
//   {
//     id: 1,
//     name: "lean react",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "lean react2",
//     completed: true,
//     priority: "Low",
//   },
//   {
//     id: 3,
//     name: "lean react3",
//     completed: false,
//     priority: "High",
//   },
// ];
// const todoListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       let todoStatus = state.find((todo) => todo.id === action.payload);
//       todoStatus.completed = !todoStatus.completed;
//       return state;
//     default:
//       return state;
//   }
// };
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    name: "lean react",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "lean react2",
    completed: true,
    priority: "Low",
  },
  {
    id: 3,
    name: "lean react3",
    completed: false,
    priority: "High",
  },
];
export default createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      let todoStatus = state.find((todo) => todo.id === action.payload);
      todoStatus.completed = !todoStatus.completed;
    },
  },
});
