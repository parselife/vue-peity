<!--
 Created by Alex on 2018/11/16, v1.0
-->
<template>
  <div class="peity-chart-wrapper">
    <svg v-if="svgSupported" class="peity-chart-line" :width="width" :height="height">
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
    name: "v-line",
    mixins: [ChartMixin],
    props: {
      fillColor: {
        type: String,
        default: '#c6d9fd'
      },
      strokeColor: {
        type: String,
        default: '#4d89f9'
      },
      strokeWidth: {
        type: Number,
        default: 1
      }

    },
    data() {
      return {
        coords: []
      }
    },
    watch: {
      values() {
        this.prepare()
      }
    },
    created() {
      this.prepare()
    },
    methods: {
      xScale(input) {
        return input * (this.width / (this.values.length - 1))
      },

      yScale(input) {
        let height = this.height - this.strokeWidth
        let y = height
        if (this.diff) {
          y -= ((input - this.minVal) / this.diff) * height
        }
        return y + this.strokeWidth / 2

      },
      prepare() {
        let zero = this.yScale(Math.max(this.minVal, 0))
        this.coords = [0, zero]

        for (var i = 0; i < this.values.length; i++) {
          this.coords.push(
            this.xScale(i),
            this.yScale(this.values[i])
          )
        }
        this.coords.push(this.width, zero)
      }
    }
  }
</script>

<style scoped>

</style>
