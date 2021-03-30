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

export const addTagToUser = (tagId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users_tags',
    data: { tagId },
  });
};

export const removeTagFromUser = (tagId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users_tags/${tagId}`,
    data: { tagId },
  });
};