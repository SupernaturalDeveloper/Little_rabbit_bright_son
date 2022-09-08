<template>
	<div class="sub-filter">
		<div class="sub-select" v-if="data.list1.brands">
			<span>品牌：</span>
			<p>
				<router-link to="" :class="brandId == null ? 'active':''" @click="changeBrand(null)">全部</router-link>
				<router-link to="" v-for="(item2,index) in data.list1.brands" @click="changeBrand(item2.id)"
					:class="brandId != null ? 'active' :''" :key="item2.id">{{item2.name}}</router-link>
			</p>
		</div>
		<div class="sub-select" v-for="(item,i) in data.list1.saleProperties" :key="item.id">
			<span>{{item.name}}：</span>
			<p v-if="attrs[i]">
				<router-link to="" :class="0 == attrs[i]['index'] ? 'active':''" @click="changeProp(item.name, null,0)">全部
				</router-link>
				<router-link to="" v-for="(item2,index) in item.properties" @click="changeProp(item.name, item2.name, index+1)"
					:class="(index+1) == attrs[i]['index'] ? 'active':''" :key="item2.id">{{item2.name}}</router-link>
			</p>
			<p v-else>
				<router-link to="" class="active" @click="changeProp(item.name, null,0)">全部</router-link>
				<router-link to="" v-for="(item2,index) in item.properties" @click="changeProp(item.name, item2.name, index+1)"
					:key="item2.id">{{item2.name}}</router-link>
			</p>
		</div>
	</div>
	<Qbsp></Qbsp>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Qbsp from './com/Qbsp.vue'
import { getFindSubCategoryFilter } from '../../../api/category/index';
const props = defineProps(['foo'])
console.log(props.foo)
let data: any = reactive({
	list1: {},
	ide:props.foo
})
getFindSubCategoryFilter({ id: data.ide }).then((res:any) => {
	data.list1 = res.result;	
})
let brandId = ref(null); // 品牌id
let attrs = reactive<Array<any>>([]); // 颜色规格等等
function changeBrand(args:any) {
	brandId.value = args;
}
function changeProp(attr:any, value:any, i:any) {
	let flag = false;
	attrs.forEach((item:any) => {
		for (var p in item) {
			if (p == attr) {
				item[attr] = value;
				item["index"] = i
				flag = true;
				return;
			}
		}
	})

	if (!flag) {
		attrs.push({ [attr]: value, index: i })
	}
}
</script>

<style lang="scss" scoped>
.pd {
	padding: 25px;
	background: #fff;
}

.sub-filter {
	background: #fff;
	padding: 25px;

	.sub-select {
		display: flex;

		span {
			width: 80px;
			color: #000;
			line-height: 40px;
		}

		p {
			flex: 1;

			a {
				margin-right: 36px;
				transition: all .3s;
				color: #000;
				display: inline-block;
				max-width: 112px;
				line-height: 40px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}

			a.active {
				color: #27ba9b;
			}
		}
	}
}
</style>
