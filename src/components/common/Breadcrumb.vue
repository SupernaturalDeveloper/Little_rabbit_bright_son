<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <template v-for="item in breadcrumbInfo" :key="item.id">
            <el-breadcrumb-item :to="item?.path ? item.path : ''">{{
                item.text
            }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>
  
  <script lang="ts" setup>
    import { ArrowRight } from "@element-plus/icons-vue";
    import {defineProps} from 'vue';
   import type{Breadcrumb} from '../../interface/IBreadcrumbData'
    defineProps({
        breadcrumbInfo:{
            required:true,
            type:Array<Breadcrumb>
        }
    })
</script>
<style lang="scss" scoped>
    .el-breadcrumb {
        padding: 25px 10px;
    }
</style>