<template>
  <q-page padding>
    <q-ajax-bar color="red" size="10px" position="top" reverse />
    <div class="text-h5 q-mb-lg">Ajax Bar Test</div>
    <q-btn
      color="red-8"
      label="Click To Fire Ajaxbar"
      no-caps
      :loading="isLoading"
      :disabled="isLoading"
      @click="fireAjaxbar"
    />

    <div v-if="isLoading" class="q-mt-md text-overline">Fetching Data...</div>
    <template v-else>
      <q-list v-if="demoData" bordered separator class="q-mt-lg">
        <q-item v-for="data in demoData" :key="data.id">
          <q-item-section>
            {{ data.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const isLoading = ref(false)
const demoData = ref(null)

const fireAjaxbar = async () => {
  isLoading.value = true
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const data = await response.data
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
  demoData.value = data
}
</script>
