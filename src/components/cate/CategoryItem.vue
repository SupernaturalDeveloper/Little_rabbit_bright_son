<template>

    <div class="item" v-for="el,i in props.ItemList" :key="i" @click="getParmas(i)">
        <div class="box">
            <img :src="el.picture" alt="图片" />
            <p class="names e">{{el.name}}</p>
            <p class="descs e">{{el.desc}}</p>
            <p class="prices">{{el.price}}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps,ref} from 'vue';
import {useRouter} from 'vue-router'
const props = defineProps({
    ItemList : Array<any>
})
const router = useRouter()
let _id = ref<string>('')
function getParmas(i:any){
    props.ItemList?.forEach((item,index)=>{
        if(i==index ){
            _id.value = item.id
            console.log(_id.value);
            router.push({
                path : '/detail',
                query : {
                    id: _id.value
                }
            })
        }
    })

    console.log(_id);

}
</script>

<style lang="scss" scoped>
.item {
    .box {
        width: calc(220px - 60px);
        padding: 20px 30px;
        text-align: center;
        transition: all .5s;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        p.e {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .names {
            font-size: 16px;
        }

        .descs {
            color: #999;
            height: 29px;
        }

        .prices {
            color: #cf4444;
            font-size: 20px;
        }
    }
}

.item:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
}
</style>