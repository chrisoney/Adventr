export const fetchAllUsers = (filters) =>
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { filters }
  });

export const fetchSingleUser = (userId) =>
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });