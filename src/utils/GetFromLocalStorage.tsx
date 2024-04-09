export const getFromStorage = async (key: string, init: any) => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem(key);
    return value || init;
  }
};
