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

export const addTagToUser = (tag_join) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tags_joins',
    data: tag_join,
  });
};

export const removeTagFromUser = (tagJoinId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tags_joins/${tagJoinId}`,
    data: { tagJoinId },
  });
};