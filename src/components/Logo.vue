<template>
    <div class="logo">
           <div><Icon name="orange"/></div> 
            <span>橙子记账</span>  
    </div> 
</template>

<script lang ="ts">
import Vue from 'vue';
export default class Logo extends Vue{


}
</script>

<style lang="scss" scoped>
    .logo{
        position:fixed;
        top:0;
        left:0;
        height: 48px;
        width:100vw;
        line-height: 48px;
        display: flex;
        justify-content: center;
        flex-direction:column;
        flex-direction: row;
        color:rgb(255, 166, 0);
        font-size:20px;
        span{
            margin-left :10px;
        }
    }
</style>