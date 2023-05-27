<template>
  <q-page padding>
    <div class="text-h4">Quasar Components Test Ground</div>
    <q-separator class="q-mt-md" size="2px" color="primary" />

    <q-list bordered separator class="q-mt-lg">
      <q-item clickable to="/ajax-bar">
        <q-item-section> Ajax Bar </q-item-section>
        <q-item-section avatar>
          <q-icon name="horizontal_rule" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/avatar">
        <q-item-section> Avatar </q-item-section>
        <q-item-section avatar>
          <q-icon name="image" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/badge">
        <q-item-section> Badge </q-item-section>
        <q-item-section avatar>
          <q-icon name="badge" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/banner">
        <q-item-section> Banner </q-item-section>
        <q-item-section avatar>
          <q-icon name="ad_units" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/bar">
        <q-item-section> Bar </q-item-section>
        <q-item-section avatar>
          <q-icon name="space_bar" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/breadcrumbs">
        <q-item-section> Breadcrumbs </q-item-section>
        <q-item-section avatar>
          <q-icon name="bakery_dining" />
        </q-item-section>
      </q-item>
      <q-expansion-item label="Buttons">
        <q-list separator class="q-px-lg q-pb-lg">
          <q-item clickable to="/buttons">
            <q-item-section>Different Buttons </q-item-section>
          </q-item>
          <q-item clickable to="/buttons/group">
            <q-item-section>Buttons Groups </q-item-section>
          </q-item>
          <q-item clickable to="/buttons/dropdown">
            <q-item-section>Buttons Dropdown </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <q-item clickable to="/card">
        <q-item-section> Card </q-item-section>
        <q-item-section avatar>
          <q-icon name="credit_card" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/chip">
        <q-item-section> Chip </q-item-section>
        <q-item-section avatar>
          <q-icon name="memory" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/dialog">
        <q-item-section> Dialog </q-item-section>
        <q-item-section avatar>
          <q-icon name="forward_to_inbox" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/menu">
        <q-item-section> Menu </q-item-section>
        <q-item-section avatar>
          <q-icon name="menu" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/table">
        <q-item-section> Table </q-item-section>
        <q-item-section avatar>
          <q-icon name="table_chart" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/fab">
        <q-item-section> Floating Action Button </q-item-section>
        <q-item-section avatar>
          <q-icon name="add_reaction" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/list">
        <q-item-section> List </q-item-section>
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/form-components">
        <q-item-section> Form Components </q-item-section>
        <q-item-section avatar>
          <q-icon name="description" />
        </q-item-section>
      </q-item>
      <q-item clickable to="/test">
        <q-item-section>Test</q-item-section>
        <q-item-section avatar>
          <q-icon name="construction" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup></script>
