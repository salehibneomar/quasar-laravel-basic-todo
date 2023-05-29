import { defineStore } from 'pinia'
import { api } from '../boot/axios'

export const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      todos: [],
      singleTodo: {},
      filterQueries: { status: '', page: 1 },
      pageInformation: {
        currentPage: 1,
        lastPage: 1
      }
    }
  },
  actions: {
    async getAll() {
      const queryString = new URLSearchParams(this.filterQueries).toString()
      const response = await api.get(`todos/?${queryString}`)
      const responseTodos = await response.data.todos
      this.todos = responseTodos.data
      this.pageInformation.currentPage = responseTodos.current_page
      this.pageInformation.lastPage = responseTodos.last_page
      return responseTodos
    },
    async add(todo) {
      const response = await api.post('todos', todo)
      const data = await response.data.message
      return data
    },
    async remove(id) {
      const response = await api.delete(`todos/${id}`)
      const data = await response.data.message
      return data
    },
    async edit(id, todo) {
      const response = await api.put(`todos/${id}`, todo)
      const data = await response.data.message
      return data
    }
  }
})
