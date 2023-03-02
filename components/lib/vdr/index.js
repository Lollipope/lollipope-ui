import LVdr from "./src/main.vue";

LVdr.install = function (Vue) {
  Vue.component(LVdr.name, LVdr);
};

export default LVdr;
