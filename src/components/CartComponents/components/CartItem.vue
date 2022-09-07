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
        <td>￥{{ item.price }}</td>
        <td>
            <CartAS
                :stock="item.stock"
                :skuId="item.skuId"
                :count="item.count"
            ></CartAS>
        </td>
        <td style="color: red">￥{{ collect }}</td>
        <td>
            <CartControl :skuId="item.skuId"></CartControl>
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
        // console.log(props.itemMessage);
        return props.itemMessage;
    });
    let collect = computed(() => {
        return props.itemMessage.price * props.itemMessage.count;
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