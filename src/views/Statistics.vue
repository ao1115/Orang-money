<template>
    <Layout>
        <Tabs class-prefix="type"  :dataSource="recordTypeList" :value.sync="xxx"/>
        <Tabs class-prefix="interval"  
        :dataSource="intervalList" :value.sync="yyy" />
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
    xxx = '-';
    yyy = 'day';
    recordTypeList =recordTypeList
    intervalList = intervalList
}
</script>

<style lang="scss" scoped>
    ::v-deep .type-tabs-item{ //用::deep来设置这个页面里的Types组件。不影响Types里面的样式，这边还能修改
        background: white;
        &.selected{
            background:#c4c4c4;
            &::after{
                display:none;
            }
        }
    }
   ::v-deep li.interval-tabs-item {
    height: 48px;
  }

</style>