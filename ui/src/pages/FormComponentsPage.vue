<template>
  <q-page padding>
    <div class="text-h5 q-mb-lg">Form Components Test</div>
    <div class="row q-col-gutter-xl">
      <div class="col-md-6">
        <q-card square>
          <q-card-section class="bg-teal text-white">
            <div class="text-h6 text-uppercase">User Information Form</div>
          </q-card-section>
          <q-form @submit.prevent="handleSubmit">
            <q-card-section class="q-pa-md">
              <div class="row q-col-gutter-md">
                <div class="col-md-6">
                  <q-input
                    type="text"
                    v-model="formData.firstName"
                    label="First Name"
                    outlined
                    color="teal"
                    :rules="[(val) => (val && val.length > 0) || 'First Name Is Required']"
                  >
                  </q-input>
                </div>
                <div class="col-md-6">
                  <q-input
                    type="text"
                    v-model="formData.lastName"
                    label="Last Name"
                    outlined
                    color="teal"
                    :rules="[(val) => (val && val.length > 0) || 'Last Name Is Required']"
                  />
                </div>
                <div class="col-md-12">
                  <q-input
                    type="email"
                    v-model="formData.email"
                    label="Email Address"
                    outlined
                    color="teal"
                    :rules="[(val, rules) => rules.email(val) || 'Enter Valid Email']"
                  >
                    <template v-slot:append>
                      <q-avatar icon="email" size="40px" />
                    </template>
                  </q-input>
                </div>
                <div class="col-md-4">
                  <q-select
                    outlined
                    v-model="formData.location"
                    :options="locations"
                    label="Location"
                    color="teal"
                    :rules="[(val) => val !== null || 'Location required']"
                  >
                    <template v-slot:option="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          {{ scope.opt.name }}
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-avatar icon="pin_drop" />
                    </template>
                  </q-select>
                </div>
                <div class="col-md-4">
                  <q-input
                    type="number"
                    v-model="formData.postCode"
                    min="0"
                    label="Post Code"
                    outlined
                    color="teal"
                  />
                </div>
                <div class="col-md-4">
                  <q-input
                    type="text"
                    v-model="formData.thana"
                    label="Thana"
                    outlined
                    color="teal"
                  />
                </div>
                <div class="col-md-6">
                  <div class="text-subtitle2 text-blue-grey-8">Select Gender</div>
                  <q-field
                    borderless
                    dense
                    v-model="formData.gender"
                    :rules="[(val) => val !== null || 'Please Select Your Gender']"
                  >
                    <template v-slot:control>
                      <q-radio
                        v-model="formData.gender"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="Male"
                        label="Male"
                        color="teal"
                      />
                      <q-radio
                        v-model="formData.gender"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="Female"
                        label="Female"
                        color="teal"
                      />
                      <q-radio
                        v-model="formData.gender"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="Other"
                        label="Other"
                        color="teal"
                      />
                    </template>
                  </q-field>
                </div>
                <div class="col-md-6">
                  <q-input
                    v-model="formData.dateOfBirth"
                    label="Date of Birth"
                    outlined
                    color="teal"
                    type="date"
                  />
                </div>
                <div class="col-md-12">
                  <div class="text-subtitle2 text-blue-grey-8 q-mb-lg">Monthly Income</div>
                  <q-range
                    v-model="formData.monthlyIncomeRange"
                    :min="1000"
                    :max="100000"
                    :step="1000"
                    label
                    color="teal"
                  />
                </div>
                <div class="col-md-12">
                  <q-input
                    label="About Yourself"
                    color="teal"
                    type="textarea"
                    outlined
                    autogrow
                    clearable
                    v-model="formData.about"
                    counter
                    :rules="[
                      (val) =>
                        val === null || (val.length >= 0 && val.length <= 50) || 'Over 50 Chars!'
                    ]"
                  >
                    <template v-slot:counter>{{
                      `${formData.about ? formData.about.length : 0} / 50`
                    }}</template>
                  </q-input>
                </div>
                <div class="col-md-12">
                  <q-field
                    borderless
                    dense
                    v-model="formData.termsAndConditions"
                    :rules="[(val) => val || 'You Must Agree!']"
                    class="q-pb-none"
                  >
                    <template v-slot:control>
                      <q-checkbox
                        v-model="formData.termsAndConditions"
                        label="I agree with terms and conditions"
                      />
                    </template>
                  </q-field>
                </div>
              </div>
            </q-card-section>
            <q-card-actions class="q-pb-lg q-px-md" align="right">
              <q-btn label="Submit" type="submit" color="teal" size="md" padding="5px 30px" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
      <div class="col-md-6">
        <div class="text-h6 q-mb-lg">Ouputs</div>
        <q-markup-table v-if="outputs" separator="cell" bordered>
          <tbody>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Full Name</td>
              <td>{{ `${outputs.firstName} ${outputs.lastName}` }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Email</td>
              <td>{{ outputs.email }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Location</td>
              <td>{{ `${outputs.location.name} ${outputs.postCode} ${outputs.thana}` }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Gender</td>
              <td>{{ outputs.gender }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Date of Birth</td>
              <td>{{ outputs.dateOfBirth }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Income Range</td>
              <td>{{ `${outputs.monthlyIncomeRange.min} - ${outputs.monthlyIncomeRange.max}` }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">About</td>
              <td>{{ outputs.about ?? 'N/A' }}</td>
            </tr>
            <tr>
              <td class="text-left text-weight-bold" style="width: 15%">Agreed to terms</td>
              <td>{{ outputs.termsAndConditions ? 'YES' : 'NO' }}</td>
            </tr>
          </tbody>
        </q-markup-table>
        <q-banner v-else class="bg-negative text-white" rounded>
          Form has not been submitted yet!
        </q-banner>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const locations = ref([
  {
    id: 1,
    name: 'Dhaka',
    label: 'Dhaka'
  },
  {
    id: 2,
    name: 'Sylhet',
    label: 'Sylhet'
  },
  {
    id: 3,
    name: 'Khulna',
    label: 'Khulna'
  },
  {
    id: 4,
    name: 'Barisal',
    label: 'Barisal'
  }
])

const outputs = ref(null)

const formData = ref({
  firstName: null,
  lastName: null,
  termsAndConditions: null,
  about: null,
  dateOfBirth: null,
  email: null,
  location: null,
  postCode: null,
  thana: null,
  monthlyIncomeRange: {
    min: 5000,
    max: 15000
  },
  gender: null
})

const handleSubmit = () => {
  outputs.value = JSON.parse(JSON.stringify(formData.value))
}
</script>
