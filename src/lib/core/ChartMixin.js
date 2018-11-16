import SvgUnsupported from '../support/SvgUnsupported'
import * as Util from '../support/Util'

export default {
  components: {
    SvgUnsupported
  },
  props: {
    // 图表数据
    chartData: {
      type: Array,
      required: true
    },
    max: Number,
    min: Number

  },
  computed: {
    height() {
      return Util.getHeight(this.size);
    },
    width() {
      return Util.getWidth(this.size);
    },
    getMax() {
      return Math.max.apply(Math, this.max === undefined ? this.chartData : this.chartData.concat(this.max))
    },
    getMin() {
      return Math.min.apply(Math, this.min == undefined ? this.chartData : this.chartData.concat(this.min))
    },
    // max - min
    diff() {
      return this.getMax() - this.getMin();
    }
  },
  methods: {
    /**
     * 检测当前浏览器是否支持 svg
     */
    svgSupported() {
      return 'createElementNS' in document && document.createElementNS('http://www.w3.org/2000/svg', {}).createSVGRect
    }
  },
}
