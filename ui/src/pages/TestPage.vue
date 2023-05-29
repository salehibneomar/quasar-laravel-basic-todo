<template>
  <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif" label="Show Notification" />
    &ensp;
    <test-component @testemit="emitTrigger" />
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import TestComponent from 'src/components/TestComponent.vue'

export default {
  setup() {
    const $q = useQuasar()
    const emitTrigger = (val) => {
      $q.notify({
        message: val
      })
    }
    return {
      showNotif() {
        $q.notify({
          message: 'Jim pinged you.',
          color: 'black',
          progress: true,
          timeout: 1000,
          position: 'top-right',
          group: false,
          actions: [
            {
              color: 'yellow',
              icon: 'cancel',
              round: true
            }
          ]
        })
      },
      emitTrigger
    }
  },
  components: { TestComponent }
}
</script>
