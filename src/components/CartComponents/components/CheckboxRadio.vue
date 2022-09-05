<template>
    <input v-model="check" @click="checkHandle" type="checkbox" />
</template>
<script setup lang="ts">
    // 单选
    import { useCartStore } from "../../../store";
    import { defineProps, ref, computed } from "vue";
    const store = useCartStore();
    const props = defineProps({
        selected: Boolean,
        skuId: String,
    });
    const check = computed({
        get: () => {
            return props.selected;
        },
        set: val => {
            checkD.value = val;
        },
    });
    let checkD = ref(check.value);
    const checkHandle = () => {
        store.setSelectedStatus({
            selected: !check.value,
            skuId: props.skuId!,
        });
    };
</script>
<style lang="scss" scoped>
    ::v-deep .el-checkbox__label {
        font-size: 16px;
        font-weight: 400;
        color: #999;
    }
</style>