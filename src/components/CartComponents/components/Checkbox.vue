<template>
    <label :for="checkboxName"
        ><input
            v-model="checkAll"
            @click="checkAllHandle"
            :disabled="!store.ShoppingCartData.length"
            :id="checkboxName"
            type="checkbox"
        />全选</label
    >
</template>
<script setup lang="ts">
    // 全选
    import { useCartStore } from "../../../store";
    import { defineProps, ref, computed } from "vue";
    defineProps({
        checkboxName: String,
    });
    // 购物车store
    const store = useCartStore();
    let checkAll = computed({
        get: () => {
            return store.checkAllStatus;
        },
        set: val => {
            check.value = val;
        },
    });
    let check = ref(checkAll.value);
    const checkAllHandle = () => {
        store.setCheckAllStatus(!checkAll.value);
    };
</script>
<style lang="scss" scoped>
    ::v-deep .el-checkbox__label {
        font-size: 16px;
        font-weight: 400;
        color: #999;
    }
</style>