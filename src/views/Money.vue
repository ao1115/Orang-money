
<template>
    <Layout class-prefix="layout">
        {{recordList}}
        <NumberPad @submit = "saveRecord" @update:value = "onUpdateAmount"/>
        <Types :value.sync="record.type" />  <!--用.sync如果有初始值就用初始值，没有就导入外部数据-->
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
const model = require('@/models/model').model //ts引入js时用require

//声明一个记录，用ts必须先声明类型
type Record={
    tags:string[],
    notes:string,
    type:string,
    amount:number
    createdAt?:Date
}
const recordList: Record[] = model.fetch()
  @Component({
       components :{ NumberPad, Types, Tags, Notes}
  })
        export default class Money extends Vue{
         tags =['衣','食','住','行'];
        record:Record={
            tags:[],notes:'',type:'-', amount:0     //给个初始值  
            }
        recordList: Record[] = recordList;
         onUpdateTags(value:string []){
             this.record.tags = value
         }
         onUpdateNotes(value:string){
             this.record.notes = value
         }
         onUpdateAmount(value:string){
             this.record.amount = parseFloat(value)
            
         } 
         saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }
    @Watch('recordList')
    onrecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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