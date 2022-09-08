<template>
    <div v-if="route.path == '/login'">
        <div>
            <router-view></router-view>
        </div>
    </div>
    <div v-else>
        <HeaderView />
        <TitleView />
        <div class="main">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <FooterTop />
        <FooterBottom />
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from "vue-router";
    const route = useRoute();
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



