<template>
    <div>
            <label for="" class="notes">
                <span class="name">{{this.fieldName}}</span>
                <input type="text"
                :value="value"
                @input="onValueChanged($event.target.value)"
                 :placeholder=placeholder>
                 <!-- 
                     :value="value"
                     input = "value = $event.target.value"
                     如果有以上代码，可以简写成
                     v-model = "value"
                     不会对value的值进行任何的读写，只是把value的值回传给value
                  -->
            </label>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
      @Prop({default:''}) readonly value!:string
      @Watch('value')
      onValueChanged(value:string){
          this.$emit('update:value',value)
      }
      @Prop({required:true}) fieldName!:string //将留言改为动态的，required:true表示必填
      @Prop() placeholder?:string;
      
  }
</script>

<style lang="scss" scoped>
    .notes{
        background: #f5f5f5;
        display:block;
        font-size:14px;
        padding-left:16px;
        align-items: center;
        color:rgb(255, 166, 0);
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