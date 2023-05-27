<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Dialog Test</div>
    <q-list bordered separator>
      <template v-for="data in datas" :key="data.id">
        <q-item v-if="data.available" clickable>
          <q-item-section>
            {{ data.title }}
          </q-item-section>
          <q-item-section side>
            <q-btn dense icon="delete" flat color="red" round @click="handleDeleteBtn(data.id)" />
          </q-item-section>
        </q-item>
      </template>
    </q-list>

    <q-dialog v-model="deleteDialog" square>
      <q-card style="width: 300px">
        <q-card-section class="row bg-red text-white">
          <div class="col-10 text-h6">WANT TO DELETE ?</div>
          <div class="col-2">
            <q-btn icon="close" round flat dense class="float-right" v-close-popup />
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-caption">You won't be able to revert this action!</div>
        </q-card-section>
        <q-card-actions align="right" class="q-pt-none">
          <q-btn flat label="OK" color="warning" @click="confirmDelete(deleteId)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const datas = ref([
  {
    id: 1,
    title: 'Hridoy',
    available: true
  },
  {
    id: 2,
    title: 'Tusher',
    available: true
  },
  {
    id: 3,
    title: 'Saleh',
    available: true
  }
])

const deleteDialog = ref(false)
const deleteId = ref(null)
const handleDeleteBtn = (id) => {
  deleteDialog.value = true
  deleteId.value = id
}
const confirmDelete = (id) => {
  datas.value = datas.value.filter((data) => data.id !== id)
  deleteDialog.value = false
}
</script>
