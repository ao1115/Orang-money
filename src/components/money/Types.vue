<template>
    <div>
            <ul class="types">
                <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='-'}"
                @click="selectType('-')">支出
                </li>
            <li  :class="{[classPrefix+'-item']:classPrefix,selected:value==='+'}"
                @click="selectType('+')">收入
            </li>
            </ul>
        </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue {
    //data直接写
    //type = '-'; // '-'表示支出，'+'表示收入
    @Prop(String) readonly value!:string  //初始数据从外部获取，！表示value的类型就是string
    @Prop(String) classPrefix?:string //设置属性名前缀
    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value',type)
    }
    
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