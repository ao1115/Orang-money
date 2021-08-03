
<template>
    <Layout class-prefix="layout">
        {{RecordItem}}
        <NumberPad @submit = "saveRecordItem" @update:value = "onUpdateAmount"/>
        <Types :value.sync="RecordItem.type" />  <!--用.sync如果有初始值就用初始值，没有就导入外部数据-->
        <Notes @update:value = "onUpdateNotes"/>
        <!-- 用sync把外部的文件导入到内部数据中 -->
        <Tags @update:value ="onUpdateTags" :dataSource.sync="tags" />   
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';
import model from '@/models/model';

//声明一个记录，用ts必须先声明类型
type RecordItem={
    tags:string[],
    notes:string,
    type:string,
    amount:number
    createdAt?:Date
}
const RecordItemList = model.fetch()
  @Component({
       components :{ NumberPad, Types, Tags, Notes}
  })
        export default class Money extends Vue{
         tags =['衣','食','住','行'];
        RecordItem:RecordItem={
            tags:[],notes:'',type:'-', amount:0     //给个初始值  
            }
        RecordItemList: RecordItem[] = RecordItemList;
         onUpdateTags(value:string []){
             this.RecordItem.tags = value
         }
         onUpdateNotes(value:string){
             this.RecordItem.notes = value
         }
         onUpdateAmount(value:string){
             this.RecordItem.amount = parseFloat(value)
            
         } 
         saveRecordItem() {
      const RecordItem2: RecordItem = model.clone((this.RecordItem));
      RecordItem2.createdAt = new Date();
      this.RecordItemList.push(RecordItem2);
    }
    @Watch('RecordItemList')
    onRecordItemListChange() {
      model.save((this.RecordItemList));
    }
        }
</script>
<style lang = "scss">
/* 写前缀的class名 */
    .layout-content{ 
    display:flex;
    flex-direction: column-reverse;
    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";


</style>