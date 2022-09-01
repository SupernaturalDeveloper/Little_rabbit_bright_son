<template>
    <HeaderView/>
    <div>
        <router-view></router-view>
    </div>
    <FooterTop/>
    <FooterBottom/>
</template>
<script setup lang="ts">
    import { getFindBanner } from "./api/home";
    import { getFindAllCategory } from "./api/category";
    getFindBanner().then((res: any) => console.log(res));
    getFindAllCategory().then((res: any) => console.log(res));
</script>
<style lang="scss" scoped>

</style>
