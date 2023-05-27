<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Badge Test</div>
    <q-item>
      <q-item-section side>
        <q-badge color="green-2" text-color="green-8"> #ID-2023 </q-badge>
      </q-item-section>
      <q-item-section side>
        <q-btn color="primary" round unelevated>
          <q-avatar icon="notifications" size="30px" />
          <q-badge color="red" floating>4</q-badge>
        </q-btn>
      </q-item-section>
      <q-item-section side>
        <q-btn color="green" round unelevated dense>
          <q-avatar icon="mail" size="20px" />
          <q-badge color="red" rounded floating />
        </q-btn>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script setup></script>

<style lang="css" scoped>
.badge-custom {
  position: absolute;
  top: 10% !important;
  right: 10% !important;
}
</style>
