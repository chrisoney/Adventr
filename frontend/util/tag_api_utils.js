export const fetchAllTags = () =>
  $.ajax({
    method: 'GET',
    url: '/api/tags',
  });

export const fetchSingleTag = (tagId) =>
  $.ajax({
    method: 'GET',
    url: `/api/tags/${tagId}`,
  });

export const createTag = (tag) => {
  return $.ajax({
    method: 'POST',
    url: `/api/tags`,
    data: tag,
    contentType: false,
    processData: false,
  });
};
