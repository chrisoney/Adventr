export const fetchAllReblogs = () =>
  $.ajax({
    method: 'GET',
    url: '/api/reblogs'
  });

export const fetchSingleReblog = (reblogId) =>
  $.ajax({
    method: 'GET',
    url: `/api/reblogs/${reblogId}`
  });

export const createReblog = (reblog) =>
  $.ajax({
    method: 'POST',
    url: `/api/reblogs`,
    data: reblog,
    contentType: false,
    processData: false
  });


export const updateReblog = (reblog) => {
  return $.ajax({
    method: 'PUT',
    url: `/api/reblogs/${reblog.get("reblog[id]")}`,
    data: reblog,
    id: reblog.get("reblog[id]"),
    contentType: false,
    processData: false
  });
}

export const deleteReblog = (reblogId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reblogs/${reblogId}`
  });
};

export const addTagToReblog = (tag_join) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tag_joins',
    data: tag_join,
    contentType: false,
    processData: false,
  });
};

export const removeTagFromReblog = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tag_joins/${id}`,
    data: { id },
  });
};