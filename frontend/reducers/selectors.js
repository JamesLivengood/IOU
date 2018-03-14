export const selectUserResults = (state) => {
  return Object.values(state.entities.users).filter((user) => {
    // debugger
    return (state.ui.searchResults.userIds.includes(user.id.toString()));
  });
};
