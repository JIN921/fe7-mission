import type { MemoData } from "../types";

export function localStorageSetItem(key: string, value: MemoData[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function localStorageGetItem(key: string) {
  const getItem = localStorage.getItem(key);
  if (getItem) return JSON.parse(getItem);
  return [];
}
