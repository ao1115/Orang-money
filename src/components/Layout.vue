<template>
    <!-- 全局组件 -->
     <div class="nav-wrapper">
        <div class="content"> 
            <!--slot插槽，layout获取到其他页面的数据 -->
            <slot/> 
        </div>
        <Nav/>
    </div>
</template>

<script>

export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border:1px solid  red;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1; //尽量把高度都给content
    }
</style>