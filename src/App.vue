<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
    import { getFindBanner } from "./api/home";
    getFindBanner().then((res: any) => console.log(res));
</script>
<style lang="scss" scoped>
</style>
