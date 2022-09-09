<template>
    <el-input-number
        v-model="counter"
        :min="1"
        :max="stockCollect"
        @change="handleChange"
    />
</template>
  
  <script lang="ts" setup>
    import { ref, defineProps, computed } from "vue";
    import { useCartStore } from "../../../../store";
    const store = useCartStore();
    const props = defineProps({
        stock: {
            type: Number,
            required: true,
        },
        skuId: String,
        count: Number,
    });
    let stockCollect = computed(() => {
        return props.stock;
    });
    let counter = computed({
        get: () => {
            return props.count;
        },
        set: val => {
            num.value = val!;
        },
    });

    const num = ref(counter.value);
    const handleChange = (prev: number | undefined, cur: number | undefined) => {
        console.log(prev, cur);
        store.setCartCount({ skuId: props.skuId!, count: prev });
    };
</script>