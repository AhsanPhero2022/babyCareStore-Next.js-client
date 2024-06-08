export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};