import {
  Tracer,
  BatchRecorder,
  ExplicitContext,
  jsonEncoder
} from 'zipkin'
import {HttpLogger} from 'zipkin-transport-http'
import {zipkinInterceptor} from 'zipkin-instrumentation-vue-resource'

const ZIPKIN_URL = window.location.protocol + '//localhost:9411/api/v2/spans'
const remoteSeviceName = 'backend-api'
/**
* Tracing plugin that uses Zipkin. Initiates new traces with outgoing requests
* and injects appropriate headers.
*/
// export default {
//   install (Vue) {
//     const serviceName = 'frontend'
//     console.log(window, "testing! " + ZIPKIN_URL);
//     const tracer = new Tracer({
//       ctxImpl: new ExplicitContext(),
//       recorder: new BatchRecorder({
//         logger: new HttpLogger({
//           endpoint: ZIPKIN_URL,
//           jsonEncoder: jsonEncoder.JSON_V2
//         })
//       }),
//       localServiceName: serviceName,
//       traceId128Bit: true
//     })

//     // const interceptor = zipkinInterceptor({tracer, serviceName})
//     const interceptor = zipkinInterceptor({tracer, serviceName })

//     Vue.http.interceptors.push(interceptor)
//   }
// }
