<template>
    <div class="card">
        <div class="card-tag" v-if="item.price.old_price">Скидка</div>
        <img :src="item.image.url">
        <div class="card-info">
            <div class="card-info-code">{{ item.code }}</div>
            <div class="card-info-title">{{ item.name }}</div>
        </div>
        <div class="card-bottom">
            <div class="card-bottom-price">
                <div class="card-bottom-price-old" v-if="item.price.old_price">{{ item.price.old_price }}</div>
                <div class="card-bottom-price-current">{{ item.price.current_price }}</div>
            </div>
            <div class="card-bottom-btns">
                <button class="card-bottom-btns-cart" v-if="!addedToCart" @click="addToCart">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.66412 1.80229C3.50428 1.80194 3.3502 1.82003 3.20378 1.85443C3.00307 1.41204 2.73794 1.01515 2.4364 0.713604C1.92459 0.201799 1.1174 0 0 0V1.8C0.682603 1.8 1.07541 1.8982 1.1636 1.9864C1.50378 2.32657 1.8 3.01776 1.8 3.6L1.80905 3.72728L2.69093 9.90046C1.21532 9.97702 0.0721779 11.1229 0.00110572 12.5554L0 13.5C0.0871391 14.9795 1.22648 16.1177 2.64892 16.1985L2.85323 16.1989C3.22356 17.2481 4.22398 18 5.4 18C6.5756 18 7.57571 17.2487 7.94636 16.2H10.0536C10.4243 17.2487 11.4244 18 12.6 18C14.0912 18 15.3 16.7912 15.3 15.3C15.3 13.8088 14.0912 12.6 12.6 12.6C11.4244 12.6 10.4243 13.3513 10.0536 14.4H7.94636C7.57571 13.3513 6.5756 12.6 5.4 12.6C4.2244 12.6 3.22429 13.3513 2.85364 14.4H2.7C2.24101 14.3725 1.82928 13.9612 1.79838 13.4461L1.8 12.6C1.82427 12.1332 2.23318 11.7243 2.7446 11.6989L4.52132 11.6993L4.5342 11.7H13.6052L13.738 11.6578C14.4204 11.4413 14.9667 10.9275 15.2253 10.2623L15.3201 10.0746L15.6282 9.46429C15.9469 8.83253 16.2656 8.19968 16.5762 7.58142C17.3369 6.06697 17.8153 5.1045 17.9213 4.86815C18.4654 3.65441 17.3632 2.72022 16.2366 2.70032L3.66412 1.80229ZM13.2924 9.89997H4.60154C4.54375 9.88391 4.49972 9.83495 4.4911 9.77399L3.60919 3.60063L16.104 4.4954C15.8854 4.94126 15.4879 5.73762 14.9676 6.77345L14.9546 6.79941C14.6576 7.39065 14.3393 8.02262 14.0211 8.65354L13.7134 9.26309L13.5968 9.49393L13.5529 9.59597C13.5058 9.72695 13.4125 9.83459 13.2924 9.89997ZM12.6 16.1999C13.097 16.1999 13.5 15.797 13.5 15.2999C13.5 14.8029 13.097 14.3999 12.6 14.3999C12.1029 14.3999 11.7 14.8029 11.7 15.2999C11.7 15.797 12.1029 16.1999 12.6 16.1999ZM6.3 15.2999C6.3 15.797 5.89706 16.1999 5.4 16.1999C4.90294 16.1999 4.5 15.797 4.5 15.2999C4.5 14.8029 4.90294 14.3999 5.4 14.3999C5.89706 14.3999 6.3 14.8029 6.3 15.2999Z"
                            fill="black" />
                    </svg>
                </button>

                <button class="card-bottom-btns-cart-added" v-if="addedToCart" @click="addToCart">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.99997 19.8999C4.53235 19.8999 0.099968 15.4676 0.099968 9.99994C0.099968 4.53233 4.53235 0.0999451 9.99997 0.0999451C15.4676 0.0999451 19.9 4.53233 19.9 9.99994C19.9 15.4676 15.4676 19.8999 9.99997 19.8999ZM9.99997 18.0999C14.4735 18.0999 18.1 14.4734 18.1 9.99994C18.1 5.52644 14.4735 1.89994 9.99997 1.89994C5.52646 1.89994 1.89997 5.52644 1.89997 9.99994C1.89997 14.4734 5.52646 18.0999 9.99997 18.0999ZM12.9636 6.66355L8.19997 11.4272L6.13637 9.36355L4.86358 10.6363L8.19997 13.9727L14.2364 7.93635L12.9636 6.66355Z"
                            fill="#27AE60" />
                    </svg>

                </button>

                <button class="card-bottom-btns-fav" @click="addToFavorites">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="{favorite: favorite}" fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.0979 1.44916e-05C12.795 0 11.9551 0.155217 10.9924 0.626465C10.6359 0.800937 10.3015 1.01105 9.99095 1.25618C9.69235 1.0248 9.37131 0.824326 9.0296 0.655321C8.04816 0.169898 7.16523 0 5.90907 0C2.54477 0 0.0999756 2.78754 0.0999756 6.40789C0.0999756 9.14198 1.62442 11.7831 4.46393 14.3369C5.95438 15.6774 7.85737 17.004 9.22022 17.7097L9.99998 18.1135L10.7797 17.7097C12.1426 17.004 14.0456 15.6774 15.536 14.3369C18.3755 11.7831 19.9 9.14198 19.9 6.40789C19.9 2.82586 17.4321 0.0138225 14.0979 1.44916e-05ZM18.1 6.40793C18.1 8.54995 16.8276 10.7544 14.3324 12.9986C12.972 14.2221 11.2231 15.4449 10 16.0864C8.77695 15.4449 7.02806 14.2221 5.66767 12.9986C3.17246 10.7544 1.90002 8.54995 1.90002 6.40793C1.90002 3.73298 3.5953 1.80004 5.90911 1.80004C6.90787 1.80004 7.52333 1.91847 8.23164 2.2688C8.65002 2.47573 9.01981 2.74897 9.3399 3.09043L10.0021 3.79687L10.6583 3.08483C10.9856 2.72969 11.3608 2.45023 11.7837 2.24322C12.4713 1.90668 13.0483 1.80004 14.0942 1.80004C16.3794 1.80952 18.1 3.7701 18.1 6.40793Z"
                            fill="black" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const { item } = defineProps(['item'])

const store = useStore()

const addedToCart = ref(store.getters.checkIfInCart(item.id))
const favorite = ref(store.getters.checkIfInFavorites(item.id))

function addToCart() {
    if (!addedToCart.value) {
        store.dispatch('addToCart', item)
    } else {
        store.dispatch('removeFromCart', item.id)
    }
    addedToCart.value = !addedToCart.value
}

function addToFavorites() {
    if (!favorite.value) {
        store.dispatch('addToFavorites', item)
    } else {
        store.dispatch('removeFromFavorites', item.id)
    }
    favorite.value = !favorite.value
}

</script>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: SF-UI-TEXT;
    padding: 8px 10px;
    border: 1px solid rgba(238, 238, 238, 1);
}

.card>img {
    height: 237px;
    width: 238px;
    margin: 0 37px auto;
}

.card-tag {
    position: absolute;
    left: 0;
    font-family: SF-DISPLAY-PRO;
    display: inline-block;
    padding: 3px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    color: white;
    background-color: rgba(235, 87, 87, 1);
}

.card-info {
    margin: 23px 0 0 0;
}

.card-info-code {
    margin-bottom: 10px;
    font-size: 10px;
    line-height: 14px;
    color: rgba(136, 136, 136, 1);
}

.card-info-title {
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 500;
}

.card-bottom {
    display: flex;
}

.card-bottom-price {
    padding-top: 9px;
}

.card-bottom-price>div {
    display: inline-block;
    font-size: 16px;
    line-height: 22.4px;
}

.card-bottom-price>div::after {
    content: '₽';
}

.card-bottom-price-old {
    margin-right: 9px;
    color: rgba(136, 136, 136, 1);
    text-decoration: line-through;
}

.card-bottom-btns {
    margin-left: auto;
    display: flex;
}

.card-bottom-btns>button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
}

.card-bottom-btns-fav {
    margin: 0 2px 0 20px;
}

.favorite {
    fill: red;
}
</style>