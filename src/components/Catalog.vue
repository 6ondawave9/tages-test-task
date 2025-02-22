<template>
  <div class="catalog">
    <Card v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>

<script setup>
import Card from './Card.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const items = computed(() => store.getters.getItems)

</script>

<style>
.catalog {
  margin: 40px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 334px);
  grid-column-gap: 48px;
  grid-row-gap: 40px;
}
</style>