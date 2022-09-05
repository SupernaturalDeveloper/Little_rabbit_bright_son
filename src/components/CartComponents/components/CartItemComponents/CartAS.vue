<template>
    <el-input-number
        v-model="num"
        :min="1"
        :max="stock"
        @change="handleChange"
    />
</template>
  
  <script lang="ts" setup>
    import { ref, defineProps } from "vue";
    const props = defineProps({
        stock: {
            type: Number,
            required: true,
        },
    });
    const num = ref(1);
    const handleChange = (value: number) => {
        console.log(value);
    };
</script>