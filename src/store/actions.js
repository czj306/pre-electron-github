
/*
 * @Author: czj
 * @Date: 2021-04-18 22:25:52
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:46:48
 * @Description:
 */
const updateShow = (state) => {
  return (data) => {
    state.show = data;
  };
};

/**
 * 创建Action
 * @param state
 */
export function createAction(state) {
  return {
    updateShow: updateShow(state),
  };
}
