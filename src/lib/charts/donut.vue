<!--
 Created by Alex on 2018/11/16, v1.0
-->
<template>
  <div>
    <svg v-if="svgSupported" class="peity p-chart-line" :width="width" :height="height">
      <polygon v-if="fillColor" :fill="fillColor" :points="coords.join(' ')"></polygon>
      <polyline v-if="strokeWidth > 0" fill="none"
                :points="coords.length > 0?coords.slice(2, coords.length - 2).join(' '):[]"
                :stroke="strokeColor" :stroke-width="strokeWidth" stroke-linecap="square"></polyline>
    </svg>
    <svg-unsupported v-else></svg-unsupported>
  </div>
</template>

<script>
  import ChartMixin from '../core/ChartMixin'

  export default {
    name: "v-donut",
    mixins: [ChartMixin],
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
