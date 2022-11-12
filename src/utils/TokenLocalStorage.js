const KEY = "token_cedeshops";

export const setToken = (value) => {
  localStorage.setItem(KEY, value);
};

export const getToken = () => {
	localStorage.getItem(KEY);
}

export const removeToken = () => {
	localStorage.removeItem(KEY);
}