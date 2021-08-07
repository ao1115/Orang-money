
<template>
    <Layout class-prefix="layout">
        <Logo/> 
        <Tags @update:value="RecordItem.tags = $event"/> 
        <FormItem fieldName="备注"  @update:value = "onUpdateNotes" placeholder="请输入备注" :value="RecordItem.notes"/>
        <Tabs :dataSource = "recordTypeList" :value.sync="RecordItem.type" />  <!--用.sync如果有初始值就用初始值，没有就导入外部数据-->
        <NumberPad @submit = "saveRecordItem" @update:value = "onUpdateAmount"/>
        
        
        <!-- 用sync把外部的文件导入到内部数据中 -->
        
         
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tags from '@/components/money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';
import Tabs from '../components/Tabs.vue';
import recordTypeList from '@/countents/recordTypeList';
import Logo from '@/components/Logo.vue'
//import store from '@/store/index2';




//声明一个记录，用ts必须先声明类型
type RecordItem={
    tags:Tag[],
    FormItem:string,
    type:string,
    amount:number,
    createdAt?:string,

}


  @Component({
       components :{ NumberPad, Tabs, Tags, FormItem,Logo},
    //    computed:{
    //        recordList(){
    //            return this.$store.state.recordList;
    //        }
    //    }
  })
        export default class Money extends Vue{
        get recordList() {
      return this.$store.state.recordList;
    }
    recordTypeList = recordTypeList
        RecordItem:RecordItem={
            tags:[],FormItem:'',type:'-', amount:0    //给个初始值  
            }

        created(){
            this.$store.commit('fetchRecords')
        }
         
         onUpdateNotes(value:string){
             this.RecordItem.FormItem = value
         }
         onUpdateAmount(value:string){
             this.RecordItem.amount = parseFloat(value)
            
         } 
         saveRecordItem() {
             if(!this.RecordItem.tags||this.RecordItem.tags.length===0){
                 return window.alert('请至少选择一个标签' ) 
             }
            this.$store.commit('createRecord',this.RecordItem)
            window.alert('保存成功')
    }
}
</script>
<style lang = "scss">
/* 写前缀的class名 */
    .layout-content{ 
    display:flex;
    flex-direction: column;
    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";



</style>