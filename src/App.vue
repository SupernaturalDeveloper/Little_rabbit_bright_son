<template>
<<<<<<< HEAD
    <div @click="add">点击</div>
    {{ store.counter }}
=======
    <HeaderView/>
>>>>>>> e6f880e33bf2286b73bd39f9b726361850a1f5d5
    <div>
        <router-view></router-view>
    </div>
    <FooterTop/>
    <FooterBottom/>
</template>
<script setup lang="ts">
    import { useMainStore } from "./store";
    import { getFindBanner } from "./api/home";
    import { getFindAllCategory } from "./api/category";
    getFindBanner().then((res: any) => console.log(res));
    getFindAllCategory().then((res: any) => console.log(res));
    const store = useMainStore();
    const add = () => {
        store.$state.counter++;
    };
</script>
<style lang="scss" scoped>

</style>
