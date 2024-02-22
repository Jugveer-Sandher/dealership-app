<template>
    <div class="car-container">
      <div v-for="car in cars" :key="car.image" class="car-card" :class="'bg-' + car.color.toLowerCase()">
        <!-- Card Section (Top) -->
        <div class="car-top-section">
          <!-- Car Make and Model -->
          <q-item-label :lines="1" class="text-h6 text-white">
            {{ car.make }} {{ car.model }}
          </q-item-label>
        </div>
  
        <!-- Car Image -->
        <q-img :src="car.image" :alt="car.make + ' ' + car.model" />
  
        <!-- Card Section (Bottom) -->
        <div class="car-bottom-section">
          <!-- Additional Information -->
          <q-item-label :lines="1" class="text-caption text-white">
            Year: {{ car.year }} | Engine: {{ car.engine }}
          </q-item-label>
  
          <!-- Price -->
          <q-item-label :lines="1" class="text-h6 text-white">
            ${{ car.price }}
          </q-item-label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { PropType } from 'vue';
  import Vehicle from '../types/Vehicle';
  
  const props = defineProps({
    cars: {
      type: Array as PropType<Vehicle[]>,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .car-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .car-card {
    max-width: 300px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .car-top-section {
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  
  .car-bottom-section {
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
  
  .text-white {
    color: #fff;
  }
  </style>
  