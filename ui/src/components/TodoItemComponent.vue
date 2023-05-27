<template>
  <q-item>
    <q-item-section side>
      <q-badge color="primary" :label="`ID#${todo.id}`" />
    </q-item-section>
    <template v-if="!isDeleting">
      <q-item-section>
        <div class="text-body2">{{ todo.title }}</div>
      </q-item-section>
      <q-item-section side>
        <div class="flex row-inline q-gutter-x-xs">
          <q-btn
            icon="check"
            :color="todo.is_completed == 0 ? 'grey-11' : 'green-11'"
            :text-color="todo.is_completed == 0 ? 'grey' : 'positive'"
            dense
            unelevated
            round
            :loading="isUpdating"
            :disable="isUpdating"
            @click="handleUpdateClick(todo)"
          />
          <q-btn
            icon="delete"
            color="negative"
            dense
            flat
            unelevated
            round
            @click.prevent="handleDeleteClick(todo.id)"
          />
        </div>
      </q-item-section>
    </template>
    <q-item-section v-else> Attempting to Delete... </q-item-section>
  </q-item>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useTodoStore } from '../stores/todo-store'

const props = defineProps(['todo', 'ajaxbar'])
const todoStore = useTodoStore()
const $q = useQuasar()
const isDeleting = ref(false)
const isUpdating = ref(false)

const handleDeleteClick = (id) => {
  $q.dialog({
    title: 'Want to Delete?',
    message: "You won't be able to revert the changes!",
    cancel: true,
    ok: {
      color: 'negative',
      flat: true,
      label: 'OKAY'
    },
    cancel: {
      color: 'grey',
      flat: true
    }
  }).onOk(() => {
    isDeleting.value = true
    todoStore
      .remove(id)
      .then((d) => {
        $q.notify({
          type: 'positive',
          message: d,
          position: 'top-right',
          timeout: 2000,
          progress: true
        })
        props.ajaxbar.start()
        todoStore.getAll().then((d) => {
          props.ajaxbar.stop()
          isDeleting.value = false
        })
      })
      .catch((e) => {
        $q.notify({
          type: 'negative',
          message: e.response.data.message,
          position: 'top-right',
          timeout: 2000,
          progress: true
        })
        isDeleting.value = false
      })
  })
}

const handleUpdateClick = (currentTodo) => {
  isUpdating.value = true
  const updatedTodo = { is_completed: currentTodo.is_completed == 1 ? 0 : 1 }
  todoStore
    .edit(currentTodo.id, updatedTodo)
    .then((d) => {
      $q.notify({
        type: 'positive',
        message: d,
        position: 'top-right',
        timeout: 2000,
        progress: true
      })
      props.ajaxbar.start()
      todoStore.getAll().then((d) => {
        props.ajaxbar.stop()
        isUpdating.value = false
      })
    })
    .catch((e) => {
      const error = e.response.data.message ? e.response.data.message : 'Something went wrong!'
      $q.notify({
        type: 'negative',
        message: error,
        position: 'top-right',
        timeout: 2000,
        progress: true
      })
      isUpdating.value = false
    })
}
</script>
