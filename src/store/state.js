/*
 * @Author: czj
 * @Date: 2021-04-18 22:25:33
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 17:03:28
 * @Description:
 */
import { reactive } from "vue";

export const State = {
  show: false,
};

export function createState() {
  return reactive(State);
}
