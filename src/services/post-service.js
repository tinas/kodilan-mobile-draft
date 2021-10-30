import axios from 'axios'
import * as constants from '../utils/constants'

axios.defaults.baseURL = 'https://api.kodilan.com'

export const fetchRecentPosts = async (period, page = 1) => {
  const request = axios.get(`/posts?get=${constants.PER_PAGE}&period=${period}&page=${page}`)

  return request
}

export const fetchFeaturedPosts = async () => {
  const request = axios.get('/posts?get=6&is_featured=1')

  return request
}

export const fetchAllPosts = async (page = 1) => {
  const request = axios.get(`/posts?get=${constants.PER_PAGE}&page=${page}`)

  return request
}

export const search = async (query) => {
  const request = axios.get(`/search?query=${query}`)

  return request
}

export const fetchByTag = async (tag) => {
  const request = axios.get(`/tags/${tag}/posts`)

  return request
}

export const fetchByCompany = async (company) => {
  const request = axios.get(`/companies/${company}/posts`)

  return request
}

export const fetchByPosition = async (positionTypeNumber) => {
  const request = axios.get(`/search?type=${positionTypeNumber}`)

  return request
}
