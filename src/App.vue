<template>
    <div v-if="route.path=='/login'">
        <div>
            <router-view></router-view>
        </div>
    </div>
    <div v-else>
        <HeaderView/>
        <div>
            <router-view></router-view>
        </div>
        <FooterTop/>
        <FooterBottom/>
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route=useRoute()
    console.log(route)
</script>
<style lang="scss" scoped>

</style>
