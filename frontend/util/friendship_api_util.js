export const addFriend = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: friendship
  });
};

export const fetchFriendHistory = (friendId) => {
  return $.ajax({
      method: 'GET',
      url: `api/friendships/${friendId}`
  });
};
