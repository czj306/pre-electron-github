import axios from "axios"
import { useStore } from "@/store"

/*
 * @Author: czj
 * @Date: 2021-05-08 13:42:26
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 17:04:21
 * @Description:
 */
const BASE_URL = 'https://api.github.com/users/czj306'


export const api = (url = "") => {
  const store = useStore()
  store.action.updateShow(true)
  return axios.get(BASE_URL + url).then((res) => {
    store.action.updateShow(false)
    return res.data
  }).catch(() => {
    store.action.updateShow(false)
  })
}

