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
