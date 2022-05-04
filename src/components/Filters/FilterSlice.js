const initialState = {
  search: "",
  status: "All",
  priority: [],
};
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state, // input  la state.filter san co
        search: action.payload,
      };
    case "filter/statusFilterChange":
      return {
        ...state,
        status: action.payload
      }
    case 'filter/priorityTodoChange':
      return {
        ...state,
        priority: [...action.payload]
      }
    default:
      return state;
  }
};
export default filtersReducer;
