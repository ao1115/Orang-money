import router from './router/index';
<template>
  <div id="app">
      <!-- 这个是表示router引入的文件显示在这里 -->
    <router-view/> 
  </div>

</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
   @import "~@/assets/style/helper.scss";
body{
  font-size:16px;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height:1.5
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
