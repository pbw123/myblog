import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'vant';
import { Popup } from 'vant';
import { ActionSheet } from 'vant';
import { Dialog } from 'vant';
import { Field } from 'vant';
import { Icon } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Popup);
Vue.use(Button);
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
