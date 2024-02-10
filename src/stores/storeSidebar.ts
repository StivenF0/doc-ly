import { atom } from "nanostores";

export const sidebarShow = atom(false);

export const setSidebarShow = (value: boolean) => {
  sidebarShow.set(value);
};
