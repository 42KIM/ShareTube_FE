export const getLocalStorageItem = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
