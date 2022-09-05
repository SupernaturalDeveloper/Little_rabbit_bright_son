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
