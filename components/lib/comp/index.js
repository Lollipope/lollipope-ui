import LComp from './src/main.vue'

LComp.install = function (Vue) {
  Vue.component(LComp.name, LComp)
}

export default LComp
