import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { CommonResponse } from '@/api/types/common-response'

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axios.get(url, config)
  return response
}

const post = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<D>>> => {
  const response = await axios.post(url, data, config)
  return response
}

const patch = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<D>>> => {
  const response = await axios.patch(url, data, config)
  return response
}
const deleteAPI = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axios.delete(url, config)
  return response
}

export const customApi = {
  get,
  post,
  patch,
  delete: deleteAPI
}
