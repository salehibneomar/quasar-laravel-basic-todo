<template>
  <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif" label="Show Notification" />
  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup() {
    const $q = useQuasar()

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
      }
    }
  }
}
</script>
