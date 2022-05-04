const initialState = {
  todoList: [
    {
      id: 1,
      name: "lean react",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "lean react2",
      completed: false,
      priority: "low",
    },
    {
      id: 3,
      name: "lean react3",
      completed: false,
      priority: "middle",
    },
  ],
};
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default todoListReducer;
