
let VuePeity = {};

VuePeity.install  = (Vue) => {
  if (VuePeity.installed) return;

};

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  VuePeity.install(Vue);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default VuePeity
