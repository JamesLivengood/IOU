export const addFriend = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: friendship
  });
};
