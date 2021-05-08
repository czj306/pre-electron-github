import axios from "axios"

/*
 * @Author: czj
 * @Date: 2021-05-08 13:42:26
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:24:22
 * @Description:
 */
const BASE_URL = 'https://api.github.com/users/czj306'


export const api = (url = "") => {
  return axios.get(BASE_URL + url).then((res) => {
    return res.data
  })
}

