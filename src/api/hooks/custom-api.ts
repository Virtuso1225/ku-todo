import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { CommonResponse } from '@/api/types/common-response'
import API from '@/lib/axios/custom-axios'

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await API.get(url, config)
  return response
}

const post = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<D>>> => {
  const response = await API.post(url, data, config)
  return response
}

const patch = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<D>>> => {
  const response = await API.patch(url, data, config)
  return response
}
const deleteAPI = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await API.delete(url, config)
  return response
}

export const customApi = {
  get,
  post,
  patch,
  delete: deleteAPI
}
