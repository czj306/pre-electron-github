/*
 * @Author: czj
 * @Date: 2021-04-18 22:25:33
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:46:31
 * @Description:
 */
import { reactive } from "vue";

export const State = {
  show: false,
};

export function createState() {
  return reactive(State);
}
