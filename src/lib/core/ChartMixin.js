import SvgUnsupported from '../support/SvgUnsupported'
import * as Util from '../support/Util'

export default {
  components: {
    SvgUnsupported
  },
  props: {
    // 图表数据
    values: {
      type: Array,
      required: true
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
    max: Number,
    min: {
      type: Number,
      default: 0
    }

  },
  computed: {
    height() {
      return Util.getHeight(this.size);
    },
    width() {
      return Util.getWidth(this.size);
    },
    maxVal() {
      return Math.max.apply(Math, this.max === undefined ? this.values : this.values.concat(this.max))
    },
    minVal() {
      return Math.min.apply(Math, this.min == undefined ? this.values : this.values.concat(this.min))
    },
    // max - min
    diff() {
      return this.maxVal - this.minVal;
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
