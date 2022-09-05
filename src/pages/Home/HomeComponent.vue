<template>
    <main>
        <div class="swiper">
            <SwiperView :swiper="swiper" />
        </div>
    </main>
</template>
<script setup lang="ts">
    import { getFindBanner } from "../../api/home/index";
    import { watchEffect, reactive } from "vue";
    const swiper = reactive<Array<any>>([]);
    watchEffect(async () => {
        let res = await getFindBanner();
        swiper.push(...res.result);
    });
</script>
<style lang="scss" scoped>
    main {
        width: 1240px;
        margin: 0 auto;
        .swiper {
            width: 100%;
        }
    }
</style>