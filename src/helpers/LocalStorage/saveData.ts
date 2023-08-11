const saveData = (stateString='', key = 'redux-state') => {
  localStorage.setItem(key, stateString);
};

export default saveData;
