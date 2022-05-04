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
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default todoListReducer;
