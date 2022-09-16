import axios from 'axios'  
import wrapAxios from 'zipkin-axios'
import {HttpLogger} from 'zipkin-transport-http'
import {Tracer, ExplicitContext, BatchRecorder} from 'zipkin';

//The updated code is using PCF route mappings instead of port binding.
const SERVER_URL = process.env.SERVER_URL || window.location.protocol + '//' + window.location.hostname + '/api'
// const SERVER_URL = 'https://todos.test.tanzutime.com/api'

const ctxImpl = new ExplicitContext();

const instance = axios.create({  
  baseURL: 'https://' + window.location.hostname + '/api',
  timeout: 5000
});  
  
export default {  
  // (C)reate  
  createNew: (text, completed) => instance.post('todos', {title: text, completed: completed}),  
  // (R)ead  
  getAll: () => instance.get('todos', {  
    transformResponse: [function (data) {  
      return data ? JSON.parse(data)._embedded.todos : data;  
    }]  
  }),  
  // (U)pdate API
  updateForId: (id, text, completed) => instance.put('todos/'+id, {title: text, completed: completed}),  
  // (D)elete API
  removeForId: (id) => instance.delete('todos/'+id)  
}

