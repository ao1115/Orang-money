<template>
    <Layout>
        <div>
            <Icon name="left"/>
            <span>编辑</span>
        </div>
        <FormItem fieldName="标签" placeholder="请输入标签名"/>
    </Layout>    
</template>

<script lang='ts'>
import Vue from 'vue';
import Layout from '@/components/Layout.vue'
import tagListModel from '@/models/recordListModel';
import { Component } from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import { component } from 'vue/types/umd';

 @Component({
     components: {FormItem }
 })
   export default class Labels extends Vue{
       tag: { id: string; name: string; }|undefined;
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
}
</script>

<style lang="scss" scoped>

</style>