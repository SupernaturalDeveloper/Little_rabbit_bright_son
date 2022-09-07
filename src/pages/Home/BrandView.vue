<template>
    <div class="brand">
        <div class="container">
            <header>
                <h3>热门品牌
                    <small>国际经典 品质保证</small>
                </h3>
                <div class="btn-box">
                    <el-button circle size="small" @click="prev"> ←</el-button>
                    <el-button circle size="small" @click="next"> →</el-button>
                </div>
            </header>
            <div class="brand-box">
                <ul ref="list">
                    <li v-for="item in brand" :key="item.id">
                        <img :src="item.picture" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getFindBrand } from '../../api/home/index'
import { watchEffect, reactive,ref } from 'vue'

const brand = reactive<Array<any>>([])
const list = ref()
watchEffect(async () => {
    let res = await getFindBrand({ limit: 10 })
    brand.push(...res.result)
})
function prev(){
    list.value.style.translate = '0px'
}
function next(){
    list.value.style.translate = '-1240px'
}

</script>
<style lang="scss" scoped>
.brand {
    background: #f5f5f5;
    width: 100%;

    .container {
        width: 1240px;
        margin: 0 auto;
        position: relative;

        header {
            padding: 40px 0;
            display: flex;
            align-items: flex-end;

            h3 {
                flex: 1;
                font-size: 32px;
                font-weight: 400;
                margin-left: 6px;
                height: 35px;
                line-height: 35px;

                small {
                    font-size: 16px;
                    color: #999;
                    margin-left: 20px;
                }
            }
        }

        .brand-box {
            display: flex;
            width: 100%;
            height: 345px;
            overflow: hidden;
            padding-bottom: 40px;

            ul {
                width: 200%;
                display: flex;
                transition: all 1s;

                li {
                    margin-right: 10px;
                    width: 240px;

                    img {
                        width: 240px;
                        height: 305px;
                    }
                }
            }
        }
    }
}
</style>