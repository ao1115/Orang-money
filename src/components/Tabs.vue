<template>
    <div>
        <ul class="types">
            <li v-for="item in datasource" :key="item.value"
            @click="select(item)">
            {{item.text}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    @Component
    export default class Tabs extends Vue {
        @Prop({required:true,type:Array})dataSource!:{text:string,value:string}[]
        @Prop(String) readonly value!:string  //初始数据从外部获取，！表示value的类型就是string
        @Prop(String) classPrefix?:string
    }
</script>

<style lang="scss" scoped>
    .types{
        background: #c4c4c4;
        display: flex;
        text-align:center;
        font-size:24px;
        > li{
            width: 50%;
            height:64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;

            &.selected::after{
                content:'';
                position:absolute;
                bottom:0;
                left:0;
                height:4px;
                width:100%;
                background: #333;
            }
        }
        
    }
</style>