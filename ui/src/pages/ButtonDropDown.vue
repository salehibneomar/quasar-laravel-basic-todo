<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Dropdown Buttons</div>
    <q-btn-dropdown
      label="Dropdown"
      auto-close
      menu-anchor="bottom right"
      menu-self="top middle"
      class="q-mr-xl"
    >
      <q-list dense>
        <q-item clickable>Item 1</q-item>
        <q-item clickable>Item 2</q-item>
        <q-item clickable>Item 3</q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown label="Split" split color="red" dropdown-icon="expand_more">
      <q-list dense>
        <q-item clickable>Item 1</q-item>
        <q-item clickable>Item 2</q-item>
        <q-item clickable>Item 3</q-item>
      </q-list>
    </q-btn-dropdown>
  </q-page>
</template>

<script setup></script>
