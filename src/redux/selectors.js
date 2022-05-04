import { createSelector } from "reselect"; //reselect
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   // khong the su dung truc tiep searchTextSelector
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todosRemaining;
// };
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const todosRemainingSelector = createSelector(
  todoListSelector, // return todoList
  searchTextSelector, // return searchText
  (todoList, searchText) => {
    const todosRemaining = todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
    return todosRemaining;
  }
);
