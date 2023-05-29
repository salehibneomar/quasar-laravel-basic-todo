<template>
  <q-item class="q-px-none">
    <q-form class="full-width">
      <q-input
        outlined
        label="Todo Title"
        v-model="typedTodo"
        clearable
        counter
        :error="hasSubmissionError"
        :error-message="submissionErrorMesssage"
      >
        <template v-slot:append>
          <q-btn
            color="blue-2"
            text-color="primary"
            icon="add"
            dense
            unelevated
            round
            type="submit"
            @click.prevent="handleSubmit"
            :loading="isLoading"
            :disable="isLoading"
          />
        </template>
        <template v-slot:counter>
          <div :class="[typedTodoComputedClass]">
            {{ `${typedTodo ? typedTodo.length : 0} / 30` }}
          </div>
        </template>
      </q-input>
    </q-form>
  </q-item>
</template>

<script setup>
import { ref, computed, watch, defineProps } from 'vue'
import { useQuasar } from 'quasar'
import { useTodoStore } from '../stores/todo-store'

const $q = useQuasar()
const props = defineProps(['ajaxbar'])
const todoStore = useTodoStore()
const typedTodo = ref(null)
const hasSubmissionError = ref(false)
const submissionErrorMesssage = ref(null)
const isLoading = ref(false)

const handleSubmit = () => {
  isLoading.value = true
  const todo = { title: typedTodo.value }
  todoStore
    .add(todo)
    .then((d) => {
      $q.notify({
        type: 'positive',
        message: d,
        position: 'top-right',
        timeout: 2000,
        progress: true
      })
      typedTodo.value = null
      props.ajaxbar.start()
      todoStore.getAll().then((d) => props.ajaxbar.stop())
    })
    .catch((e) => {
      hasSubmissionError.value = true
      submissionErrorMesssage.value = e.response.data.errors.title[0]
    })
    .finally(() => {
      isLoading.value = false
    })
}

const typedTodoComputedClass = computed(() => {
  return typedTodo.value && typedTodo.value.length > 30 ? 'text-red' : ''
})

watch(typedTodo, () => {
  if (typedTodo.value && typedTodo.value.length >= 3 && typedTodo.value.length <= 30) {
    hasSubmissionError.value = false
  }
})
</script>
