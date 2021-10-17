import axios from 'axios'

export const getSvgData = (url) => {
  return axios.get(url)
}
