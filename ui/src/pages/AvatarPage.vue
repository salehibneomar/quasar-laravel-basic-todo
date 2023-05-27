<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Avatar Test</div>
    <q-label class="q-mr-md">Rounded</q-label>
    <q-avatar color="red" text-color="white" icon="person" class="q-mr-md" />
    <q-label class="q-mr-md">Square</q-label>
    <q-avatar square color="blue" text-color="white" icon="wifi" class="q-mr-md" />
    <q-label class="q-mr-md">Small</q-label>
    <q-avatar size="30px" color="green" text-color="white" icon="zoom_out" class="q-mr-md" />
    <q-label class="q-mr-md">Big</q-label>
    <q-avatar size="100px" color="pink" text-color="white" icon="zoom_in" class="q-mr-md" />
    <q-label class="q-mr-md">Rounded</q-label>
    <q-avatar
      rounded
      color="black"
      text-color="white"
      icon="check_box_outline_blank"
      class="q-mr-md"
    />
    <q-label class="q-mr-md">Image</q-label>
    <q-avatar size="60px" class="q-mr-md">
      <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" alt="image_icon" />
    </q-avatar>
  </q-page>
</template>
