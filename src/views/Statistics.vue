<template>
    <Layout>
        <Tabs class-prefix="type"  :dataSource="recordTypeList" :value.sync="xxx"/>
        <Tabs class-prefix="interval"  
        :dataSource="intervalList" :value.sync="yyy" />
        <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}} </span>
          </li>
        </ol>
      </li>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}} </span>
          </li>
        </ol>
      </li>
    </ol>
    </Layout>

    
</template>

<script lang = "ts">
import Vue from 'vue';
import Types from '@/components/money/Types.vue';
import Tabs from '@/components/Tabs.vue'
import {Component,Watch} from 'vue-property-decorator';
import recordTypeList from '../countents/recordTypeList';
import intervalList from '../countents/intervalList';



@Component({
    components:{Types, Tabs}
})
export default class Statistics extends Vue {
     tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }
    get result() {
      const {recordList} = this;
      type HashTableValue = { title: string, items: RecordList[] }
      const hashTable: { [key: string]: HashTableValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    xxx = '-';
    yyy = 'day';
    recordTypeList =recordTypeList
    intervalList = intervalList
}
</script>

<style lang="scss" scoped>
    %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
    ::v-deep {
    .type-tabs-item {
      background: white;
      &.selected {
        background: #C4C4C4;
        &::after {
          display: none;
        }
      }
    }
    li.interval-tabs-item {
      height: 48px;
    }
  }
</style>