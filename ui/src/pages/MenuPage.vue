<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Menu (Navbar) Test</div>

    <q-toolbar class="bg-secondary shadow-1 text-white">
      <q-item dense to="/">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
      </q-item>
      <q-separator dark vertical />
      <q-btn flat stretch label="HOME" />
      <q-separator dark vertical />
      <q-btn flat stretch label="ABOUT" />
      <q-separator dark vertical />
      <q-btn flat stretch label="CATEGORY" icon-right="expand_more">
        <q-menu fit square>
          <q-list dense>
            <q-item clickable>
              <q-item-section>Category 1</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Sub Category</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
              <q-menu square anchor="top right" self="top left">
                <q-list dense>
                  <q-item clickable>
                    <q-item-section>Sub Category 1</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Sub Sub Category</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                    <q-menu square anchor="top right" self="top left">
                      <q-list dense>
                        <q-item clickable>
                          <q-item-section> Sub Sub Category 1 </q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section> Sub Sub Category 2 </q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section> Sub Sub Category 3 </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Sub Category 3</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
            <q-item clickable>
              <q-item-section>Category 3</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-separator dark vertical />
      <q-space />
      <q-btn flat stretch icon="search">
        <q-popup-edit style="margin-top: 50px !important" anchor="bottom left" self="top left">
          <q-input
            dense
            autofocus
            icon="search"
            color="secondary"
            type="search"
            clearable
            v-model="searchValue"
          />
        </q-popup-edit>
      </q-btn>
      <q-separator dark vertical />
      <q-btn flat stretch icon="logout" />
    </q-toolbar>
    <div class="q-my-xl"></div>
    <q-toolbar class="bg-blue shadow-1 text-white">
      <q-item dense>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
      </q-item>
      <q-tabs v-model="currentTab">
        <q-tab name="home" label="HOME" />
        <q-tab name="about" label="About" />
        <q-tab name="faq" label="FAQ" />
      </q-tabs>
      <q-space />
      <q-btn flat stretch icon="search" />
      <q-separator vertical dark />
      <q-btn flat stretch icon="logout" />
    </q-toolbar>
    <pre class="q-mt-xl">
      {{ searchValue }}
    </pre>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const currentTab = ref('home')
const searchValue = ref(null)
</script>
