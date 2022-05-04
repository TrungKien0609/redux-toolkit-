// export const addTodoActions = {
//   type: "totoList/addTodo",
//   payload: {
//     id: 1,
//     name: "lean react",
//     completed: false,
//     priority: "Medium",
//   },
// };
// de tranh viec lam lai cocde redux cung cap method actionCreator
// va de dynamic action nua
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};
