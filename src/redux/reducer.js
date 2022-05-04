import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";
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
const rootReducer = (
  // state = {
  //   filter: {},
  //   todoList: [],
  // },
  state = initialState,
  action
) => {
  /*action = {
        type : "loadsomehting",
        payload : {data}
    }*/
  // switch (action.type) {
  //   case "todoList/addTodo":
  //     return {
  //       ...state,
  //       todoList: [...state.todoList, action.payload],
  //     };
  //   case "filter/searchFilterChange":
  //     return {
  //       ...state,
  //       filter: {
  //         ...state.filter,
  //         search: action.payload,
  //       }
  //     };
  //   default:
  //     return state;
  // }
  return {
    filter: filtersReducer(state.filter, action),
    todoList: todoListReducer(state.todoList, action),
  };
};
export default rootReducer;
