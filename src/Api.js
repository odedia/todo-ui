import axios from 'axios'  
import wrapAxios from 'zipkin-axios'
import {HttpLogger} from 'zipkin-transport-http'
import {Tracer, ExplicitContext, BatchRecorder} from 'zipkin';

//The updated code is using PCF route mappings instead of port binding.
const SERVER_URL = process.env.SERVER_URL || window.location.protocol + '//' + window.location.hostname + '/api'
const ZIPKIN_URL = process.env.ZIPKIN_URL || "http://localhost:9411/api/v2/spans"

const ctxImpl = new ExplicitContext();
const recorder = new BatchRecorder({
  logger: new HttpLogger({
    endpoint: ZIPKIN_URL
  })
});

const localServiceName = 'todo-ui'; // name of this service
const remoteServiceName = 'todo-service' // name of the remote service

const tracer = new Tracer({ ctxImpl: ctxImpl, 
                            recorder: recorder, 
                            serviceName: localServiceName});

const instance = axios.create({  
  baseURL: SERVER_URL,
  timeout: 1000
});  

const zipkinAxios = wrapAxios(instance, { 
                                tracer: tracer,  
                                serviceName: localServiceName, 
                                remoteServiceName: remoteServiceName 
                              });
  
export default {
  // (C)reate  
  createNew: (text, completed) => zipkinAxios.post('todos', {title: text, completed: completed}),  
  // (R)ead  
  getAll: () => zipkinAxios.get('todos', {  
    transformResponse: [function (data) {  
      return data ? JSON.parse(data)._embedded.todos : data;  
    }]  
  }),  
  // (U)pdate API
  updateForId: (id, text, completed) => zipkinAxios.put('todos/'+id, {title: text, completed: completed}),  
  // (D)elete API
  removeForId: (id) => zipkinAxios.del('todos/'+id)  
}
