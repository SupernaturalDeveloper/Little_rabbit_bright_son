<template>
    <HeaderView />
    <TitleView />
    <div class="main">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    <FooterTop />
    <FooterBottom />
</template>
<script setup lang="ts">
<<<<<<< HEAD
    import { getFindBanner } from "./api/home";
    import { getFindAllCategory } from "./api/category";
    getFindBanner().then((res: any) => console.log(res));
    getFindAllCategory().then((res: any) => console.log(res));
=======
>>>>>>> 94664535ccfda4336f1ff69ffa94753a408b3de9
</script>
<style lang="scss" scoped>
    .main {
        background: rgb(245, 245, 245);
        padding-bottom: 20px;
        .content {
            width: 1240px;
            margin: 0 auto;
        }
    }
</style>
