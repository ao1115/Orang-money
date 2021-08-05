<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FormItem :value ="tag.name" 
            @update:value = "update"
            fieldName="标签" placeholder="请输入标签名"/>
        </div>
        
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
    </div>
    </Layout>    
</template>

<script lang='ts'>
import Vue from 'vue';
import Layout from '@/components/Layout.vue'
import tagListModel from '@/models/TagListModel';
import { Component } from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';

 @Component({
     components: {FormItem , Layout ,Button}
 })
   export default class Labels extends Vue{
       tag?: { id: string; name: string; }|undefined;//声明tag
       created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(tag => tag.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }
    update(name:string){
        if(this.tag){
            tagListModel.update(this.tag.id,name)
        }
    }
    remove(){
        tagListModel.remove(this.tag.id,)
    }
}
</script>

<style lang="scss" scoped>
    .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    background: white;
    margin-top: 8px;
  }
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>