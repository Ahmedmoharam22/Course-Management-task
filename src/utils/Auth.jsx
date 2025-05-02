export const isLoggedIn = () => {
  return localStorage.getItem("user") !== null;
};

export const login = (email) => {
  localStorage.setItem("user", email);
};

export const logout = () => {
  localStorage.removeItem("user");
};
