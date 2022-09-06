<template>
    <tr>
        <td>
            <CheckboxRadio
                :skuId="item.skuId"
                :selected="item.selected"
            ></CheckboxRadio>
        </td>
        <td>
            <CartGoods :ITEM="item"></CartGoods>
        </td>
        <td>单价</td>
        <td>
            <CartAS :stock="5"></CartAS>
        </td>
        <td>小计</td>
        <td>
            <CartControl></CartControl>
        </td>
    </tr>
</template>
<script setup lang="ts">
    import { defineProps, computed } from "vue";
    const props = defineProps({
        itemMessage: {
            required: true,
            type: Object,
        },
    });
    let item = computed(() => {
        console.log(props.itemMessage);
        return props.itemMessage;
    });
</script>
<style lang="scss" scoped>
    tr {
        border-top: 1px solid #f5f5f5;
    }
    td {
        font-size: 16px;
        font-weight: 400;
        line-height: 50px;
        padding: 10px;
        text-align: center;
    }
    td:first-child {
        padding-left: 30px;
        text-align: left;
    }
</style>