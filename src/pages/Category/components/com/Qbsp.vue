<template>
	<div class="list pd">
		<div class="bj">
			<ul class="tab">
				<li v-for="(v,i) in data.tab" :class="data.n==i?'active':''" @click="data.n=i">{{v}}</li>
				<div>价格排序</div>
			</ul>
			<div class="lab">
				<label for="sp1">
					<input type="checkbox" id="sp1" />
					仅显示有货商品
				</label>

				<label for="sp2">
					<input type="checkbox" id="sp2" />
					仅显示特惠商品
				</label>
			</div>
		</div>
		<ul class="qbsp" id="scroll">
			<li v-for="item in data.arr1" :key="item.id">
				<div class="yy">
					<img :src="item.picture" alt="">
					<p class="tit slh">{{item.name}}</p>
					<p class="text slh">{{item.desc}}</p>
					<p class="price">￥ {{item.price}}</p>
				</div>
			</li>
			<div class="mygd">
				<div>
					<img src="../../../../assets/img/cart-none.png" alt="">
					<span>亲，没有更多了</span>
				</div>
			</div>
		</ul>

	</div>
</template>

<script lang="ts" setup>
	import {reactive,ref,onMounted} from 'vue';
	import type {TabsPaneContext} from 'element-plus';
	import {postFindSubCategoryGoods} from '../../../../api/category/index';
	let data: any = reactive({
		arr1: [],
		tab: ['默认排序', '最新商品', '最高人气', '评论最多'],
		n: 0
	})
	const filterParams = reactive({
		pagesize: 200,
		page: 1
	})
	const handleClick = (tab: TabsPaneContext, event: Event) => {
		// console.log(tab, event)
	}

	function addList(i) {
		postFindSubCategoryGoods({
			page: i,
			pagsize: 10,
		}).then((res) => {
			let list = res.result.items
			data.arr1.push(...list)
		})
	}
	addList(1)
	//防抖
	function debounce(fn, wait) {
		var timer = null;
		return function() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				fn();
			}, wait)
		}
	}
	let i = 1
	//上滑加载更多
	function scroll() {
		window.onscroll = debounce(() => {
			// 变量 scrollHeight 是滚动条的总高度
			let scrollHeight = document.documentElement.scrollHeight
			// 变量 windowHeight 是可视区的高度
			let windowHeight = document.documentElement.clientHeight
			// 变量scrollTop为当前页面的滚动条纵坐标位置
			let scrollTop = document.documentElement.scrollTop
			// 滚动条到底部得距离 = 滚动条的总高度 - 可视区的高度 - 当前页面的滚动条纵坐标位置	
			var scrollBottom = scrollHeight - windowHeight - scrollTop
			// 距离底部700px时加载一次				
			if (scrollBottom <= 700) {
				i += 1
				if (i < 20) {
					addList(i)
				}
			}
		}, 200)
	}
	onMounted(() => {
		scroll()
	});
</script>

<style lang="scss" scoped>
	.list {
		margin-top: 20px;

		.tab {
			display: flex;
			justify-content: space-around;

			li,
			div {
				height: 30px;
				line-height: 32px;
				border: 1px solid #e4e4e4;
				padding: 0 20px;
				margin-right: 20px;
				color: #999;
				border-radius: 2px;
				transition: all .3s;
			}

			.active {
				background: #27ba9b;
				border-color: #27ba9b;
				color: #fff;
			}

			.lab {
				display: flex;
				align-items: center;
				color: #999;
			}
		}

		.bj {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

	}

	.qbsp {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;

		li {
			position: relative;
			text-align: center;
			transition: all .5s;
			margin-right: 20px;
			margin-bottom: 20px;
			width: 220px;
			height: 300px;

			.yy {
				position: absolute;
				width: 160px;
				padding: 20px 30px;
				transition: all .5s;

				img {
					width: 160px;
					height: 160px;
				}

				.tit {
					color: #000;
					font-size: 16px;
					margin-top: 15px;
				}

				.text {
					color: #999;
					font-size: 14px;
					margin-top: 15px;
				}

				.price {
					color: #cf4444;
					font-size: 20px;
					margin-top: 15px;
				}
			}

			.yy:hover {
				box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
				margin-top: -5px;
			}

		}

		li:nth-child(5n) {
			margin-right: 0;
		}

	}

	.slh {
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.mygd {
		width: 100%;
		background: #fff;
		margin-bottom: 20px;
		color: #999;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
