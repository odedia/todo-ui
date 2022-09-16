(function(e){function t(t){for(var n,a,s=t[0],l=t[1],d=t[2],u=0,f=[];u<s.length;u++)a=s[u],i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},1:function(e,t){},"33f6":function(e,t,o){},"39a3":function(e,t,o){"use strict";var n=o("33f6"),i=o.n(n);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("a026"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Todos"),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"info"},[o("p",[e._v("This demo is based on a project written by "),o("a",{attrs:{href:"http://evanyou.me"}},[e._v("Evan You")])]),o("p",[e._v("Original Vue TodoApp project is "),o("a",{attrs:{href:"https://vuejs.org/v2/examples/todomvc.html"}},[e._v("here")])]),o("p",[e._v("First modified for this tutorial by Andrew Hughes")]),o("p",[e._v("Modifications for Tanzu Application Service and Tanzu Application Platform were made by "),o("a",{attrs:{href:"https://odedia.org"}},[e._v("Oded Shopen")])])])}],a=(o("6b54"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",{staticClass:"title"},[e._v("Todos for TAP")]),o("h1",{staticClass:"email"},[e._v(e._s(e.userEmail))]),o("section",{staticClass:"todoapp"},[e.loading?o("div",[o("h1",{staticClass:"loading"},[e._v("Loading...")])]):o("div",[o("header",{staticClass:"header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:this.inputPlaceholder},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})]),o("section",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"main"},[o("ul",{staticClass:"todo-list"},e._l(e.filteredTodos,(function(t){return o("li",{key:t.id,staticClass:"todo",class:{completed:t.completed,editing:t==e.editedTodo}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:[function(o){var n=t.completed,i=o.target,r=!!i.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);i.checked?s<0&&e.$set(t,"completed",n.concat([a])):s>-1&&e.$set(t,"completed",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(t,"completed",r)},function(o){return e.completeTodo(t)}]}}),o("label",{on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.title))]),o("button",{staticClass:"destroy",on:{click:function(o){return e.removeTodo(t)}}})]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"},{name:"todo-focus",rawName:"v-todo-focus",value:t==e.editedTodo,expression:"todo == editedTodo"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(o){return e.doneEdit(t)},keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(o){o.target.composing||e.$set(t,"title",o.target.value)}}})])})),0)]),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[e._v(e._s(e.remaining))]),e._v(" "+e._s(e._f("pluralize")(e.remaining))+" left ")]),o("ul",{staticClass:"filters"},[o("li",[o("a",{class:{selected:"all"==e.visibility},attrs:{href:"#/all"},on:{click:function(t){return e.setVisibility("all")}}},[e._v("All")])]),o("li",[o("a",{class:{selected:"active"==e.visibility},attrs:{href:"#/active"},on:{click:function(t){return e.setVisibility("active")}}},[e._v("Active")])]),o("li",[o("a",{class:{selected:"completed"==e.visibility},attrs:{href:"#/completed"},on:{click:function(t){return e.setVisibility("completed")}}},[e._v("Completed")])])]),o("button",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>e.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:e.removeCompleted}},[e._v(" Clear completed ")])])])]),e.error?o("div",{staticClass:"error",on:{click:e.handleErrorClick}},[e._v(" ERROR: "+e._s(this.error)+" ")]):e._e()])}),s=[],l=(o("ac6a"),o("bc3a")),d=o.n(l),c=d.a.create({baseURL:"https://"+window.location.hostname+"/api",timeout:5e3}),u={createNew:function(e,t){return c.post("todos",{title:e,completed:t})},getAll:function(){return c.get("todos",{transformResponse:[function(e){return e?JSON.parse(e)._embedded.todos:e}]})},updateForId:function(e,t,o){return c.put("todos/"+e,{title:t,completed:o})},removeForId:function(e){return c.delete("todos/"+e)}},f={all:function(e){return e},active:function(e){return e.filter((function(e){return!e.completed}))},completed:function(e){return e.filter((function(e){return e.completed}))}},p={name:"Todos",props:{activeUser:Object},data:function(){return{todos:[],newTodo:"",editedTodo:null,visibility:"all",loading:!0,error:null}},mounted:function(){var e=this;u.getAll().then((function(t){e.$log.debug("Data loaded: ",t.data),e.todos=t.data})).catch((function(t){e.$log.debug(t),e.error="Failed to load todos"})).finally((function(){return e.loading=!1}))},computed:{filteredTodos:function(){return f[this.visibility](this.todos)},remaining:function(){return f.active(this.todos).length},allDone:{get:function(){return 0===this.remaining},set:function(e){this.todos.forEach((function(t){t.completed=e}))}},userEmail:function(){return this.activeUser?this.activeUser.email:""},inputPlaceholder:function(){return this.activeUser?this.activeUser.given_name+", what needs to be done?":"What needs to be done?"}},filters:{pluralize:function(e){return 1===e?"item":"items"}},methods:{addTodo:function(){var e=this,t=this.newTodo&&this.newTodo.trim();t&&(u.createNew(t,!1).then((function(o){e.$log.debug("New item created:",o),e.todos.push({id:o.data.id,title:t,completed:!1})})).catch((function(t){e.$log.debug(t),e.error="Failed to add todo"})),this.newTodo="")},setVisibility:function(e){this.visibility=e},completeTodo:function(e){var t=this;u.updateForId(e.id,e.title,e.completed).then((function(e){t.$log.info("Item updated:",e.data)})).catch((function(o){t.$log.debug(o),e.completed=!e.completed,t.error="Failed to update todo"}))},removeTodo:function(e){var t=this;u.removeForId(e.id).then((function(){t.$log.debug("Item removed:",e),t.todos.splice(t.todos.indexOf(e),1)})).catch((function(e){t.$log.debug(e),t.error="Failed to remove todo"}))},editTodo:function(e){this.beforeEditCache=e.title,this.editedTodo=e},doneEdit:function(e){var t=this;this.editedTodo&&(this.$log.info("Item updated:",e),u.updateForId(e.id,e.title.trim(),e.completed).then((function(o){t.$log.info("Item updated:",o.data),t.editedTodo=null,e.title=e.title.trim()})).catch((function(o){t.$log.debug(o),t.cancelEdit(e),t.error="Failed to update todo"})),e.title||this.removeTodo(e))},cancelEdit:function(e){this.editedTodo=null,e.title=this.beforeEditCache},removeCompleted:function(){this.todos=f.active(this.todos)},handleErrorClick:function(){this.error=null}},directives:{"todo-focus":function(e,t){t.value&&e.focus()}}},m=p,v=m,h=(o("39a3"),o("2877")),g=Object(h["a"])(v,a,s,!1,null,null,null),b=g.exports,y={name:"app",components:{Todos:b},data:function(){return{}},console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return console})),window:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return window}))},w=y,_=w,T=(o("034f"),Object(h["a"])(_,i,r,!1,null,null,null)),C=T.exports,k=o("28dd"),E=o("85ff"),x=o.n(E);n["a"].config.productionTip=!1;var O={isEnabled:!0,logLevel:"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!1,separator:"|",showConsoleColors:!0};n["a"].use(x.a,O),n["a"].use(k["a"]),new n["a"]({el:"#app",template:"<App/>",components:{App:C}})},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.e398e9a5.js.map