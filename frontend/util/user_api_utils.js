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
    data: user,
    id: user.get('user[id]'),
    contentType: false,
    processData: false,
  });
};

export const addTagToUser = (tag) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users_tags',
    data: tag,
  });
};

export const removeTagFromUser = (users_tag) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users_tags/${users_tag.get('users_tag[id]')}`,
  });
};