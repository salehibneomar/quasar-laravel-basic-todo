import { defineStore } from 'pinia'
import { api } from '../boot/axios'

export const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      todos: [],
      singleTodo: {}
    }
  },
  actions: {
    async getAll() {
      const response = await api.get('todos')
      const data = await response.data.todos
      this.todos = data
      return data
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
