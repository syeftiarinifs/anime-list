const delData = (key = 'redux-state') => {
  localStorage.removeItem(key);
};

export default delData;
