const getData = (key = 'redux-state') => {
  try {
    const data = localStorage.getItem(key) || '';
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to get state from localStorage: ', error);
  }
};

export default getData;
