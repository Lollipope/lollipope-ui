import LCard from "./card";
import LComp from "./comp";
import LButton from "./button";
import LVdr from "./vdr";

const components = {
  LCard,
  LComp,
  LButton,
  LVdr,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = {
  install,
  ...components,
};
export default API;
