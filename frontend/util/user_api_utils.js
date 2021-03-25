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

export const updateUser = (user) => {
  return $.ajax({
    method: 'PUT',
    url: `/api/users/${user.get('user[id]')}`,
    data: quest,
    id: quest.get('user[id]'),
    contentType: false,
    processData: false,
  });
};