<script setup lang="ts">
// import GridView from '../components/GridView.vue';
import VehicleCardVue from '../components/VehicleCard.vue';
import carsData from '../data.json';
  
</script>

<template>
  <main>
    <VehicleCardVue :cars="carsData"/>
    <!-- <GridView /> -->
  </main>
</template>

<style>
  .container {
    width: 60%
  }
</style>
