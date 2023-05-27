<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Floating Action Button (FAB) Test</div>
    <q-page-sticky :offset="[40, 40]">
      <q-fab icon="add" color="primary" direction="up">
        <q-fab-action
          icon="image"
          color="green"
          external-label
          label="Image"
          label-position="left"
        />
        <q-fab-action
          icon="videocam"
          color="red"
          external-label
          label="Video"
          label-position="left"
        />
        <q-fab-action
          icon="description"
          color="blue"
          external-label
          label="File"
          label-position="left"
        />
      </q-fab>
      <q-tooltip anchor="center left" self="center right"> Add Items </q-tooltip>
    </q-page-sticky>
  </q-page>
</template>

<script setup></script>
