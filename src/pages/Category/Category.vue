<template>
	<div class="bg">
		<div class="fl">
			<div class="rou">
				<el-breadcrumb :separator-icon="ArrowRight">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/',query:da.toId }">{{da.parentName}}</el-breadcrumb-item>
					<el-breadcrumb-item>{{da.name}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<Tworout :ide="da.ide"></Tworout>
			<el-backtop :right="50" :bottom="100" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Tworout from './components/Tworout.vue'
	import { ArrowRight } from '@element-plus/icons-vue'
	import { getFindSubCategoryFilter } from '../../api/category/index';
	import { useRoute } from 'vue-router';
	const route=useRoute()
	let da:any=reactive({
		name:'',
		parentName:'',
		toId:'',
		ide:route.query.id
	})
	
	getFindSubCategoryFilter({ id:da.ide }).then((res:any) => {
		let arr=res.result
		 da.name=arr.name
		 da.parentName=arr.parentName
		 da.toId=arr.id
		console.log('hhh');
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