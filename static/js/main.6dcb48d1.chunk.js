(this["webpackJsonpdz-app"]=this["webpackJsonpdz-app"]||[]).push([[0],{13:function(e,t,n){e.exports={someClass:"Greeting_someClass__2uzbp",error:"Greeting_error__Mz4rB",errorText:"Greeting_errorText__3AYOa"}},14:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2inZz",errorInput:"SuperInputText_errorInput__cbXZN",error:"SuperInputText_error__1s7PS",blue:"SuperInputText_blue__3lUNR"}},18:function(e,t,n){e.exports={default:"SuperButton_default__2dvAV",red:"SuperButton_red__GHuGb"}},19:function(e,t,n){e.exports={blue:"HW4_blue__1p0Rp",column:"HW4_column__2v2C0",testSpanError:"HW4_testSpanError__3C87v"}},20:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3L9_v",spanClassName:"SuperCheckbox_spanClassName__1eMtA"}},27:function(e,t,n){e.exports={App:"App_App__1iC55"}},36:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(26),s=n.n(c),i=(n(36),n(27)),o=n.n(i),j=n(0);var l=function(){return Object(j.jsx)("div",{children:"// add NavLinks"})},d=n(2);var u=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"404"}),Object(j.jsx)("div",{children:"Page not found!"}),Object(j.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},b=n(7),h=n.n(b);var m=function(e){return Object(j.jsxs)("div",{className:h.a.messageWrapper,children:[Object(j.jsx)("div",{className:h.a.ava,children:Object(j.jsx)("img",{src:e.avatar})}),Object(j.jsx)("div",{className:h.a.triangle}),Object(j.jsxs)("div",{className:h.a.messageContainer,children:[Object(j.jsx)("div",{className:h.a.userName,children:e.name}),Object(j.jsx)("div",{className:h.a.message,children:e.message}),Object(j.jsx)("div",{className:h.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",_="some text",f="22:00";var p=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(m,{avatar:x,name:O,message:_,time:f}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},v=n(5),g=n(6),C=n.n(g);var N=function(e){return Object(j.jsxs)("div",{className:C.a.content,children:[Object(j.jsx)("div",{className:C.a.contentItemName,children:Object(j.jsx)("span",{children:e.affair.name})}),Object(j.jsx)("div",{className:C.a[e.affair.priority],children:Object(j.jsxs)("span",{children:["[",e.affair.priority,"]"]})}),Object(j.jsx)("div",{className:C.a.contentItemBtn,children:Object(j.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})})]})},k=n(8),S=n(9),A=n(18),w=n.n(A),y=function(e){var t=e.red,n=e.className,r=Object(S.a)(e,["red","className"]),a="".concat(t?w.a.red:w.a.default," ").concat(n);return Object(j.jsx)("button",Object(k.a)({className:a},r))};var I=function(e){var t=e.data.map((function(t){return Object(j.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t)};return Object(j.jsxs)("div",{className:C.a.someClass,children:[t,Object(j.jsxs)("div",{className:C.a.filterBtn,children:[Object(j.jsx)(y,{onClick:function(){n("all")},children:"All"}),Object(j.jsx)(y,{onClick:function(){n("high")},children:"High"}),Object(j.jsx)(y,{onClick:function(){n("middle")},children:"Middle"}),Object(j.jsx)(y,{onClick:function(){n("low")},children:"Low"})]})]})},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(r.useState)(T),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(I,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},M=n(31),W=n(13),E=n.n(W),H=n(14),U=n.n(H),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(U.a.error," ").concat(i||""),d="".concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(k.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:d},o)),c&&Object(j.jsx)("span",{className:l,children:c})]})},z=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?E.a.error:"";return Object(j.jsxs)("div",{children:[Object(j.jsx)(P,{value:t,onChange:n,className:s,error:a}),Object(j.jsx)(y,{red:!!a,disabled:""===t,onClick:r,children:"add"}),Object(j.jsx)("span",{children:c})]})},G=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(v.a)(o,2),d=l[0],u=l[1],b=t.length;return Object(j.jsx)(z,{name:s,setNameCallback:function(e){e.currentTarget.value.trim()?(i(e.currentTarget.value),u("")):(i(""),u("name is require!"))},addUser:function(){n(s),alert("Hello ".concat(s," !")),i("")},error:d,totalUsers:b})},F=n(28);var K=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{className:E.a.someClass}),"homeworks 3",Object(j.jsx)(G,{users:n,addUserCallback:function(e){var t={_id:Object(F.v1)(),name:e};a([].concat(Object(M.a)(n),[t]))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},q=n(19),J=n.n(q),D=n(20),L=n.n(D),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(r||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(j.jsx)("span",{className:L.a.spanClassName,children:a})]})};var X=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),l=o[0],d=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:J.a.column,children:[Object(j.jsx)(P,{value:n,onChangeText:a,onEnter:s,error:c}),Object(j.jsx)(P,{className:J.a.blue}),Object(j.jsx)(y,{children:"default"}),Object(j.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(y,{disabled:!0,children:"disabled"}),Object(j.jsx)(R,{checked:l,onChangeChecked:d,children:"some text "}),Object(j.jsx)(R,{checked:l,onChange:function(e){return d(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var Y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)(B,{}),Object(j.jsx)(K,{}),Object(j.jsx)(X,{})]})},Z="/pre-junior";var Q=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(d.a,{to:Z})}}),Object(j.jsx)(d.b,{path:Z,render:function(){return Object(j.jsx)(Y,{})}}),"// add routes",Object(j.jsx)(d.b,{render:function(){return Object(j.jsx)(u,{})}})]})})},V=n(17);var $=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(V.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(Q,{})]})})};var ee=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)($,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={someClass:"Affairs_someClass__oTKDC",content:"Affairs_content__2Iqp7",contentItemName:"Affairs_contentItemName__1gy80",contentItemBtn:"Affairs_contentItemBtn__1ct9S",filterBtn:"Affairs_filterBtn__26-ON",low:"Affairs_low__dv2jJ",middle:"Affairs_middle__1Iac4",high:"Affairs_high__psPQ4"}},7:function(e,t,n){e.exports={messageWrapper:"Message_messageWrapper__ep3sn",ava:"Message_ava__15K34",messageContainer:"Message_messageContainer__1Uwvp",triangle:"Message_triangle__YAD9j",userName:"Message_userName__EHqiM",message:"Message_message__27n1C",time:"Message_time__2FmzD"}}},[[45,1,2]]]);
//# sourceMappingURL=main.6dcb48d1.chunk.js.map