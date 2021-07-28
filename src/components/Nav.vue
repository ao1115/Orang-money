<template>
    <div >
      <!-- 这个是表示router引入的文件显示在这里 -->
    <router-view/> 
    <hr/>
    <router-link to="/money">记账</router-link>
      |
      <router-link to="/labels">标签</router-link>
      |
      <router-link to="/statistics">统计</router-link>
      |
  </div>
</template>

<script>
import x from '@/assets/icons/money.svg';
console.log(x)

export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>