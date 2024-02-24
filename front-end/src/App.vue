<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useQuasar } from 'quasar'

const $q = useQuasar()
$q.dark.set(true);

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
