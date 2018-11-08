webpackJsonp([1],{GZpI:function(e,t){},JOMl:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),a=r("NYxO"),i=r("zL8q"),s=r.n(i),l=(r("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var n=r("VU/8")({name:"App"},l,!1,function(e){r("sUU2")},null,null).exports,u=r("/ocq"),c={components:{},props:{},data:function(){return{loginForm:{user:"admin",password:"admin"}}},watch:{},computed:{},methods:{login:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.error("error submit!!"),!1;sessionStorage.setItem("user",t.loginForm.user),sessionStorage.setItem("password",t.loginForm.password),t.$message({message:"登陆成功！",duration:1200,type:"success"}),t.$router.push({path:"/register"})})},reset:function(e){this.$refs[e].resetFields()}},created:function(){},mounted:function(){}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-scrollbar",{staticClass:"login-scroll"},[r("el-row",{staticClass:"row-bg mg-top100",attrs:{type:"flex",justify:"center",align:"middle"}},[r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"login-title"},[e._v("用户登录")]),e._v(" "),r("el-form",{ref:"loginForm",attrs:{"status-icon":"",model:e.loginForm,"label-width":"60px"}},[r("el-form-item",{attrs:{prop:"user",rules:e.$validateRules({required:!0,requiredItem:"用户名"})}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.loginForm.user,callback:function(t){e.$set(e.loginForm,"user",t)},expression:"loginForm.user"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password",rules:e.$validateRules({required:!0,requiredItem:"密码"})}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login("loginForm")}}},[e._v("登录")])],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.reset("loginForm")}}},[e._v("重置")])],1)],1)],1)])],1)},staticRenderFns:[]};var m=r("VU/8")(c,d,!1,function(e){r("JOMl")},null,null).exports,p={data:function(){return{registerForm:{name:"admin",email:"admin@163.com",mobile:"13333333333",location:"南京",validPeriod:1},locations:[{value:"1",label:"南京"},{value:"2",label:"北京"},{value:"3",label:"上海"},{value:"4",label:"广州"},{value:"5",label:"重庆"},{value:"6",label:"深圳"},{value:"7",label:"杭州"},{value:"8",label:"武汉"}],isLoading:!1}},methods:{register:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.error("error submit!!"),!1;t.$service.getRegistrationCode(t.registerForm).then(function(e){t.$alert(e.registrationCode,"注册码",{confirmButtonText:"关闭",type:"success",callback:function(e){}})}).catch(function(e){console.error(e)})})},reset:function(e){this.$refs[e].resetFields()}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-scrollbar",{staticClass:"main-wrap"},[r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-card",{attrs:{shadow:"always"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",{staticClass:"card-title"},[e._v("获取注册码")])]),e._v(" "),r("div",[r("el-form",{ref:"registerForm",attrs:{"status-icon":"",model:e.registerForm,"label-width":"70px","label-position":"left"}},[r("el-form-item",{attrs:{prop:"name",rules:e.$validateRules({required:!0,requiredItem:"姓名"}),label:"姓名"}},[r("el-input",{model:{value:e.registerForm.name,callback:function(t){e.$set(e.registerForm,"name",t)},expression:"registerForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"email",rules:e.$validateRules({required:!0,requiredItem:"邮箱",type:"email"}),label:"邮箱"}},[r("el-input",{model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"mobile",rules:e.$validateRules({required:!0,requiredItem:"手机号",type:"mobile"}),label:"手机号"}},[r("el-input",{model:{value:e.registerForm.mobile,callback:function(t){e.$set(e.registerForm,"mobile",t)},expression:"registerForm.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"location",rules:e.$validateRules({required:!0,requiredItem:"所在地"}),label:"所在地"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.registerForm.location,callback:function(t){e.$set(e.registerForm,"location",t)},expression:"registerForm.location"}},e._l(e.locations,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),r("el-form-item",{attrs:{prop:"validPeriod",rules:e.$validateRules({required:!0,requiredItem:" "}),label:"有效期"}},[r("el-radio-group",{model:{value:e.registerForm.validPeriod,callback:function(t){e.$set(e.registerForm,"validPeriod",t)},expression:"registerForm.validPeriod"}},[r("el-radio",{attrs:{label:1}},[e._v("一个月")]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("三个月")]),e._v(" "),r("el-radio",{attrs:{label:12}},[e._v("一年")])],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.register("registerForm")}}},[e._v("注册")]),e._v(" "),r("el-button",{on:{click:function(t){e.reset("registerForm")}}},[e._v("重置")])],1)],1)],1)])],1)],1)},staticRenderFns:[]};var g=r("VU/8")(p,f,!1,function(e){r("GZpI")},null,null).exports;o.default.use(u.a);var v=new u.a({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"*",redirect:"/login"},{path:"/login",component:m},{path:"/register",component:g,meta:{requiresLogin:!0}}]});v.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.requiresLogin})?sessionStorage.getItem("user")&&sessionStorage.getItem("password")?r():r({path:"/login"}):r()});var b=v,h=r("//Fk"),F=r.n(h),w=r("mtWM"),_=r.n(w),$=(r("mw3O"),void 0),y=function(){$.close()},q=function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...";$=i.Loading.service({lock:!0,text:e,background:"rgba(0, 0, 0, 0.5)"})}(e)};_.a.defaults.timeout=5e3,_.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",_.a.defaults.baseURL="http://localhost",_.a.defaults.withCredentials=!0,_.a.interceptors.request.use(function(e){return e.showLoading&&q(e.loadingText),e},function(e){return console.error("错误的传参!"),F.a.reject(e)}),_.a.interceptors.response.use(function(e){return e.config.showLoading&&y(),200!==e.status?F.a.reject(e):1!==e.data.status?(Object(i.Message)({message:e.data.msg,duration:1200,type:"error"}),y(),F.a.reject(e.data.msg)):e},function(e){return Object(i.Message)({message:"网络异常，请稍后再试！",duration:1200,type:"error"}),y(),F.a.reject(e)});var x=_.a,k={getRegistrationCode:function(e){return function(e,t,r,o){return new F.a(function(a,i){x.post(e,t,{showLoading:r,loadingText:o}).then(function(e){a(e.data)},function(e){i(e)}).catch(function(e){i(e)})})}("/registrationCode",e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:"正在获取注册码")}},R=function(e,t,r){""===t?r(new Error("请输入手机号")):/^1[3|4|5|7|8][0-9]\d{8}$/.test(t)?r():r(new Error("请输入正确的手机号"))},I=function(e){var t=[];if(e.required&&e.requiredItem&&t.push({required:!0,message:"请输入"+e.requiredItem,trigger:"blur"}),e.type)switch(e.type){case"email":t.push({type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]});break;case"mobile":t.push({validator:R,trigger:["blur","change"]});break;default:t.push({})}return t};o.default.use(s.a,a.a,x),o.default.prototype.$axios=x,o.default.prototype.$service=k,o.default.prototype.$validateRules=I,o.default.config.productionTip=!1,new o.default({el:"#app",router:b,components:{App:n},template:"<App/>"})},sUU2:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e6b063ec7778ec4b2c4b.js.map