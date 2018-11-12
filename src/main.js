/* eslint-disable */
const settings = {
	chromecastNamespace: 'urn:x-cast:com.vuejs2.chromecast.receiver.starterkit',
	version: '0.8.0'
};

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import CastReceiverManagerService from './services/cast-receiver-manager'
import MessageBusService from './services/message-bus'
import routes from './routes'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
  linkActiveClass: 'active'
});


var messageBusService = new MessageBusService();
var castReceiverManagerService = new CastReceiverManagerService();
messageBusService.init(castReceiverManagerService, settings);
messageBusService.messageBus.onMessage = function(event){
  console.log("messageBus.onMessage: " + JSON.stringify(event["data"]));
  var payload = JSON.parse(event["data"]);

  switch (payload.command)
  {
    case 'nav':
      var page = "/" + payload.page
      if(payload.message){
        page += "/" + payload.message
      }
      app.$router.push(page);
      break;
    case 'version':
      messageBusService.messageBus.broadcast(settings.version);
      break;
  }

 }
messageBusService.manager.start({statusText: "Application is starting"});
var app = new Vue({
  render: h => h(App),
  router: router,
  data: {
    messageBusService: messageBusService,
    castReceiverManagerService: castReceiverManagerService
  }
}).$mount('#app');
// app.$router.push('splash');
