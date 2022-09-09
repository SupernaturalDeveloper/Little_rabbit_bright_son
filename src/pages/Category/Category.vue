<template>
	<div class="bg">
		<div class="fl">
			<div class="rou">
				<el-breadcrumb :separator-icon="ArrowRight">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>首页</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<Tworout/>
			<el-backtop :right="50" :bottom="100" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Onerout from './components/Onerout.vue'
	import Tworout from './components/Tworout.vue'
	import { ArrowRight } from '@element-plus/icons-vue'
	
	
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