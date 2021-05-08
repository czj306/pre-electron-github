/*
 * @Author: czj
 * @Date: 2021-04-18 22:25:07
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:46:56
 * @Description:
 */
import { readonly } from "vue";
import { createAction } from "./actions";
import { createState } from "./state";
import { createPersistStorage } from "./storage";

const state = createState();
const action = createAction(state);

export const useStore = () => {
  const store = {
    state: createPersistStorage(state),
    action: readonly(action),
  };

  return store;
};
