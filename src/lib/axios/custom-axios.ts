import axios from 'axios'

const API = axios.create({
  baseURL: 'https://ku-todo.deno.dev/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

export default API
