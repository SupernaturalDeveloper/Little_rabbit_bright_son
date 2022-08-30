import { defineStore } from 'pinia';
import { Names } from './store-namespace'
export const useMainStore = defineStore(Names.Mian, {
    state: () => {
        return {
            counter: 123
        }
    },
    getters: {},
    actions: {}
})