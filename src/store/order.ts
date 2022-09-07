import {defineStore} from 'pinia'
import { Names } from './store-namespace' 
import {getFindOrderList} from '../api/order'
import { IOrderList } from '../interface/IAPI/order' 
export const useOrderStore = defineStore(Names.Order,{
    state:()=>{
        return {
            ORDERLIST:{}
        }
    },
    getters:{
        GETORDERLIST(state){
            return state.ORDERLIST;
        }
    },
    actions:{
        async getOrderList(findOrder:IOrderList<number>){
            try {
                let res=await getFindOrderList(findOrder);
                // console.log(res);
                this.ORDERLIST=res.result;
                
            } catch (error) {
                return error
            }
        }
    }
})