<!--
 Created by Alex on 2018/11/16, v1.0
 todo
-->
<template>
  <div class="peity-chart-wrapper">
    <circle v-if="svgSupported" class="peity-chart-pie" :width="width" :height="height">

    </circle>
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
      }
    },
    data() {
      return {}
    },
    watch: {
      values() {
        this.prepare()
      }
    },
    computed: {
      cx() {

        return this.width() / 2;
      },
      cy() {

        return this.height() / 2;

      },
      radius() {
        return Math.min(this.cx(), this.cy())
      }
    },
    methods: {
      prepare() {
        this.fixNegative();

        var i = 0
        var length = this.values.length
        var sum = 0

        for (; i < length; i++) {
          sum += this.values[i]
        }

        if (!sum) {
          length = 2
          sum = 1
          this.values = [0, 1]
        }

        var cx = this.width() / 2
          , cy = this.height() / 2

        // 圆半径
        var radius = Math.min(cx, cy)


        var cumulative = 0

        for (i = 0; i < length; i++) {
          var value = this.values[i]
            , portion = value / sum
            , $node

          if (portion == 0) continue

          if (portion == 1) {
            $node = svgElement('circle', {
              cx: cx,
              cy: cy,
              'data-value': value,
              r: radius
            })
          } else {
            var cumulativePlusValue = cumulative + value

            var d = ['M'].concat(
              scale(cumulative, radius),
              'A', radius, radius, 0, portion > 0.5 ? 1 : 0, 1,
              scale(cumulativePlusValue, radius),
              'L'
            )

            if (innerRadius) {
              d = d.concat(
                scale(cumulativePlusValue, innerRadius),
                'A', innerRadius, innerRadius, 0, portion > 0.5 ? 1 : 0, 0,
                scale(cumulative, innerRadius)
              )
            } else {
              d.push(cx, cy)
            }

            cumulative += value

            $node = svgElement('path', {
              d: d.join(" "),
              'data-value': value,
            })
          }

          $node.attr('fill', fill.call(this, value, i, values))

          $svg.append($node)
        }


      },
      scale(value, radius, sum, cx, cy) {
        var pi = Math.PI
        var radians = value / sum * pi * 2 - pi / 2
        return [
          radius * Math.cos(radians) + cx,
          radius * Math.sin(radians) + cy
        ]
      }

    }
  }
</script>

<style scoped>

</style>
