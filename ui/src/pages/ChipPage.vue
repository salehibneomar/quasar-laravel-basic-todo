<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Chip Test</div>
    <q-chip
      v-for="chip in chips"
      :key="chip.id"
      clickable
      color="grey"
      text-color="white"
      removable
      v-model:selected.sync="chip.selected"
      v-model="chip.available"
      @remove="chip.available = false"
      flat
    >
      {{ chip.title }}
    </q-chip>
    <div class="text-h5 q-my-lg">Database</div>
    <pre>
      {{ chips }}
    </pre>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const chips = ref([
  {
    id: 1,
    title: 'Apple',
    selected: false,
    available: true
  },
  {
    id: 2,
    title: 'Banana',
    selected: true,
    available: false
  },
  {
    id: 3,
    title: 'Orange',
    selected: true,
    available: true
  },
  {
    id: 4,
    title: 'Grape',
    selected: false,
    available: true
  }
])

// const removeChip = ()=>{

// }
</script>
