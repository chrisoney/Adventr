export const fetchAllLikes = () => (
  $.ajax({
    url: '/api/likes',
    method: 'GET'
  })
)

export const receiveLike = (id) => (
  $.ajax({
    url: `/api/likes/${id}`,
    method: 'GET'
  })
)

export const likeQuest = (id) => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: {id}
  })
)

export const unlikeQuest = (id) => (
  $.ajax({
    url: `/api/likes/${id}`,
    method: 'DELETE',
    data: {id}
  })
)