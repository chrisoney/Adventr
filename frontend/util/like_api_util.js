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

export const likePosting = (like) => 
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: like,
    contentType: false,
    processData: false
  })

export const unlikePosting = (like) => (
  $.ajax({
    url: `/api/likes/${like.get("like[likeable_id]")}`,
    method: 'DELETE',
    data: like,
    contentType: false,
    processData: false
  })
)