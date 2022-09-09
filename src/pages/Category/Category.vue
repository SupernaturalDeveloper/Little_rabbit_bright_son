<template>
	<div class="bg" v-if="da.ide">
		<div class="fl">
			<div class="rou">
				<el-breadcrumb :separator-icon="ArrowRight">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/homelist',query:{id:da.id} }">{{da.parentName}}</el-breadcrumb-item>
					<el-breadcrumb-item>{{da.name}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<Tworout  :ide="da.ide"></Tworout>
			<el-backtop :right="50" :bottom="100" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Tworout from './components/Tworout.vue'
	import { ArrowRight } from '@element-plus/icons-vue'
	import { getFindSubCategoryFilter } from '../../api/category/index';
	import { useRoute } from 'vue-router';
	import {reactive} from 'vue'
	import axios from 'axios';
	const route=useRoute()
	let da:any=reactive({
		name:'',
		parentName:'',
		id:'',
		ide:route.query.id
	})
	getFindSubCategoryFilter({id:da.ide}).then((res:any) => {
		let arr=res.result;
		 da.name=arr.name;
		 da.parentName=arr.parentName;
		 da.id=arr.parentId;
	})
</script>

<style scoped lang="scss">
	.bg{
		width: 100%;
		height: 100%;
		background: #f8f8f8;
		padding-bottom: 20px;
	}
	.fl{
		width: 1240px;
		margin: 0 auto;
		
	}
	.rou{
		padding: 25px 10px;
	}

</style>
<style>
	.el-breadcrumb__inner:hover{
		color: #42b983 !important;
	}
</style>