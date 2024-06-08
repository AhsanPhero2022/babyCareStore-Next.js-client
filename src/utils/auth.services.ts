import { authKey } from "./authkey";
import { removeFromLocalStorage } from "./local-storage";

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
