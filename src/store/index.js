import { createStore } from "vuex"
import items from '../../data/items.json'
import materials from '../../data/materials.json'

export default createStore({
    state: {
        sortType: 0,
        materialFilter: 0,
        sortTypes: [
            {
                id: 1,
                name: 'Цена по возрастанию'
            },
            {
                id: 2,
                name: 'Цена по убыванию'
            },
        ],
        items,
        materials,
        cart: [],
        favorites: []
    },
    getters: {
        getSortTypes(state) {
            return state.sortTypes
        },
        getMaterials(state) {
            return state.materials
        },
        getItems(state) {
            const filteredItems = state.items.filter(el=>state.materialFilter ? el.material == state.materialFilter : true)
            switch (state.sortType) {
                case 0: return filteredItems
                case 1: return filteredItems.toSorted((a,b)=>a.price.current_price-b.price.current_price)
                case 2: return filteredItems.toSorted((a,b)=>b.price.current_price-a.price.current_price)
            }
        },
        checkIfInCart: (state)=>(itemId)=>{
            return !!state.cart.filter(el=>el.id == itemId).length
        },
        checkIfInFavorites: (state)=>(itemId)=>{
            return !!state.favorites.filter(el=>el.id == itemId).length
        }
    },
    mutations: {
        CHANGE_SORT_TYPE(state, sortType) {
            state.sortType = sortType
        },
        CHANGE_MATERIAL_FILTER(state, materialFilter) {
            state.materialFilter = materialFilter
        },
        ADD_TO_CART(state, item) {
            state.cart.push(item)
        },
        REMOVE_FROM_CART(state, itemId) {
            state.cart = state.cart.filter(el=>el.id != itemId)
        },
        ADD_TO_FAVORITES(state, item) {
            state.favorites.push(item)
        },
        REMOVE_FROM_FAVORITES(state, itemId) {
            state.favorites = state.favorites.filter(el=>el.id != itemId)
        },
        LOAD_CART(state, cart) {
            state.cart = cart ?? []
        },
        LOAD_FAVORITES(state, favorites) {
            state.favorites = favorites ?? []
        }
    },
    actions: {
        addToCart({commit, state}, item) {
            commit('ADD_TO_CART', item)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart({commit, state}, itemId) {
            commit('REMOVE_FROM_CART', itemId)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        addToFavorites({commit, state}, item) {
            commit('ADD_TO_FAVORITES', item)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        removeFromFavorites({commit, state}, itemId) {
            commit('REMOVE_FROM_FAVORITES', itemId)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        loadCart({commit}) {
            commit('LOAD_CART', JSON.parse(localStorage.getItem('cart')) )
        },
        loadFavorites({commit}) {
            commit('LOAD_FAVORITES', JSON.parse(localStorage.getItem('favorites')))
        }
    },
    modules: {},
});
