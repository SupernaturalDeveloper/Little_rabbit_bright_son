<template>
    <div class="cartControl">
        <ModalButton title="移入收藏夹"></ModalButton>
        <ModalButton
            title="删除"
            text="亲，您是否确认删除当前商品!"
            @confirm="confirmDel"
            color="#27ba9b"
        ></ModalButton>
        <ModalButton title="找相似"></ModalButton>
    </div>
</template>
<script setup lang="ts">
    import { defineProps } from "vue";
    import { useCartStore } from "../../../../store";
    const props = defineProps({
        skuId: String,
    });
    const store = useCartStore();
    const confirmDel = () => {
        store.deleteCartItem({ ids: [props.skuId!] });
        console.log("删除当前商品", { ids: [props.skuId!] });
    };
</script>
<style lang="scss" scoped>
    .cartControl {
        display: flex;
        flex-direction: column;
    }
</style>