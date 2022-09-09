<template>
    <!-- 面包屑导航 -->
    <Breadcrumb :breadcrumbInfo="info"></Breadcrumb>
    <!-- 购物车内容 -->
    <CartContent></CartContent>
    <!-- 购物车结算 -->
    <CartAction></CartAction>
    <!-- 轮播图 -->
</template>
<script setup lang="ts">
    // import { onBeforeRouteUpdate } from "vue-router";
    import breadcrumbData from "../../hooks/cart/breadcrumbData";
    // 获取面包屑导航的hooks数据
    const info = breadcrumbData();
</script>
<style lang="scss" scoped>
</style>