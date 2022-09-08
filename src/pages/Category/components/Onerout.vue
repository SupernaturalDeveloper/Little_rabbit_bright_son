<template>
	<div class="qbfl">
		<h3>全部分类</h3>
		<ul class="list1">
			<li v-for="item in data.arr1" :key="item.id">
				<img :src="item.picture" alt="">
				<p>{{item.name}}</p>
			</li>
		</ul>
	</div>

</template>

<script lang="ts" setup>
	import { reactive } from 'vue';
import {getFindAllCategory} from '../../../api/category/index'
	let data:any=reactive({
		arr1:[]
	})
	getFindAllCategory().then((res:any)=>{
		let date=res.result[0]
		data.arr1=date.children
		console.log(data.arr1);
	})
	
	

</script>

<style scoped lang="scss">
	.qbfl{
		background: #fff;
		margin-top: 20px;
	}
	h3{
		text-align: center;
		font-size: 28px;
		line-height: 100px;
	}
	.list1{
		display: flex;
		padding: 0 32px;
		flex-wrap: wrap;
		min-height: 160px;
		li{
			text-align: center;
			width: 168px;
			height: 160px;
			cursor: pointer;
			img{
				width: 100px;
				height: 100px;
			}
			p{
				line-height: 40px;
				font-size: 16px;
			}
		}
		li:hover{
			color: #27BA98;
		}
	}
</style>