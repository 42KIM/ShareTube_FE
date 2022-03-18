export const getLocalStorageToken = (tokenKey: string): string => {
  try {
    const token = localStorage.getItem(tokenKey);
    return token ? JSON.parse(token) : '';
  } catch (e) {
    console.error(e);
    return '';
  }
};
