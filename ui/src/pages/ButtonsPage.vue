<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Buttons Test</div>
    <q-btn label="Normal" class="q-mr-md q-mb-md" />
    <q-btn label="Colored" color="red" class="q-mr-md q-mb-md" />
    <q-btn label="Push" color="green" class="q-mr-md q-mb-md" push />
    <q-btn label="R" color="yellow" class="q-mr-md q-mb-md" text-color="black" round />
    <q-btn label="Rounded Corner" color="pink" class="q-mr-md q-mb-md" rounded />
    <q-btn label="Unelevated" color="blue" class="q-mr-md q-mb-md" unelevated />
    <q-btn label="Flat" color="orange" class="q-mr-md q-mb-md" flat />
    <q-btn label="Disabled" color="black" class="q-mr-md q-mb-md" disabled />
    <q-btn label="Loading" color="accent" class="q-mr-md q-mb-md" loading />
    <q-btn
      label="Percentage"
      color="positive"
      class="q-mr-md q-mb-md"
      :loading="isLoading"
      :percentage="percentage"
      @click="starLoading"
    />
    <q-btn label="Square" color="accent" class="q-mr-md q-mb-md" square />
    <q-btn label="Glossy" color="secondary" class="q-mr-md q-mb-md" glossy />
    <q-btn label="Dense" color="info" class="q-mr-md q-mb-md" dense />
    <q-btn label="Outline" color="dark" class="q-mr-md q-mb-md" outline />
    <q-btn label="No Caps" color="dark" class="q-mr-md q-mb-md" no-caps />
    <q-btn label="Icon Left" color="light-green" class="q-mr-md q-mb-md" icon="account_circle" />
    <q-btn label="Icon Right" color="grey" class="q-mr-md q-mb-md" icon-right="account_circle" />
    <q-btn
      label="Left Right"
      color="brown"
      class="q-mr-md q-mb-md"
      icon="account_circle"
      icon-right="account_circle"
    />
    <q-btn label="Stack" color="deep-orange" class="q-mr-md q-mb-md" icon="account_circle" stack />
    <q-btn color="primary" label="Tooltip" class="q-mr-md q-mb-md">
      <q-tooltip class="dark">This is a tooltip</q-tooltip>
    </q-btn>
    <q-btn label="Image" class="q-mr-md q-mb-md">
      <q-avatar class="q-ml-sm" size="30px">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
      </q-avatar>
    </q-btn>
    <q-btn class="q-mr-md q-mb-md" color="primary" label="Custom Spinner" :loading="true">
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn>
    <q-btn color="green" label="No Ripple" :ripple="false" class="q-mr-md q-mb-md" />
    <q-btn
      label="Red Center Ripple"
      :ripple="{ center: true, color: 'red' }"
      class="q-mr-md q-mb-md"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const percentage = ref(0)
const isLoading = ref(false)

const starLoading = () => {
  isLoading.value = true
  const internval = setInterval(() => {
    percentage.value = percentage.value + 1
    if (percentage.value == 100) {
      isLoading.value = false
      clearInterval(internval)
    }
  }, 50)
}
</script>
