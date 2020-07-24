import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import VueLogger from 'vuejs-logger';
import {
  Tracer,
  BatchRecorder,
  ExplicitContext,
  jsonEncoder
} from 'zipkin';
import {HttpLogger} from 'zipkin-transport-http';
// and here the interceptor is imported
import {zipkinInterceptor} from 'zipkin-instrumentation-vue-resource';
import VueResource from 'vue-resource';

const options = {
  isEnabled: true,
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};

const serviceName = 'todo-ui'

// this Tracer communicates to Zipkin through HTTP protocol
const tracer = new Tracer({
  ctxImpl: new ExplicitContext(),
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      // take a look
      // endpoint: window.location.protocol + '//' + window.location.host + '/zipkin',
      endpoint: 'http://a037ceb5b007040c9ac39f4186e15796-1927907915.eu-west-1.elb.amazonaws.com:2878/api/v2/spans',
      jsonEncoder: jsonEncoder.JSON_V2
    })
  }),
  localServiceName: serviceName
})

const interceptor = zipkinInterceptor({tracer, serviceName})

Vue.use(VueLogger, options);
Vue.use(VueResource);

Vue.http.interceptors.push(interceptor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, VueResource, VueLogger }
});

