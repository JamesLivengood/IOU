export const fetchRecentActivity = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/recent_activity',
  });
};
