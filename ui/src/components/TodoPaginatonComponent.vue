<template>
  <q-pagination
    :max="todoStore.pageInformation.lastPage"
    v-model="todoStore.pageInformation.currentPage"
    direction-links
    active-design="unelevated"
    color="grey"
    active-color="blue-2"
    active-text-color="blue-10"
    @click.prevent="handlePageNavigation"
  />
</template>

<script setup>
import { defineProps } from 'vue'
import { useTodoStore } from '../stores/todo-store'
const todoStore = useTodoStore()
const props = defineProps(['ajaxbar'])

const handlePageNavigation = () => {
  props.ajaxbar.start()
  todoStore.filterQueries = {
    ...todoStore.filterQueries,
    page: todoStore.pageInformation.currentPage
  }
  todoStore.getAll().finally(() => props.ajaxbar.stop())
}
</script>
