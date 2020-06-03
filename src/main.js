// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 添加 element-ui组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 布局的样式
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false
Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
