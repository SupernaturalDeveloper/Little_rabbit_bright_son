<template>
    <!-- mine我的 -->
    <div class="mine">
        <div>
            <!-- mine我的-左侧区域 -->
            <left></left>
            <!-- mine我的-右侧区域 -->
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Left from './components/Left.vue';
    
</script>

<style lang="scss" scoped>
    .mine{
        background: #F5F5F5;
        &>div{
            display: flex;
            width: 1240px;
            margin: 0 auto;
            padding-top: 20px;
            // background: skyblue;
        }
        .right{
            width: 1000px;
            background: #fff;
        }
    }
</style>