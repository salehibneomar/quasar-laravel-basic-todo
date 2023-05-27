<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">List Test</div>
    <div class="row">
      <div class="col-md-4">
        <q-list bordered class="bg-dark" dark>
          <q-item clickable class="q-pa-lg">
            <q-item-section avatar>
              <q-btn icon="wifi" round unelevated color="green" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline class="q-mb-sm">WIFI</q-item-label>
              <q-item-label caption lines="3" class="text-justify q-pr-sm"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cupiditate expedita
                odio nulla amet dolores, quasi facilis debitis atque possimus doloribus mollitia
                dolorem blanditiis a ducimus officiis laborum itaque numquam inventore et nihil
                illum consectetur ut esse. Possimus vero aliquam dolorem id voluptas ad quo omnis,
                quidem perspiciatis nulla voluptate.</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-badge color="red" class="q-mb-sm"> <q-icon name="5g" size="15px" /> </q-badge>
              <q-item-label caption>Available</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced inset="item" dark />

          <q-item clickable class="q-pa-lg">
            <q-item-section avatar>
              <q-btn icon="bluetooth" round unelevated color="blue" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline class="q-mb-sm">BLUETOOTH</q-item-label>
              <q-item-label caption lines="3" class="text-justify q-pr-sm"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cupiditate expedita
                odio nulla amet dolores, quasi facilis debitis atque possimus doloribus mollitia
                dolorem blanditiis a ducimus officiis laborum itaque numquam inventore et nihil
                illum consectetur ut esse. Possimus vero aliquam dolorem id voluptas ad quo omnis,
                quidem perspiciatis nulla voluptate.</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              <q-badge color="green" class="q-mb-sm">
                <q-icon name="bluetooth_connected" size="15px" />
              </q-badge>
              <q-item-label caption>Connected</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
