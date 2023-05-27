<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Markup Table Test</div>
    <div class="row">
      <div class="col-md-6">
        <q-markup-table separator="horizontal">
          <thead>
            <tr>
              <th class="text-left" style="width: 20%">#ID</th>
              <th class="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><q-badge label="1" rounded color="red" /></td>
              <td>Saleh</td>
            </tr>
            <tr>
              <td><q-badge label="2" rounded color="red" /></td>
              <td>Jhon</td>
            </tr>
            <tr>
              <td><q-badge label="3" rounded color="red" /></td>
              <td>Jane</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
