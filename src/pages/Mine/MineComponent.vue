<template>
    <div class="mine">
        <div>
            <Left></Left>
            <Right></Right>
        </div>
    </div>
</template>

<script setup lang="ts">
import Left from './components/Left.vue';
import Right from './components/Right.vue';
    
</script>

<style lang="scss" scoped>
    .mine{
        background: #F5F5F5;
        &>div{
            display: flex;
            width: 1240px;
            margin: 0 auto;
            padding-top: 20px;
            background: skyblue;
        }
    }
</style>