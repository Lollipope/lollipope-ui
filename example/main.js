import Vue from 'vue'
import App from './App.vue'

import '../components/css/comp.scss'
import '../components/css/card.scss'
import QComp from '../components/lib/comp'
import QCard from '../components/lib/card'

Vue.use(QComp)
Vue.use(QCard)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
