<template>
  <q-page padding>
    <q-ajax-bar color="negative" size="3px" position="top" skip-hijack ref="ajaxBar" />
    <div class="text-h5 q-mb-lg">Basic Quasar Todo (With Laravel API & Pinia)</div>
    <div class="q-mt-xl">
      <div class="flex row flex-center q-col-gutter-y-lg">
        <div class="col-md-12 flex flex-center">
          <todo-add-component-vue :ajaxbar="ajaxBar" />
        </div>
        <div class="col-md-6">
          <q-list bordered separator class="rounded-borders" v-if="todoStore.todos.length">
            <TodoItemComponent
              v-for="todo in todoStore.todos"
              :key="todo.id"
              :todo="todo"
              :ajaxbar="ajaxBar"
            />
          </q-list>
          <q-banner
            v-else-if="!isLoading && !todoStore.todos.length"
            class="bg-cyan-2 text-dark rounded-borders"
            >No Data</q-banner
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TodoAddComponentVue from '../components/TodoAddComponent.vue'
import TodoItemComponent from '../components/TodoItemComponent.vue'

import { useTodoStore } from '../stores/todo-store'
const todoStore = useTodoStore()
const ajaxBar = ref(null)
const isLoading = ref(false)

const getAllTodos = () => {
  ajaxBar.value.start()
  isLoading.value = true
  todoStore.getAll().finally(() => {
    isLoading.value = false
    ajaxBar.value.stop()
  })
}

onMounted(() => {
  getAllTodos()
})
</script>
