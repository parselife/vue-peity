<!--
 Created by Alex on 2018/11/16, v1.0
 todo
-->
<template>
  <div class="peity-chart-wrapper">
    <svg v-if="svgSupported" class="peity-chart-pie" :width="width" :height="height">

    </svg>
    <svg-unsupported v-else></svg-unsupported>
  </div>
</template>

<script>
  import ChartMixin from '../core/ChartMixin'

  export default {
    name: "v-pie",
    mixins: [ChartMixin],
    props: {
      fillColors: {
        type: Array,
        default: () => ['#ff9900', '#fff4dd', '#ffc66e']
      },
      // 半径
      radius: 8
    },
    data() {
      return {}
    },
    watch: {
      values() {
        this.prepare()
      }
    },
    methods: {
      prepare() {
        // 去除负数 (置为0)
        this.values.map((val) => {
          if (val < 0) {
            val = 0
          }
        })
        // todo




      }

    }
  }
</script>

<style scoped>

</style>
