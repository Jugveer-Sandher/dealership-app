<template>
    <div class="car-list">
        <ul>
            <li v-for="car in cars" :key="car.id">
                <h2 class="car-title">{{ car.year }} {{ car.make }} {{ car.model }} </h2>
                <q-img :src="car.image" />
                <p>Price: ${{ car.price }}</p>
                <p>Kilometers: {{ car.kilometers }}km</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Car from '../types/Car'

export default defineComponent({
    props: { 
        cars: {
            required: true,
            type: Array as PropType<Car[]>
        }
     },
    setup(props) {
        console.log(props);
    },
})
</script>

<style scoped>
    .car-list ul {
        display: flex;
        flex-wrap: wrap;
    }
    .car-list li {
        list-style-type: none;
        flex: 0 0 calc(33.33% - 20px);
        border: 5px solid white;
        padding: 10px;
        margin: 10px;
    }
    h2 {
        text-align: center;
        font-size: 25px;
        padding: 0px;
        margin: 0px;
    }
    p {
        padding: 0px;
        margin: 0px;
    }
    .img {
        text-align: center;
    }
</style>