<template>
    <!-- 全局组件 -->
     <div class="layout-wrapper">
        <div class="content" :class=" classPrefix &&` ${classPrefix}-content`"> 
            <!--slot插槽，layout获取到其他页面的数据 -->
            <slot/> 
        </div>
        <Nav/>
    </div>
</template>

<script>

export default {
   props:['classPrefix'] //准备一个带有前缀的class名
}
</script>

<style lang="scss" scoped>
    .layout-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1; //尽量把高度都给content
    }
</style>