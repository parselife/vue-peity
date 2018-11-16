<!--
 Created by Alex on 2018/11/16, v1.0
-->
<template>
  <div>
    <svg v-if="svgSupported" class="peity" :width="width" :height="height"/>
    <svg-unsupported v-else></svg-unsupported>
  </div>
</template>

<script>
  import ChartMixin from '../core/ChartMixin'

  export default {
    name: "v-line",
    mixins: [ChartMixin],
    props: {
      fill: {
        type: String,
        default: '#c6d9fd'
      },
      stroke: {
        type: String,
        default: '#4d89f9'
      },
      strokeWidth: {
        type: Number,
        default: 1
      },
      /**
       * 大小
       * 支持以下枚举
       * sm h16 w32
       * md h24 w48
       * lg h32 w64
       * xl h64 w128
       * 或自定义数组([宽度,高度]) eg. [16,32]
       *
       */
      size: {
        type: [String, Array],
        default: 'sm'
      },
      min: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {

      xScale() {

      },
      yScale() {

      }
    }
  }
</script>

<style scoped>

</style>
