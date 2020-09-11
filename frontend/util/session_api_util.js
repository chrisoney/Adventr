
export const signup = user => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
    success: (data) => {
      location.reload();
  }
  })
};

export const login = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
    success: (data) => {
      location.reload();
  }
  })
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
};