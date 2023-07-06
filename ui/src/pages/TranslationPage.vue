<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Internationalization Test</div>
    <div class="text-overline q-mb-lg" style="font-size: 15pt; font-weight: 400">
      Current Lanaguage: {{ getCurrentLanguage }}
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-list bordered separator>
          <q-item v-for="(message, index) in internationalization" :key="index">
            <q-item-section>{{ $t(message) }}</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-6">
        <q-select v-model="locale" :options="localeOptions" emit-value map-options filled />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import internationalization from 'src/assets/internationalization'
import { watch, ref, onMounted, computed } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'bn-BD', label: 'Bangla' },
  { value: 'ko-KR', label: 'Korean' }
]

watch(locale, (newVal, oldVal) => {
  localStorage.setItem('language', newVal)
})

const getCurrentLanguage = computed(() => {
  return localeOptions.find((data) => {
    return data.value == locale.value
  }).label
})

onMounted(() => {
  if (localStorage.getItem('language')) {
    locale.value = localStorage.getItem('language')
  }
})
</script>
