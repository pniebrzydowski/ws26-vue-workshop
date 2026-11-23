<script setup lang="ts">
import { type Trip } from '@/App.vue'
import { computed, ref, type Ref } from 'vue'

const formModel: Ref<Trip> = ref({} as Trip)
const errors = ref<Partial<Record<keyof Trip, string>>>({})
const tripLengthString = computed((): '-' | 'short' | 'medium' | 'long' => {
  if (!formModel.value?.length) return '-'
  const len = formModel.value.length
  if (len < 3) return 'short'
  if (len < 14) return 'medium'
  return 'long'
})

const validateForm = (): boolean => {
  errors.value = {}
  if (!formModel.value.name) {
    errors.value.name = 'Name is required'
  }
  return !errors.value.name
}
const submitHandler = ($event: SubmitEvent) => {
  if (!validateForm()) {
    alert('form is invalid')
    return
  }

  console.log('form submitted', $event, formModel.value)
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="tripName">Trip Name</label>
      <input @input="validateForm" id="tripName" type="text" v-model="formModel.name" />
      <p v-show="errors.name" class="error">Trip name is required</p>
    </div>
    <div>
      <label for="tripDescription">Description</label>
      <textarea id="tripDescription" type="text" v-model="formModel.description" />
    </div>
    <div>
      <label for="tripDate">Start Date</label>
      <input id="tripDate" type="text" v-model="formModel.date" />
    </div>
    <div>
      <label for="tripLength">Length (in days)</label>
      <input id="tripLength" type="text" v-model.number="formModel.length" />
    </div>
    <button type="submit">Submit</button>
  </form>

  <p>Trip "{{ formModel.name }}" will be created.</p>
  <p>Trip is {{ tripLengthString }}</p>
</template>

<styles scoped></styles>
