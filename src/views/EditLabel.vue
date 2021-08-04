<template>
    <Layout>
        编辑
    </Layout>    
</template>

<script lang='ts'>
import Vue from 'vue';
import Layout from '@/components/Layout.vue'
import tagListModel from '@/models/tagListModel';
import { Component } from 'vue-property-decorator';
 @Component
   export default class Labels extends Vue{
       tag: { id: string; name: string; }|undefined;
       created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
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