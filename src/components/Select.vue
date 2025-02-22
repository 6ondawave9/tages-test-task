<template>
    <div class="select-wrapper">
        <select v-model="selectValue" @change=changeState>
            <option hidden>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name }}</option>
        </select>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'

const { options, placeholder, state } = defineProps(['options', 'placeholder', 'state'])

const selectValue = ref(placeholder)
const store = useStore()

function changeState() {
    store.commit(`CHANGE_${state}`, selectValue.value)
}

</script>

<style scoped>
.select-wrapper {
	position: relative;
}

.select-wrapper select {
    font-family: SF-DISPLAY-PRO;
	appearance: none;
	-webkit-appearance: none;
	width: 100%;
	font-size: 14px;
	padding: 10px 16px 10px 16px;
	background-color: #F2F2F2;
	border: 0px solid #C4D1EB;
	border-radius: 0px;
	color: #000000;
	cursor: pointer;
	outline: none;
}

.select-wrapper::after {
	content: "";
	position: absolute;
	pointer-events: none;
	top: 50%;
	right: 20px;
	transform: translate(0, -50%);
	width: 12px;
	height: 12px;
	background-color: #000000;
	clip-path: polygon(8% 17%, 0% 25%, 50% 84%, 100% 25%, 92% 17%, 50% 65%);
}
</style>