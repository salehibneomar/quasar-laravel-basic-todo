<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Banner Test</div>

    <q-banner v-show="isOpen" class="bg-red-5 text-white" rounded inline-actions>
      <template v-slot:avatar>
        <q-avatar icon="warning" />
      </template>
      Stop Don't do anything
      <template v-slot:action>
        <q-btn label="close" icon="close" color="red-14" unelevated @click="closeBanner" />
      </template>
    </q-banner>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(true)
const closeBanner = () => {
  isOpen.value = false
}
</script>
