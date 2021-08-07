<template>
    <div class="tags">
            <div class="new">
                <button @click="create">新增按钮</button>
            </div>
            
            <ul class="current">
                  <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>    
            </ul>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({
        computed:{
            tagList(){
               return this.$store.state.tagList;
               
           }
        }
    })

    export default class Tags extends Vue {
        
        selectedTags:string [] = [];

        created(){
            this.$store.commit('fetchTags')
        }

        toggle(tag:string){
            const index = this.selectedTags.indexOf(tag);
            if(index>=0){
                this.selectedTags.splice(index,1)
            }else{
                this.selectedTags.push(tag)
            }
            this.$emit('update:value',this.selectedTags)
        }

        create(){
            const name = window.prompt('请输入标签名')
            if(!name){
                alert('标签名不能为空')
            }else{
                this.$store.commit('createTag',name)
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .tags{
        padding: 16px;
        display:flex;
        flex-direction: column-reverse;
        flex-grow: 1;
        margin-top:48px;
        > .current{
            display: flex;
            flex-wrap: wrap;
            > li{
                background: rgb(255, 166, 0);
                $h:24px;
                height:$h;
                line-height:$h;
                border-radius: $h/2;
                padding :0 16px;
                margin-right:12px;
                margin-top:4px;
                &.selected{
                    background: rgb(255, 94, 0);
                }
            }
        }
        > .new{
            padding-top:16px;
            button{
                background: transparent;
                border:none;
                color:#999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>