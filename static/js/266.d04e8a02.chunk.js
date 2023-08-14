"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[266],{8914:function(t,e,n){n.d(e,{Z:function(){return h}});var a=n(4165),o=n(5861),r=n(9439),c=n(2791),s=n(1087),i={LayoutHeader:"Header_LayoutHeader__5+e23",LayoutLogo:"Header_LayoutLogo__GLQtR",LogoIcon:"Header_LogoIcon__WhxL6",LogoText:"Header_LogoText__m1Fht",LayoutLogin:"Header_LayoutLogin__qhJzU",LoginText:"Header_LoginText__vWNlZ",LoginIcon:"Header_LoginIcon__XPn9E",LogoutIcon:"Header_LogoutIcon__DGNRZ",horizontalShaking:"Header_horizontalShaking__o0Df+"};var u=n.p+"static/media/Pen.e4e8cb2fa9140c7c24780332b817a94a.svg";var d=n.p+"static/media/User.49db7e2a8b2815411dff6a67a49eaf2b.svg";var l=n.p+"static/media/Logout.462b161b7f3916f11c3b75efefa920d0.svg",f=n(3737),_=n(5508),p=n(5330),v=n(184),h=function(){var t=(0,p.FV)(_.C),e=(0,r.Z)(t,2),n=e[0],h=e[1];(0,c.useEffect)((function(){(0,o.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.CS)();case 3:return e=t.sent,t.next=6,h({isLogin:!0,email:e.email,full_name:e.full_name,user_id:e.user_id});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[]);return(0,v.jsxs)("div",{className:i.LayoutHeader,children:[(0,v.jsxs)(s.rU,{to:"".concat("/TodayList"),className:i.LayoutLogo,children:[(0,v.jsx)("img",{className:i.LogoIcon,src:u,alt:""}),(0,v.jsx)("div",{className:"".concat(i.LogoText," ").concat(i.Text),children:"Today list"})]}),n.isLogin&&(0,v.jsxs)(s.rU,{to:"".concat("/TodayList"),className:i.LayoutLogin,children:[(0,v.jsxs)("div",{className:i.LoginText,children:["hello, ",n.full_name]}),(0,v.jsx)("img",{className:i.LoginIcon,src:l,alt:"logout",onClick:function(){(0,f.g_)(),h({isLogin:!1,email:"",full_name:"",user_id:null}),window.location.replace("".concat("/TodayList"))}})]}),!n.isLogin&&(0,v.jsxs)(s.rU,{to:"".concat("/TodayList","/signIn"),className:i.LayoutLogin,children:[(0,v.jsx)("div",{className:i.LoginText,children:"\ub85c\uadf8\uc778"}),(0,v.jsx)("img",{className:i.LoginIcon,src:d,alt:"login"})]})]})}},8266:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var a=n(2791),o=n(3433),r=n(4165),c=n(5861),s=n(9439),i=n(9779),u=n(4610),d=n(1413),l="Todo_Layout__mTbJz",f="Todo_Todo__2foO8",_="Todo_CheckLayout__Hunud",p="Todo_Check__e6UkY",v="Todo_Contents__um-JE",h="Todo_AddIcon__8Zn8t",g="Todo_Checked__pjuD2",m="Todo_DeleteIcon__Sxtm7",x="Todo_MainLayout__Gzu76",y="Todo_SubTodoLayout__KUOg3";var L=n.p+"static/media/Add.2e057c937cde237bffe24db3293bb7a2.svg";var Z=n.p+"static/media/Cancel.f9966b31a1d78a4535181da5dc311446.svg";var N=n.p+"static/media/Check.94595b84c9989d93fa01e55d5612fc28.svg",k=n(5330),j=(0,k.cn)({key:"todoDataState",default:[]}),b=(0,k.cn)({key:"TodoDateState",default:i.ou.now()}),T=(0,k.nZ)({key:"todoDataAllSelector",get:function(t){return(0,t.get)(j)},set:function(t,e){return(0,t.set)(j,e)}}),w=(0,k.CG)({key:"todoDataOneSelector",get:function(t){return function(e){return(0,e.get)(j)[t]}},set:function(t){return function(e,n){var a=e.get,r=e.set,c=a(j);(c=(0,o.Z)(c))[t]=n,r(j,c)}}}),D=n(184),S=function(t){var e=t.contents,n=void 0===e?"":e,r=t.type,c=void 0===r?"MAIN":r,S=t.status,C=void 0===S?"TODO":S,I=t.idx,O=(0,a.useState)(C),H=(0,s.Z)(O,2),F=H[0],M=H[1],J=(0,a.useState)(n),A=(0,s.Z)(J,2),E=A[0],U=A[1],z=(0,k.sJ)(j),R=(0,k.sJ)(b),V=(0,k.FV)(T),G=(0,s.Z)(V,2),P=G[0],B=G[1],W=(0,k.FV)(w(I)),X=(0,s.Z)(W,2),q=X[0],K=X[1];(0,a.useEffect)((function(){U(n),M(C),localStorage.setItem("todoData",JSON.stringify(z))}),[z]);return(0,D.jsxs)("div",{className:"".concat(l," ").concat("MAIN"===c?x:y," ").concat("TODO"===F?"":g),children:[(0,D.jsxs)("div",{className:"".concat(f),children:[(0,D.jsxs)("div",{className:"".concat(_),onClick:function(t){var e="TODO"===F?"CHECKED":"TODO";M(e),K((function(t){return(0,d.Z)((0,d.Z)({},t),{},{status:e})}))},children:[(0,D.jsx)("div",{className:"".concat(p)}),(0,D.jsx)("img",{src:N,alt:"checked"})]}),(0,D.jsx)("input",{value:E,className:v,onChange:function(t){U(t.target.value),K((function(e){return(0,d.Z)((0,d.Z)({},e),{},{contents:t.target.value})}))}}),(0,D.jsx)("div",{className:h,onClick:function(t){var e={todo_id:(0,u.v4)(),user_id:q.user_id,parents_id:q.todo_id,contents:"",status:"TODO",date:R.toFormat("yyyy-MM-dd"),createdAt:i.ou.now().toString(),updatedAt:i.ou.now().toString()},n=[].concat((0,o.Z)(P.slice(0,I+1)),[e],(0,o.Z)(P.slice(I+1)));B(n)},children:(0,D.jsx)("img",{src:L,alt:""})})]}),(0,D.jsx)("div",{className:m,onClick:function(t){var e=[].concat((0,o.Z)(P.slice(0,I)),(0,o.Z)(P.slice(I+1)));B(e)},children:(0,D.jsx)("img",{src:Z,alt:""})})]})},C="TodoList_Layout__NU6oY",I="TodoList_TodoList__Plui+",O="TodoList_AddTodo__zCPbZ",H="TodoList_SaveTodo__DwQez",F="TodoList_Line__EH34a",M=n(3737),J=n(5508),A=n(455);var E=n.p+"static/media/Save.43a3bbb2afeaf18af197aea3c7409e0b.svg",U=function(){var t=(0,k.FV)(J.C),e=(0,s.Z)(t,2),n=e[0],d=(e[1],(0,k.FV)(T)),l=(0,s.Z)(d,2),f=l[0],_=l[1],p=(0,k.sJ)(j),v=(0,k.sJ)(A.x),h=(0,k.sJ)(b);(0,a.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("todoData"),!n.isLogin){t.next=8;break}return t.next=4,(0,M.g6)(h);case 4:a=t.sent,_(a),t.next=9;break;case 8:e&&_(JSON.parse(e));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[v,h]);return(0,D.jsxs)("div",{className:C,children:[n.isLogin&&(0,D.jsx)("div",{className:H,children:(0,D.jsx)("button",{onClick:function(t){var e=localStorage.getItem("todoData")||"";(0,M.h0)(JSON.parse(e),h)},children:(0,D.jsx)("img",{src:E,alt:"save"})})}),(0,D.jsx)("div",{className:F}),(0,D.jsxs)("div",{className:I,children:[p.map((function(t,e){var n=t.parents_id?"SUB":"MAIN";return(0,D.jsx)(S,{idx:e,type:n,contents:t.contents,status:t.status},e)})),(0,D.jsx)("div",{className:O,onClick:function(t){var e={todo_id:(0,u.v4)(),user_id:n.user_id,parents_id:null,contents:"",status:"TODO",date:h.toFormat("yyyy-MM-dd"),createdAt:i.ou.now().toString(),updatedAt:i.ou.now().toString()},a=(0,o.Z)(f);a.push(e),_(a)},children:(0,D.jsx)("img",{src:L,alt:"add todo"})})]})]})},z=n(8914),R="NearbyDates_Layout__esc-R",V="NearbyDates_DatesLayoutSection__UpBRC",G="NearbyDates_NearbyDatesLayout__jqdlR",P=(0,k.nZ)({key:"todoDateSelector",get:function(t){return(0,t.get)(b)},set:function(t,e){return(0,t.set)(b,e)}}),B="NearDate_NearDate__+JXgr",W="NearDate_title__zry2D",X="NearDate_date__xncW5",q="NearDate_SelectedDate__5i2fE",K=function(t){var e=t.datetime,n=t.title,a=void 0===n?" ":n,o=(0,k.FV)(P),r=(0,s.Z)(o,2),c=r[0],i=r[1];return(0,D.jsxs)("div",{className:c===e?"".concat(B," ").concat(q):B,onClick:function(t){i(e)},children:[(0,D.jsx)("div",{className:W,children:a}),(0,D.jsxs)("div",{className:X,children:[e.month,"/",e.day]})]})},Q=function(){var t=i.ou.now(),e=[t.minus({days:2}),t.minus({days:1}),t,t.plus({days:1}),t.plus({days:2})],n=Math.ceil(e.length/2)-1;return(0,D.jsx)("div",{className:R,children:(0,D.jsx)("div",{className:V,children:(0,D.jsx)("div",{className:G,children:e.map((function(t,e){return(0,D.jsx)(K,{datetime:t,title:e===n?"today":" "},e)}))})})})},Y=function(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(z.Z,{}),(0,D.jsx)(Q,{}),(0,D.jsx)(U,{})]})}},455:function(t,e,n){n.d(e,{x:function(){return a}});var a=(0,n(5330).cn)({key:"userInfoState",default:{isLogin:!1,email:"",full_name:"",user_id:null}})},5508:function(t,e,n){n.d(e,{C:function(){return r}});var a=n(5330),o=n(455),r=(0,a.nZ)({key:"userInfoSelector",get:function(t){return(0,t.get)(o.x)},set:function(t,e){return(0,t.set)(o.x,e)}})},3737:function(t,e,n){n.d(e,{CS:function(){return _},Fl:function(){return l},XB:function(){return s},eM:function(){return v},g6:function(){return m},g_:function(){return u},h0:function(){return h}});var a=n(4165),o=n(1413),r=n(5861),c=n(1243).Z.create({baseURL:"".concat("http://localhost:8000","/api"),timeout:1e3,withCredentials:!0});function s(t){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)((0,a.Z)().mark((function t(e){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.post("/auth/login",(0,o.Z)({},e));case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("Failed to login",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function u(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.delete("/auth/logout");case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("Logout Error",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)((0,a.Z)().mark((function t(e){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.post("/auth/join",e);case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function _(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)((0,a.Z)().mark((function t(){var e,n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/auth/user");case 3:return e=t.sent,t.next=6,null===e||void 0===e?void 0:e.data;case 6:return n=t.sent,t.abrupt("return",n);case 10:throw t.prev=10,t.t0=t.catch(0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(){var t="".concat("http://localhost:8000","/api/auth/kakao");return"https://kauth.kakao.com/oauth/authorize?client_id=".concat("6cc06c72534bb75de5a9d7b805108c88","&redirect_uri=").concat(t,"&response_type=code")}function h(t,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)((0,a.Z)().mark((function t(e,n){var o,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=n.toFormat("yyyy-MM-dd")||"",t.next=4,c.post("/task?date=".concat(o),e);case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),console.log("Logout Error",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)((0,a.Z)().mark((function t(e){var n,o,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.toFormat("yyyy-MM-dd")||"",t.next=4,c.get("/task?date=".concat(n));case 4:return o=t.sent,t.next=7,null===o||void 0===o?void 0:o.data;case 7:return r=t.sent,t.abrupt("return",r);case 11:throw t.prev=11,t.t0=t.catch(0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=266.d04e8a02.chunk.js.map