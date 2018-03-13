export const selectUserResults = (state) => {
  return Object.values(state.entities.users).filter((user) => (
    state.ui.searchResults.userIds.includes(user.id.toString())
  ));
};
