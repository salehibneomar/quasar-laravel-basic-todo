<template>
  <q-chip
    v-for="filter in filters"
    :key="filter.label"
    :label="filter.label"
    :selected="todoStore.filterQueries.status === filter.value"
    :color="todoStore.filterQueries.status === filter.value ? 'deep-orange-7' : 'grey-4'"
    :text-color="todoStore.filterQueries.status === filter.value ? 'white' : 'dark'"
    clickable
    :disable="todoStore.filterQueries.status === filter.value ? true : false"
    class="no-shadow"
    @click="handleFilterClick(filter.value)"
  />
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useTodoStore } from '../stores/todo-store'

const todoStore = useTodoStore()
const props = defineProps(['ajaxbar'])

const filters = ref([
  { label: 'All', value: '' },
  { label: 'Incomplete', value: 0 },
  { label: 'Completed', value: 1 }
])

const handleFilterClick = (status) => {
  props.ajaxbar.start()
  todoStore.filterQueries = { ...todoStore.filterQueries, status: status, page: 1 }
  todoStore.getAll().finally(() => props.ajaxbar.stop())
}
</script>
