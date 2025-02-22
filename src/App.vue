<template>
    <div class="main">
        <Nav/>
        <h1>Комплекты стеллажных систем</h1>
        <Settings/>
        <Catalog/>
    </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Catalog from './components/Catalog.vue'
import Settings from './components/Settings.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onBeforeMount(() => {
    store.dispatch('loadCart')
    store.dispatch('loadFavorites')
})
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    padding: 32px;
    max-width: 1544px;
    margin: 0 auto;
}

h1 {
    letter-spacing: 2px;
    font-family: SF-DISPLAY-PRO;
    font-size: 36px;
    margin: 0 0 32px 0;
}
</style>
