(this.webpackJsonppersonalproject=this.webpackJsonppersonalproject||[]).push([[0],{116:function(e,t){},212:function(e,t,s){},217:function(e,t){},218:function(e,t){},219:function(e,t,s){},220:function(e,t,s){},222:function(e,t,s){},223:function(e,t,s){},291:function(e,t){},790:function(e,t){},792:function(e,t){},801:function(e,t){},803:function(e,t){},830:function(e,t){},832:function(e,t){},833:function(e,t){},838:function(e,t){},840:function(e,t){},846:function(e,t){},848:function(e,t){},867:function(e,t){},879:function(e,t){},882:function(e,t){},922:function(e,t,s){},923:function(e,t,s){},924:function(e,t,s){"use strict";s.r(t);var n=s(8),a=s.n(n),c=s(207),o=s.n(c),l=(s(212),s(9)),r=s(7),i=function(e){var t=e.setImageURL,s=e.imageURL;return Object(r.jsxs)("div",{className:"imageInput",children:[Object(r.jsx)("label",{for:"file",children:"Chose image URL to upload: "}),Object(r.jsx)("input",{type:"text",value:s,onChange:function(e){return t(e.target.value)}})]})},u=function(e){var t=e.label,s=e.setter,n=e.set;return Object(r.jsxs)("div",{className:"CheckBox",children:[Object(r.jsxs)("label",{for:"checkbox",children:[" ",t," "]}),n?Object(r.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:function(){s(!n)},checked:!0}):Object(r.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:function(){s(!n)}})]})},j=function(e){e.limitLength;var t=e.setter,s=e.messageContents;return Object(r.jsxs)("div",{className:"MessageBox",children:[Object(r.jsx)("label",{for:"message",children:" Message: "}),Object(r.jsx)("input",{type:"text",value:s,id:"message",name:"message",onChange:function(e){return t(e.target.value)}})]})},b=s(113),g=function(e){var t=e.setter;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:function(e){!function(e){new Promise((function(t,s){var n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(e){var s=e.target.result,n=b.read(s,{type:"buffer"}),a=n.SheetNames[0],c=n.Sheets[a],o=b.utils.sheet_to_json(c);t(o)},n.onerror=function(e){s(e)}})).then((function(e){for(var s=[],n=0;n<e.length;n++)s.push({FirstName:e[n].FirstName,LastName:e[n].LastName,PrimaryPhone:e[n].CellPhone});t(s)}))}(e.target.files[0])}})})},d=(s(219),s(220),function(e){var t=e.user,s=e.setUser,a=e.setDisplayState,c=e.setIsListSplit,o=Object(n.useState)(!0),i=Object(l.a)(o,2),j=i[0],b=i[1];Object(n.useEffect)((function(){console.log(localStorage.getItem("progchamp"));var e=JSON.parse(localStorage.getItem("progchamp"));null!==e&&""!==e&&g(e.username)}),[]);var g=function(e){switch(function(e,t){if(j){var s={username:e};localStorage.setItem("progchamp",JSON.stringify(s))}else localStorage.removeItem("progchamp")}(e),e){case"justin":return s("justin"),a(999),void c(!1);case"eric":return s("eric"),a(999),void c(!1);case"omar":return s("omar"),a(999),void c(!1);default:return void s("")}};return Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"loginPage",children:[Object(r.jsxs)("div",{className:"usernameInput",children:[Object(r.jsx)("label",{children:" Username: "}),Object(r.jsx)("input",{onChange:function(e){return s(e.target.value)}})]}),Object(r.jsx)(u,{label:"Stay Logged in: ",setter:b,set:j}),Object(r.jsx)("button",{onClick:function(){g(t)},children:" Submit "})]})})}),O=s(26),m=s.n(O),h=s(44),f=(s(222),function(e){var t=e.setInputImage;return Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){t(e),console.log("E")}})}),p=function(e){var t=e.setPreNameMessage,s=e.setPostNameMessage,n=e.preNameMessage+"Justin"+e.postNameMessage;return Object(r.jsxs)("div",{className:"PresonalizedMessageInput",children:[Object(r.jsxs)("div",{className:"PreNameText",children:[Object(r.jsx)("label",{children:" Text Before Name:"}),Object(r.jsx)("textarea",{onChange:function(e){return t(e.target.value)}})]}),Object(r.jsxs)("div",{className:"PostNameText",children:[Object(r.jsx)("label",{children:" Text After Name:"}),Object(r.jsx)("textarea",{onChange:function(e){return s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"TextPreview",children:[Object(r.jsx)("label",{children:" Text Preview:"}),Object(r.jsx)("textarea",{value:n,disabled:!0})]})]})},x=function(e){var t=e.longMessage,s=e.setMessageContents,a=(e.setLongMessage,e.displayImageInput),c=e.setImageURL,o=e.imageURL,b=e.setDisplayImageInput,g=e.messageContents,d=e.setDisplayState,O=(e.setImageUploaded,e.imageUploaded,Object(n.useState)(0)),x=Object(l.a)(O,2),S=x[0],v=(x[1],JSON.parse(localStorage.getItem("currentJob"))),N="message"+(null===v||void 0===v?void 0:v.selectedJob),I=Object(n.useState)(!0),J=Object(l.a)(I,2),k=J[0],y=J[1],L=Object(n.useState)(!0),P=Object(l.a)(L,2),C=P[0],M=P[1],U=Object(n.useState)(0),D=Object(l.a)(U,2),w=D[0],R=D[1],B=Object(n.useState)(""),A=Object(l.a)(B,2),T=A[0],F=A[1],E=Object(n.useState)(!1),H=Object(l.a)(E,2),z=H[0],K=H[1],W=Object(n.useState)(!0),Y=Object(l.a)(W,2),V=Y[0],_=Y[1],q=Object(n.useState)(""),X=Object(l.a)(q,2),G=X[0],Q=X[1],Z=Object(n.useState)(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1],se=function(){var e=Object(h.a)(m.a.mark((function e(t){var s,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("called, e:",t),s=t.target,(n=s.files[0])&&n.size<5e6?(a=new FormData,"Client-ID a3aefde99235d33",a.append("image",n),fetch("https://api.imgur.com/3/image",{method:"POST",headers:{Authorization:"Client-ID a3aefde99235d33",Accept:"application/json"},body:a}).then((function(e){return e.json()})).then((function(e){t.preventDefault(),console.log("response: ",e),console.log("response.data.link: ",e.data.link);var s=e.data.link;c(s),K(!0)}))):console.error("oversized file");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(console.log("Hello World Use Effect"),null===v||""===v)y(!1);else{console.log("not broken 1");var e=JSON.parse(localStorage.getItem(N));console.log("not broken 2"),null!==e&&""!==e&&(s(e.message),""!==e.imageURL&&c(e.imageURL),R(1),setTimeout((function(){return R(0)}),1)),console.log("Refresh: ",w)}}),[]);var ne=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={message:V?"":g,preNameMessage:V?G:"",postNameMessage:V?ee:"",personalizedMessageBool:V,imageURL:""},null!==o&&""!==o&&(t.imageURL=o),localStorage.setItem(N,JSON.stringify(t)),d(999);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===T||null===T){e.next=4;break}return e.next=3,se(T);case 3:console.log("EA SPORTS");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===w?Object(r.jsxs)("div",{className:"page",children:[k?Object(r.jsxs)("div",{className:"MessageInputs",children:[V?Object(r.jsx)(p,{setPreNameMessage:Q,setPostNameMessage:te,preNameMessage:G,postNameMessage:ee}):Object(r.jsx)(j,{limitLength:t,setter:s,messageContents:g}),a?Object(r.jsx)(i,{setImageURL:c,imageURL:o}):Object(r.jsx)("div",{}),Object(r.jsx)(u,{label:"Send Image",setter:b,set:a}),a?Object(r.jsx)(u,{label:"Upload Image",setter:M,set:C}):null,Object(r.jsx)(u,{label:"Personalized Message",setter:_,set:V}),Object(r.jsx)("button",{onClick:function(){return ne()},children:" Save "}),1===S?Object(r.jsx)("h3",{children:" Message Saved"}):Object(r.jsx)("div",{})]}):Object(r.jsx)("h3",{children:" No Job is Selected"}),C&&k?Object(r.jsxs)("div",{className:"inputUpload",children:[Object(r.jsx)(f,{setInputImage:F}),z?Object(r.jsx)("div",{children:" API Request Sent "}):null,Object(r.jsx)("button",{onClick:function(){return ae()},children:"Upload Image"})]}):null]}):Object(r.jsx)("div",{})},S=(s(223),function(e){var t=e.name,s=e.setDisplay;return Object(r.jsxs)("div",{className:"HeaderBar",children:[Object(r.jsxs)("div",{className:"selectable",children:[Object(r.jsx)("button",{onClick:function(){s(5)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Select Job"})})}),Object(r.jsx)("button",{onClick:function(){s(2)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Edit Message"})})}),Object(r.jsx)("button",{onClick:function(){s(6)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Upload Spreadsheet"})})}),Object(r.jsx)("button",{onClick:function(){return s(3)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Send Messages"})})}),Object(r.jsx)("button",{onClick:function(){s(7)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Job Settings"})})}),Object(r.jsx)("button",{onClick:function(){return s(8)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Delete Job"})})}),Object(r.jsx)("button",{children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Clean List"})})})]}),Object(r.jsx)("button",{onClick:function(){return localStorage.removeItem("progchamp"),void s(1)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:t})})})]})}),v=s(62),N=s.n(v),I=function(e){s(242).config();var t=e.list,a=(e.displayLoaded,e.setDisplayState),c=(e.messageList,e.setList),o=Object(n.useState)(0),i=Object(l.a)(o,2),u=i[0],j=i[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),d=g[0],O=g[1],f=Object(n.useState)(!1),p=Object(l.a)(f,2),x=p[0],S=p[1],v=Object(n.useState)(""),I=Object(l.a)(v,2),J=(I[0],I[1],s(244)),k=s(247),y=localStorage.getItem("accountSID"),L=localStorage.getItem("accountAuthToken");null!==y&&null!==L&&new k(y,L);var P=JSON.parse(localStorage.getItem("currentJob")),C="",M="",U="";null!==P&&""!==P&&(C=JSON.parse(localStorage.getItem("settings"+P.selectedJob)),M=JSON.parse(localStorage.getItem("message"+P.selectedJob)),U=JSON.parse(localStorage.getItem(P.selectedJob)));var D=Object(n.useState)(0),w=Object(l.a)(D,2),R=w[0],B=w[1],A=Object(n.useState)(0),T=Object(l.a)(A,2),F=(T[0],T[1],Object(n.useState)([])),E=Object(l.a)(F,2),H=E[0],z=E[1],K=Object(n.useState)(!0),W=Object(l.a)(K,2),Y=W[0],V=W[1],_=Object(n.useState)(0),q=Object(l.a)(_,2),X=(q[0],q[1],Object(n.useState)("")),G=Object(l.a)(X,2);G[0],G[1];console.log(C);var Q=Object(n.useState)(!1),Z=Object(l.a)(Q,2),$=Z[0],ee=Z[1],te=Object(n.useState)(["+17255022509","+17252231054"]),se=Object(l.a)(te,2),ne=se[0],ae=se[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("messagingList"));if(""!==e&&null!==e);else if(P){for(var t=[],s=0;s<C.assignedUsers;s++)t.push(s);z(t)}else V(!1)}),[]),Object(n.useEffect)((function(){null!==y&&""!==y&&null!==L&&""!==L||V(!1)}));var ce=function(e,t){return{start:0===t?0:U.length*t/e+1,end:U.length*(t+1)/e}},oe=function(){var e=Object(h.a)(m.a.mark((function e(s,n){var o,l,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("entered"),o=!1,0,0!==n){e.next=5;break}return e.abrupt("return");case 5:if(1!==t.PersonsList.length){e.next=11;break}if(console.log("one person left: checking"),!$){e.next=10;break}return ee(!1),e.abrupt("return");case 10:ee(!0);case 11:if(!s){e.next=30;break}if(!x){e.next=16;break}S(!1),e.next=28;break;case 16:if(console.log("Remaining: ",t.PersonsList.length),l=ne[t.PersonsList.length%2],console.log("+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone),console.log("image url: ",t.imageURL),""===t.imageURL||null===t.imageURL||void 0===t.imageURL){e.next=25;break}return e.next=23,N.a.post("https://api.twilio.com/2010-04-01/Accounts/"+y+"/Messages.json",J.stringify({Body:M.personalizedMessageBool?M.preNameMessage+t.PersonsList[t.PersonsList.length-1].FirstName+M.postNameMessage:M.message,MediaUrl:M.imageURL,From:l,To:"+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone}),{auth:{username:y,password:L}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 23:e.next=27;break;case 25:return e.next=27,N.a.post("https://api.twilio.com/2010-04-01/Accounts/"+y+"/Messages.json",J.stringify({Body:M.personalizedMessageBool?M.preNameMessage+t.PersonsList[t.PersonsList.length-1].FirstName+M.postNameMessage:M.message,From:l,To:"+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone}),{auth:{username:y,password:L}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 27:console.log("Message sent to ",t.PersonsList[t.PersonsList.length-1].FirstName);case 28:e.next=31;break;case 30:console.log("Message not sent");case 31:1===t.PersonsList.length?(a(4),o=!0):(r=t.PersonsList,r.pop()==r&&(o=!0),i={PersonsList:r},console.log(i),c(i)),o||oe(s,n-1),console.log("setting sendMessage to false"),O(!1);case 35:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return Y?0===R?Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"sectionSelection",children:[Object(r.jsx)("h3",{children:" Which part would you like to work on?"}),H.map((function(e){return Object(r.jsxs)("button",{onClick:function(){return function(e){var s=ce(C.assignedUsers,e);console.log(s),c({PersonsList:U.slice(s.start,s.end+1)}),setTimeout((function(){console.log(t),S(!1),B(1)}),500)}(e)},children:[" ",e," "]})})),Object(r.jsxs)("select",{name:"UserList",onChange:function(e){var t;"Nash"===(t=e.target.value)?ae(["+17257264027","+17252286612"]):"Hansen"===t?ae(["+17252286914","+17257264159"]):"Yurek"===t?ae(["+17252286016","+17252286076"]):"Haden"===t&&ae(["+17255022509","+17252231054"])},children:[Object(r.jsx)("option",{value:""}),Object(r.jsx)("option",{value:"Haden",children:"Haden"}),Object(r.jsx)("option",{value:"Nash",children:"Nash"})]})]})}):null!==t?Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"SendMessage",children:[Object(r.jsx)("h2",{children:" Press page down to skip sending a message to the listed user. "}),Object(r.jsxs)("h2",{children:[" Would you like to message ",t.PersonsList[t.PersonsList.length-1].FirstName," ",t.PersonsList[t.PersonsList.length-1].LastName," ",C.messagesPerKeyPress>1?" and "+JSON.stringify(C.messagesPerKeyPress-1)+" more":null,"?"]}),Object(r.jsx)("button",{onClick:function(){(!d||u>=1)&&(console.log("setting sendMessage to true"),j(0),O(!0),oe(!0,C.messagesPerKeyPress))},children:" Yes "}),Object(r.jsx)("button",{onClick:function(){(!d||u>=1)&&(j(0),console.log("setting sendMessage to true"),O(!0),oe(!1,C.messagesPerKeyPress))},children:" No "}),Object(r.jsx)("input",{onKeyDown:function(e){console.log("Hello World")}}),Object(r.jsx)("button",{onClick:function(){localStorage.setItem("messagingList",JSON.stringify(t))},children:" Save "})]})}):Object(r.jsx)("div",{}):Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h3",{children:" No job is selected or no SID/Auth has been saved "})]})},J=(s(922),function(e){var t=e.setDisplayState,s=JSON.parse(localStorage.getItem("jobInfo")),a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),b=j[0],g=j[1];return console.log("availableJobs: ",s),Object(r.jsx)("div",{className:"SelectJob",children:null!==s?Object(r.jsxs)("div",{className:"JobAvailable",children:[Object(r.jsxs)("div",{className:"Selection",children:[Object(r.jsx)("label",{for:"Job",children:" Selected Job: "}),Object(r.jsxs)("select",{name:"Job",id:"Job",onChange:function(e){i(!1),g(e.target.value)},children:[Object(r.jsx)("option",{value:"",defaultValue:!0}),s.Jobs.map((function(e,t){return Object(r.jsxs)("option",{value:e.jobName,children:[" ",e.jobName," "]},t)}))]})]}),Object(r.jsx)("button",{onClick:function(){""!==b?(i(!1),console.log(b),localStorage.setItem("currentJob",JSON.stringify({selectedJob:b})),t(999)):i(!0)},children:" Save"}),o?Object(r.jsx)("div",{className:"ErrorMessageSelectJob",children:"No Job Is Selected"}):null]}):Object(r.jsx)("div",{children:" No jobs available "})})}),k=function(e){var t=Object(n.useState)(""),s=Object(l.a)(t,2),a=s[0],c=s[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),O=d[0],m=d[1],h=Object(n.useState)(!1),f=Object(l.a)(h,2),p=f[0],x=f[1],S=e.setDisplayState;return Object(r.jsxs)("div",{className:"UploadeSpreadsheet",children:[Object(r.jsx)("h3",{children:" Spreadsheet Upload Specs: "}),Object(r.jsxs)("div",{className:"XLSUpsload",children:[Object(r.jsx)("label",{children:" Select a Spreadsheet: "}),Object(r.jsx)(g,{setter:c})]}),Object(r.jsxs)("div",{className:"JobNameSelect",children:[Object(r.jsx)("label",{for:"JobNameSelection",children:" Select Job Name: "}),Object(r.jsx)("input",{id:"JobNameSelection",onChange:function(e){return j(e.target.value)}})]}),Object(r.jsx)("button",{onClick:function(){return function(){if(x(!1),""!==u)if(null===JSON.parse(localStorage.getItem(u)))if(m(!1),null!==a&&""!==a){var e=JSON.parse(localStorage.getItem("jobInfo"));null===e&&(e={Jobs:[]}),e.Jobs.push({jobName:u}),localStorage.setItem(u,JSON.stringify(a)),localStorage.setItem("jobInfo",JSON.stringify(e)),localStorage.setItem("settings"+u,JSON.stringify({messagesPerKeyPress:1,assignedUsers:3,userList:["eric","justin","omar"]})),S(999)}else x(!0);else m(!0);else m(!0)}()},children:" Upload "}),O?Object(r.jsx)("div",{className:"errorMessage",children:"Name is not permitted"}):null,p?Object(r.jsx)("div",{className:"errorMessage",children:"No spreadsheet has been uploaded"}):null]})},y=function(e){var t=e.setDisplayState,s=Object(n.useState)(0),a=Object(l.a)(s,2),c=a[0],o=a[1],i=Object(n.useState)(0),u=Object(l.a)(i,2),j=u[0],b=u[1],g=Object(n.useState)(!0),d=Object(l.a)(g,2),O=d[0],m=d[1],h=Object(n.useState)({}),f=Object(l.a)(h,2),p=(f[0],f[1]),x=Object(n.useState)(""),S=Object(l.a)(x,2),v=S[0],N=S[1],I=Object(n.useState)(""),J=Object(l.a)(I,2),k=J[0],y=J[1],L="";Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("currentJob"));null===e||""===e?m(!1):(L=JSON.parse(localStorage.getItem("settings"+e.selectedJob)),p(L),o(L.messagesPerKeyPress),b(L.assignedUsers))}),[]);return O?Object(r.jsxs)("div",{className:"jobSettingsPage",children:[Object(r.jsxs)("div",{className:"inputsPerPress",children:[Object(r.jsx)("label",{children:" Messages sent per press: "}),Object(r.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"workers",children:[Object(r.jsx)("label",{children:" Number of users working on selected job:"}),Object(r.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)}})]}),Object(r.jsxs)("div",{className:"SID Input",children:[Object(r.jsx)("label",{children:" Account SID:"}),Object(r.jsx)("input",{value:v,onChange:function(e){return N(e.target.value)}})]}),Object(r.jsxs)("div",{className:"Auth Token Input",children:[Object(r.jsx)("label",{children:" Account Auth Token:"}),Object(r.jsx)("input",{value:k,onChange:function(e){return y(e.target.value)}})]}),Object(r.jsx)("button",{onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("currentJob"));(L=JSON.parse(localStorage.getItem("settings"+e.selectedJob))).messagesPerKeyPress=c,L.assignedUsers=j,localStorage.setItem("settings"+e.selectedJob,JSON.stringify(L)),""!==v&&null!==v&&localStorage.setItem("accountSID",v),""!==k&&null!==k&&localStorage.setItem("accountAuthToken",k),t(999)}()},children:"Update"})]}):Object(r.jsx)("h3",{children:" No Job is Selected "})},L=(s(923),function(e){var t=e.setDisplayState,s=JSON.parse(localStorage.getItem("jobInfo")),a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),b=j[0],g=j[1];return console.log("availableJobs: ",s),Object(r.jsx)("div",{className:"SelectJob",children:null!==s?Object(r.jsxs)("div",{className:"JobAvailable",children:[Object(r.jsxs)("div",{className:"Selection",children:[Object(r.jsx)("label",{for:"Job",children:" Selected Job: "}),Object(r.jsxs)("select",{name:"Job",id:"Job",onChange:function(e){i(!1),g(e.target.value)},children:[Object(r.jsx)("option",{value:"",defaultValue:!0}),s.Jobs.map((function(e,t){return Object(r.jsxs)("option",{value:e.jobName,children:[" ",e.jobName," "]},t)}))]})]}),Object(r.jsx)("button",{onClick:function(){""!==b?(i(!1),console.log(b),localStorage.getItem(b)&&(null!=localStorage.getItem("currentJob")&&localStorage.removeItem("currentJob"),localStorage.removeItem("settings"+b),localStorage.removeItem("message"+b),localStorage.removeItem(b),JSON.parse(localStorage.getItem("jobInfo"))),t(999)):i(!0)},children:" Delete"}),o?Object(r.jsx)("div",{className:"ErrorMessageSelectJob",children:"No Job Is Selected"}):null]}):Object(r.jsx)("div",{children:" No jobs available "})})}),P=function(e){var t=Object(n.useState)(!1),s=Object(l.a)(t,2),a=(s[0],s[1]),c=Object(n.useState)(999),o=Object(l.a)(c,2),i=o[0],u=o[1],j=Object(n.useState)(!1),b=Object(l.a)(j,2),g=b[0],O=b[1],m=Object(n.useState)(""),h=Object(l.a)(m,2),f=h[0],p=h[1],v=Object(n.useState)(!0),N=Object(l.a)(v,2),P=N[0],C=N[1],M=Object(n.useState)(""),U=Object(l.a)(M,2),D=U[0],w=U[1],R=Object(n.useState)(""),B=Object(l.a)(R,2),A=B[0],T=B[1],F=Object(n.useState)(""),E=Object(l.a)(F,2),H=E[0],z=(E[1],Object(n.useState)(!1)),K=Object(l.a)(z,2),W=K[0],Y=(K[1],Object(n.useState)(!0)),V=Object(l.a)(Y,2),_=(V[0],V[1],Object(n.useState)("")),q=Object(l.a)(_,2),X=q[0],G=q[1],Q=Object(n.useState)(!1),Z=Object(l.a)(Q,2),$=Z[0],ee=Z[1];console.log("HEY: ","Hello World");if(Object(n.useEffect)((function(){console.log("Updating saved message");var e=JSON.parse(localStorage.getItem("currentJob")),t="message"+(null===e||void 0===e?void 0:e.selectedJob),s=localStorage.getItem("keyName");null!==s?((s=JSON.parse(s)).imageURL=X,localStorage.setItem(t,JSON.stringify(s))):localStorage.setItem(e+"imageURL",X)}),$),console.log("Displaystate: ",i),0===i);else{if(1===i)return Object(r.jsx)(d,{user:A,setUser:T,setDisplayState:u,setIsListSplit:a});if(i>=2)return Object(r.jsxs)("div",{className:"FullSiteDisplay",children:[Object(r.jsx)(S,{name:A,setDisplay:u}),2===i?Object(r.jsx)(x,{longMessage:g,setMessageContents:p,setLongMessage:O,displayImageInput:P,setImageURL:G,imageURL:X,setDisplayImageInput:C,messageContents:f,setDisplayState:u,setImageUploaded:ee,imageUploaded:$}):3===i?Object(r.jsx)(I,{list:D,displayLoaded:W,setDisplayState:u,setList:w,messageList:H}):4===i?Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"finishBox",children:[Object(r.jsx)("h2",{children:"Done sending messages"}),Object(r.jsx)("button",{onClick:function(){return localStorage.removeItem("messagingList"),void u(999)},children:" Reset "})]})}):5===i?Object(r.jsx)(J,{setDisplayState:u}):6===i?Object(r.jsx)(k,{setDisplayState:u}):7===i?Object(r.jsx)(y,{setDisplayState:u}):8===i?Object(r.jsx)(L,{setDisplayState:u}):Object(r.jsx)("div",{})]})}};var C=function(){return console.log("Hello World"),Object(r.jsx)(P,{})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,925)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),M()}},[[924,1,2]]]);
//# sourceMappingURL=main.51d9d41b.chunk.js.map