const initialState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
};
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state, // input  la state.filter san co
        search: action.payload,
      };
    default:
      return state;
  }
};
export default filtersReducer;
