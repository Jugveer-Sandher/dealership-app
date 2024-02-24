<script lang="ts">
import { defineComponent } from 'vue'
import CarList from '../components/CarList.vue'
import carData from '../data.json'

export default defineComponent({
  name:'Home',
  components: { CarList },
  data() {
    console.log(carData)
    return {
      cars: carData
    }
  }
})
</script>

<template>
  <main>
    <h1>Dealership</h1>
    <CarList :cars="cars"/>
  </main>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
