export const loadFromStorage = <T>(key: string, onError: T | null = null): T | null => {
  try {
    const loaded = JSON.parse(localStorage.getItem(key) || '');
    return loaded;
  } catch (err) {
    return onError;
  }
};

export const saveToLocalStorage = <T>(key: string, data: T) => {
  try {
    const converted = JSON.stringify(data);
    localStorage.setItem(key, converted);
  } catch (err) {
    console.log(`Got error on saving data to local storage: ${err}`);
  }
};
