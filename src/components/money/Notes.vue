<template>
    <div>
            <label for="" class="notes">
                <span class="name">备注</span>
                <input type="text"
                v-model="value"
                 placeholder="请输入备注">
                 <!-- 
                     :value="value"
                     input = "value = $event.target.value"
                     如果有以上代码，可以简写成
                     v-model = "value"
                  -->
            </label>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
      value = '';
      @Watch('value')
      onValueChanged(value:string){
          this.$emit('update:value',value)
      }
      
      
  }
</script>

<style lang="scss" scoped>
    .notes{
        background: #f5f5f5;
        display:block;
        font-size:14px;
        padding-left:16px;
        align-items: center;
        .name{
            padding-right: 16px;
        }
        input{
            height:64px;
            flex-grow:1;
            background: transparent;
            border:none;
        }
    }


</style>