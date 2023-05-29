<template>
  <q-btn color="primary" icon="check" label="OK" @click="onClick" />
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['testemit'])
const onClick = () => {
  emit('testemit', 'Hello From Child')
}
</script>
