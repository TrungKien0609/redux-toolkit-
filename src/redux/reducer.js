const initialState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
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
const rootReducer = (state = initialState, action) => {
  /*action = {
        type : "loadsomehting",
        payload : {data}
    }*/
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: 4,
            name: "lean react4",
            completed: false,
            priority: "middle",
          },
        ],
      };
    default:
      return state;
  }
};
export default rootReducer;
