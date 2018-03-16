export const addFriend = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: friendship
  });
};

export const fetchFriendHistory = (friendId) => {
  // debugger
  return $.ajax({
      method: 'GET',
      url: `api/friendships/${friendId}`,
  });
};
