<!--
 Created by Alex on 2018/11/16, v1.0
-->
<template>
  <div class="peity-chart-wrapper">
    <div v-if="svgSupported">

    </div>
    <svg-unsupported v-else></svg-unsupported>
  </div>
</template>

<script>
  import ChartMixin from '../core/ChartMixin'

  export default {
    name: "v-bar",
    mixins: [ChartMixin]
  }
</script>

<style scoped>

</style>
