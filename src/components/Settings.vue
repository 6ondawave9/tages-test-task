<template>
    <div class="settings">
        <div class="settings-section">
            <div class="settings-title">Сортировать по:</div>
            <Select class="settings-select" :state="'SORT_TYPE'" :placeholder="'По умолчанию'" :options="sortTypes"/>
        </div>
        <div class="settings-section">
            <div class="settings-title">Материал</div>
            <Select class="settings-select" :state="'MATERIAL_FILTER'" :placeholder="'По умолчанию'" :options="materials"/>
        </div>
    </div>
</template>

<script setup>
import Select from './Select.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const sortTypes = computed(() => store.getters.getSortTypes)
const materials = computed(() => store.getters.getMaterials)

</script>

<style scoped>
.settings {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

.settings-title {
    color: rgba(79, 79, 79, 1);
    font-size: 12px;
    font-family: SF-DISPLAY-PRO;
    margin: 0 0 8px 16px;
}

.settings-select {
    width: 288px;
}
</style>