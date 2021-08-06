<template>
    <Layout>
        <Types class-prefix="zzz" :value.sync="yyy"/>
        <Tabs :data-source="array" class-prefix="zzz3" :value.sync="yyy"/>
    </Layout>

    
</template>

<script lang = "ts">
import Vue from 'vue';
import Types from '@/components/money/Types.vue';
import Tabs from '@/components/Tabs.vue'
import {Component,Watch} from 'vue-property-decorator';

@Component({
    components:{Types,Tabs}
})
export default class Statistics extends Vue {
    yyy = '-'
    array=[
        {text:'按天',value:'day'},
        {text:'按周',value:'week'},
        {text:'按月',value:'month'},
    ]
}
</script>

<style lang="scss" scoped>
    ::v-deep .zzz-item{ //用::deep来设置这个页面里的Types组件。不影响Types里面的样式，这边还能修改
        background: white;
        &.selected{
            background:#c4c4c4;
            &::after{
                display:none;
            }
        }
    }

</style>