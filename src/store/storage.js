/*
 * @Author: czj
 * @Date: 2021-04-18 22:29:33
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:45:57
 * @Description:
 */
import { watch, toRaw, readonly } from "vue";

export function createPersistStorage(state, key = "default") {
  const STORAGE_KEY = "--APP-STORAGE--";

  // init value
  Object.entries(getItem(key)).forEach(([key, value]) => {
    state[key] = value;
  });

  function setItem(state) {
    const stateRow = getItem();
    stateRow[key] = state;
    const stateStr = JSON.stringify(stateRow);
    localStorage.setItem(STORAGE_KEY, stateStr);
  }

  function getItem(key) {
    const stateStr = localStorage.getItem(STORAGE_KEY) || "{}";
    const stateRow = JSON.parse(stateStr) || {};
    return key ? stateRow[key] || {} : stateRow;
  }

  watch(state, () => {
    const stateRow = toRaw(state);
    setItem(stateRow);
  });

  return readonly(state);
}
