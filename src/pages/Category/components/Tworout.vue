<template>
	<div class="sx pd">
		<div class="list1" v-for="(v,i) in data.list1">
			<div class="name">{{v.name}}:</div>
			<ul @click="add">
				<li v-for="(el,j) in v.properties" :class="data.n==j?'active':''" @click="data.n=j">{{el.name}}</li>
			</ul>
		</div>
	</div>
	<Qbsp></Qbsp>
	
</template>

<script lang="ts" setup>
	import { reactive } from 'vue';
	import Qbsp from './com/Qbsp.vue'
	import {getFindSubCategoryFilter} from '../../../api/category/index';
	import CateHead from '../../../components/cate/CateHead.vue'
	let data:any=reactive({
		n:0,
		list1:[],
	})
	// getFindSubCategoryFilter({id:1007000}).then(res =>{
	// 	let arr=res.result;
	// 	let name=arr.saleProperties;
	// 	name.forEach(el => {
	// 		el.properties.unshift({name:'全部'})	
	// 	})
	// 	data.list1=name
	// })
	


</script>

<style lang="scss" scoped>
	.pd{
		padding: 25px;
		background: #fff;
	}
	.list1{
		display: flex;
		.name{
			width: 80px;
			color: #999;
			line-height: 40px;
			font-size: 14px;
		}
		ul{
			flex: 1;
			box-sizing: border-box;
			li{
				margin-right: 36px;
				transition: all .2s;
				display: inline-block;
				max-width: 112px;
				line-height: 40px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				cursor: pointer;
			}
			.active{
				color: #27ba9b;
			}
		}
	}
	

</style>
