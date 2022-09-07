<template>

    <header>
        <router-link to="/">首页</router-link> |
        <span>{{props.title}}</span>
    </header>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:String
})
</script>

<style lang="scss" scoped>
header {
    display: flex;
    padding: 25px 10px;

    a {
        color: #666;
        transition: all .4s;
        padding: 0 10px;
    }
    span{
        margin-left: 10px;
        transition: all .4s;
    }
}
</style>