<!--
 Created by Alex on 2018/11/16, v1.0
-->
<template>
  <div class="alert">
    <img src="../../assets/alert.png" :alt="alt" :title="alt">
  </div>
</template>

<script>
  export default {
    name: "SvgUnsupported",
    data(){
      return {
        alt: '抱歉！您的浏览器不支持svg'
      }
    }
  }
</script>

<style scoped>
</style>
