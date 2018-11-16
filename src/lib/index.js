import VBar from './charts/bar'
import VLine from './charts/line'
import VDonut from './charts/donut'
import VPie from './charts/pie'


let charts = [
  VBar,
  VLine,
  VPie,
  VDonut
]

let VuePeity = {}

VuePeity.install = (Vue) => {
  if (VuePeity.installed) return;
  Vue.config.optionMergeStrategies.deferredReady = Vue.config.optionMergeStrategies.created;
  charts.map(_component => {
    // 注册组件
    Vue.component(_component.name, _component);

    // 组件缓存
    // VueAMap[upperCamelCase(_component.name).replace(/^El/, '')] = _component;
  })
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  VuePeity.install(Vue);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default VuePeity

export {
  VBar,
  VLine,
  VPie,
  VDonut
}
