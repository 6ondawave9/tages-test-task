<template>
    <nav>
        <a class="nav-element">Главная</a>
        <a class="nav-element">Системы хранения</a>
        <a class="nav-element selected">Комплекты стеллажных систем</a>
    </nav>
</template>

<style scoped>
nav {
    margin: 32px 0;
    font-family: SF-UI-TEXT;
    font-size: 16px;
    font-weight: 400;
}

.nav-element {
    cursor: pointer;
    color: rgba(114, 119, 131, 1);
}

.nav-element::after {
    content: '/';
    margin: 0 12px;
}

.selected {
    color: black;
}

.selected::after {
    content: ''
}
</style>