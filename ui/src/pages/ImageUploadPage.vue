<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Image Upload/Selector</div>
    <div class="row q-gutter-y-md">
      <div class="col-lg-2 col-md-3 col-12">
        <q-img
          style="min-height: 150px !important"
          :src="uploadedImage || placeholderImage"
          spinner-color="dark"
          spinner-size="50px"
        />
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-12">
            <input
              id="upload"
              type="file"
              accept=".jpg, jpeg, .png"
              hidden
              @change="handleUploadClick"
            />
            <label for="upload">
              <q-item class="flex-center bg-blue-grey-1" clickable v-ripple>
                <q-icon name="add" size="50px" color="blue-grey-4" />
              </q-item>
            </label>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const placeholderImage = ref('src/assets/placeholder.jpg')
const uploadedImage = ref(null)
const handleUploadClick = (event) => {
  const file = event.currentTarget.files[0]
  uploadedImage.value = URL.createObjectURL(file)
  console.log(uploadedImage.value)
}
</script>
