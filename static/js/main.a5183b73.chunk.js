(this.webpackJsonppersonalproject=this.webpackJsonppersonalproject||[]).push([[0],{116:function(e,t){},212:function(e,t,s){},217:function(e,t){},218:function(e,t){},219:function(e,t,s){},220:function(e,t,s){},222:function(e,t,s){},223:function(e,t,s){},291:function(e,t){},790:function(e,t){},792:function(e,t){},801:function(e,t){},803:function(e,t){},830:function(e,t){},832:function(e,t){},833:function(e,t){},838:function(e,t){},840:function(e,t){},846:function(e,t){},848:function(e,t){},867:function(e,t){},879:function(e,t){},882:function(e,t){},922:function(e,t,s){},923:function(e,t,s){},924:function(e,t,s){"use strict";s.r(t);var n=s(8),c=s.n(n),a=s(207),o=s.n(a),r=(s(212),s(9)),l=s(7),i=function(e){var t=e.label,s=e.setter,n=e.set;return Object(l.jsxs)("div",{className:"CheckBox",children:[Object(l.jsxs)("label",{for:"checkbox",children:[" ",t," "]}),n?Object(l.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:function(){s(!n)},checked:!0}):Object(l.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:function(){s(!n)}})]})},b=function(e){e.limitLength;var t=e.setter,s=e.messageContents;return Object(l.jsxs)("div",{className:"MessageBox",children:[Object(l.jsx)("label",{for:"message",children:" Message: "}),Object(l.jsx)("input",{type:"text",value:s,id:"message",name:"message",onChange:function(e){return t(e.target.value)}})]})},j=s(113),u=function(e){var t=e.setter;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:function(e){!function(e){new Promise((function(t,s){var n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(e){var s=e.target.result,n=j.read(s,{type:"buffer"}),c=n.SheetNames[0],a=n.Sheets[c],o=j.utils.sheet_to_json(a);t(o)},n.onerror=function(e){s(e)}})).then((function(e){for(var s=[],n=0;n<e.length;n++)s.push({FirstName:e[n].FirstName,LastName:e[n].LastName,PrimaryPhone:e[n].CellPhone});t(s)}))}(e.target.files[0])}})})},d=(s(219),s(220),function(e){var t=e.user,s=e.setUser,c=e.setDisplayState,a=e.setIsListSplit,o=Object(n.useState)(!0),b=Object(r.a)(o,2),j=b[0],u=b[1];Object(n.useEffect)((function(){console.log(localStorage.getItem("progchamp"));var e=JSON.parse(localStorage.getItem("progchamp"));null!==e&&""!==e&&d(e.username)}),[]);var d=function(e){switch(function(e,t){if(j){var s={username:e};localStorage.setItem("progchamp",JSON.stringify(s))}else localStorage.removeItem("progchamp")}(e),e){case"justin":return s("justin"),c(999),void a(!1);case"eric":return s("eric"),c(999),void a(!1);case"omar":return s("omar"),c(999),void a(!1);default:return void s("")}};return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"loginPage",children:[Object(l.jsxs)("div",{className:"usernameInput",children:[Object(l.jsx)("label",{children:" Username: "}),Object(l.jsx)("input",{onChange:function(e){return s(e.target.value)}})]}),Object(l.jsx)(i,{label:"Stay Logged in: ",setter:u,set:j}),Object(l.jsx)("button",{onClick:function(){d(t)},children:" Submit "})]})})}),g=s(35),O=s.n(g),m=s(61),f=(s(222),function(e){var t=e.setInputImage;return Object(l.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){t(e),console.log("E")}})}),h=function(e){var t=e.longMessage,s=e.setMessageContents,c=(e.setLongMessage,e.displayImageInput),a=e.setImageURL,o=(e.imageURL,e.setDisplayImageInput),j=e.messageContents,u=e.setDisplayState,d=Object(n.useState)(0),g=Object(r.a)(d,2),h=g[0],p=(g[1],JSON.parse(localStorage.getItem("currentJob"))),S="message"+(null===p||void 0===p?void 0:p.selectedJob),x=Object(n.useState)(!0),v=Object(r.a)(x,2),N=v[0],J=v[1],I=Object(n.useState)(0),y=Object(r.a)(I,2),k=y[0],L=y[1],P=Object(n.useState)(""),C=Object(r.a)(P,2),D=C[0],M=C[1],U=function(e){console.log("called, e:",e);var t=e.target.files[0];if(t&&t.size<5e6){var s=new FormData;s.append("image",t),fetch("https://api.imgur.com/3/image",{method:"POST",headers:{Authorization:"Client-ID a3aefde99235d33",Accept:"application/json"},body:s}).then((function(e){return e.json()})).then((function(t){return e.preventDefault(),console.log("response: ",t),console.log("response.data.link: ",t.data.link),t.data.link}))}else console.error("oversized file")};Object(n.useEffect)((function(){if(console.log("Hello World Use Effect"),null===p||""===p)J(!1);else{console.log("not broken 1");var e=JSON.parse(localStorage.getItem(S));console.log("not broken 2"),null!==e&&""!==e&&(s(e.message),""!==e.imageURL&&a(e.imageURL),L(1),setTimeout((function(){return L(0)}),1)),console.log("Refresh: ",k)}}),[]);var w=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={message:j,imageURL:""},""===D||null===D){e.next=5;break}return e.next=4,U(D).then((function(e){t.imageURL=e}));case 4:console.log("EA SPORTS");case 5:localStorage.setItem(S,JSON.stringify(t)),u(999);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===k?Object(l.jsx)("div",{className:"page",children:N?Object(l.jsxs)("div",{className:"MessageInputs",children:[Object(l.jsx)(b,{limitLength:t,setter:s,messageContents:j}),c?Object(l.jsx)(f,{setInputImage:M}):Object(l.jsx)("div",{}),Object(l.jsx)(i,{label:"Send Image",setter:o,set:c}),Object(l.jsx)("button",{onClick:function(){return w()},children:" Save "}),1===h?Object(l.jsx)("h3",{children:" Message Saved"}):Object(l.jsx)("div",{})]}):Object(l.jsx)("h3",{children:" No Job is Selected"})}):Object(l.jsx)("div",{})},p=(s(223),function(e){var t=e.name,s=e.setDisplay;return Object(l.jsxs)("div",{className:"HeaderBar",children:[Object(l.jsxs)("div",{className:"selectable",children:[Object(l.jsx)("button",{onClick:function(){s(5)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Select Job"})})}),Object(l.jsx)("button",{onClick:function(){s(2)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Edit Message"})})}),Object(l.jsx)("button",{onClick:function(){s(6)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Upload Spreadsheet"})})}),Object(l.jsx)("button",{onClick:function(){return s(3)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Send Messages"})})}),Object(l.jsx)("button",{onClick:function(){s(7)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Job Settings"})})}),Object(l.jsx)("button",{onClick:function(){return s(8)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Delete Job"})})}),Object(l.jsx)("button",{children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:"Manage Users"})})})]}),Object(l.jsx)("button",{onClick:function(){return localStorage.removeItem("progchamp"),void s(1)},children:Object(l.jsx)("div",{className:"buttonBackground",children:Object(l.jsx)("h3",{children:t})})})]})}),S=s(62),x=s.n(S),v=function(e){s(242).config();var t=e.list,c=(e.displayLoaded,e.setDisplayState),a=(e.messageList,e.setList),o=Object(n.useState)(0),i=Object(r.a)(o,2),b=i[0],j=i[1],u=Object(n.useState)(!1),d=Object(r.a)(u,2),g=d[0],f=d[1],h=Object(n.useState)(!1),p=Object(r.a)(h,2),S=p[0],v=p[1],N=Object(n.useState)(""),J=Object(r.a)(N,2),I=(J[0],J[1],s(244)),y=(new(s(247))("AC328815b6f17c750d80bedcc36bb5f3ce","2e15f6eb3b70df9e70eb4dd957975ee5"),JSON.parse(localStorage.getItem("currentJob"))),k="",L="",P="";null!==y&&""!==y&&(k=JSON.parse(localStorage.getItem("settings"+y.selectedJob)),L=JSON.parse(localStorage.getItem("message"+y.selectedJob)),P=JSON.parse(localStorage.getItem(y.selectedJob)));var C=Object(n.useState)(0),D=Object(r.a)(C,2),M=D[0],U=D[1],w=Object(n.useState)(0),B=Object(r.a)(w,2),R=(B[0],B[1],Object(n.useState)([])),A=Object(r.a)(R,2),F=A[0],E=A[1],K=Object(n.useState)(!0),T=Object(r.a)(K,2),H=T[0],W=T[1],z=Object(n.useState)(0),V=Object(r.a)(z,2),Y=(V[0],V[1],Object(n.useState)("")),_=Object(r.a)(Y,2);_[0],_[1];console.log(k);var X=Object(n.useState)(!1),q=Object(r.a)(X,2),G=q[0],Q=q[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("messagingList"));if(""!==e&&null!==e);else if(y){for(var t=[],s=0;s<k.assignedUsers;s++)t.push(s);E(t)}else W(!1)}),[]);var Z=function(e,t){return{start:0===t?0:P.length*t/e+1,end:P.length*(t+1)/e}},$=function(){var e=Object(m.a)(O.a.mark((function e(s,n){var o,r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("entered"),o=!1,0,0!==n){e.next=5;break}return e.abrupt("return");case 5:if(1!==t.PersonsList.length){e.next=11;break}if(console.log("one person left: checking"),!G){e.next=10;break}return Q(!1),e.abrupt("return");case 10:Q(!0);case 11:if(!s){e.next=28;break}if(!S){e.next=16;break}v(!1),e.next=26;break;case 16:if(console.log("Remaining: ",t.PersonsList.length),console.log("+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone),""===t.imageURL){e.next=23;break}return e.next=21,x.a.post("https://api.twilio.com/2010-04-01/Accounts/AC328815b6f17c750d80bedcc36bb5f3ce/Messages.json",I.stringify({Body:L.message,MediaUrl:L.imageURL,From:"+17253739818",To:"+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone}),{auth:{username:"AC328815b6f17c750d80bedcc36bb5f3ce",password:"2e15f6eb3b70df9e70eb4dd957975ee5"}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 21:e.next=25;break;case 23:return e.next=25,x.a.post("https://api.twilio.com/2010-04-01/Accounts/AC328815b6f17c750d80bedcc36bb5f3ce/Messages.json",I.stringify({Body:L.message,From:"+17253739818",To:"+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone}),{auth:{username:"AC328815b6f17c750d80bedcc36bb5f3ce",password:"2e15f6eb3b70df9e70eb4dd957975ee5"}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 25:console.log("Message sent to ",t.PersonsList[t.PersonsList.length-1].FirstName);case 26:e.next=29;break;case 28:console.log("Message not sent");case 29:1===t.PersonsList.length?(c(4),o=!0):(r=t.PersonsList,r.pop()==r&&(o=!0),l={PersonsList:r},console.log(l),a(l)),o||$(s,n-1),console.log("setting sendMessage to false"),f(!1);case 33:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return H?0===M?Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"sectionSelection",children:[Object(l.jsx)("h3",{children:" Which part would you like to work on?"}),F.map((function(e){return Object(l.jsxs)("button",{onClick:function(){return function(e){var s=Z(k.assignedUsers,e);console.log(s),a({PersonsList:P.slice(s.start,s.end+1)}),setTimeout((function(){console.log(t),v(!1),U(1)}),500)}(e)},children:[" ",e," "]})}))]})}):null!==t?Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"SendMessage",children:[Object(l.jsx)("h2",{children:" Press page down to skip sending a message to the listed user. "}),Object(l.jsxs)("h2",{children:[" Would you like to message ",t.PersonsList[t.PersonsList.length-1].FirstName," ",t.PersonsList[t.PersonsList.length-1].LastName," ",k.messagesPerKeyPress>1?" and "+JSON.stringify(k.messagesPerKeyPress-1)+" more":null,"?"]}),Object(l.jsx)("button",{onClick:function(){(!g||b>=1)&&(console.log("setting sendMessage to true"),j(0),f(!0),$(!0,k.messagesPerKeyPress))},children:" Yes "}),Object(l.jsx)("button",{onClick:function(){(!g||b>=1)&&(j(0),console.log("setting sendMessage to true"),f(!0),$(!1,k.messagesPerKeyPress))},children:" No "}),Object(l.jsx)("input",{onKeyDown:function(e){console.log("Hello World")}}),Object(l.jsx)("button",{onClick:function(){localStorage.setItem("messagingList",JSON.stringify(t))},children:" Save "})]})}):Object(l.jsx)("div",{}):Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("h3",{children:" No job is selected "})]})},N=(s(922),function(e){var t=e.setDisplayState,s=JSON.parse(localStorage.getItem("jobInfo")),c=Object(n.useState)(!1),a=Object(r.a)(c,2),o=a[0],i=a[1],b=Object(n.useState)(""),j=Object(r.a)(b,2),u=j[0],d=j[1];return console.log("availableJobs: ",s),Object(l.jsx)("div",{className:"SelectJob",children:null!==s?Object(l.jsxs)("div",{className:"JobAvailable",children:[Object(l.jsxs)("div",{className:"Selection",children:[Object(l.jsx)("label",{for:"Job",children:" Selected Job: "}),Object(l.jsxs)("select",{name:"Job",id:"Job",onChange:function(e){i(!1),d(e.target.value)},children:[Object(l.jsx)("option",{value:"",defaultValue:!0}),s.Jobs.map((function(e,t){return Object(l.jsxs)("option",{value:e.jobName,children:[" ",e.jobName," "]},t)}))]})]}),Object(l.jsx)("button",{onClick:function(){""!==u?(i(!1),console.log(u),localStorage.setItem("currentJob",JSON.stringify({selectedJob:u})),t(999)):i(!0)},children:" Save"}),o?Object(l.jsx)("div",{className:"ErrorMessageSelectJob",children:"No Job Is Selected"}):null]}):Object(l.jsx)("div",{children:" No jobs available "})})}),J=function(e){var t=Object(n.useState)(""),s=Object(r.a)(t,2),c=s[0],a=s[1],o=Object(n.useState)(""),i=Object(r.a)(o,2),b=i[0],j=i[1],d=Object(n.useState)(!1),g=Object(r.a)(d,2),O=g[0],m=g[1],f=Object(n.useState)(!1),h=Object(r.a)(f,2),p=h[0],S=h[1],x=e.setDisplayState;return Object(l.jsxs)("div",{className:"UploadeSpreadsheet",children:[Object(l.jsx)("h3",{children:" Spreadsheet Upload Specs: "}),Object(l.jsxs)("div",{className:"XLSUpsload",children:[Object(l.jsx)("label",{children:" Select a Spreadsheet: "}),Object(l.jsx)(u,{setter:a})]}),Object(l.jsxs)("div",{className:"JobNameSelect",children:[Object(l.jsx)("label",{for:"JobNameSelection",children:" Select Job Name: "}),Object(l.jsx)("input",{id:"JobNameSelection",onChange:function(e){return j(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return function(){if(S(!1),""!==b)if(null===JSON.parse(localStorage.getItem(b)))if(m(!1),null!==c&&""!==c){var e=JSON.parse(localStorage.getItem("jobInfo"));null===e&&(e={Jobs:[]}),e.Jobs.push({jobName:b}),localStorage.setItem(b,JSON.stringify(c)),localStorage.setItem("jobInfo",JSON.stringify(e)),localStorage.setItem("settings"+b,JSON.stringify({messagesPerKeyPress:1,assignedUsers:3,userList:["eric","justin","omar"]})),x(999)}else S(!0);else m(!0);else m(!0)}()},children:" Upload "}),O?Object(l.jsx)("div",{className:"errorMessage",children:"Name is not permitted"}):null,p?Object(l.jsx)("div",{className:"errorMessage",children:"No spreadsheet has been uploaded"}):null]})},I=function(e){var t=e.setDisplayState,s=Object(n.useState)(0),c=Object(r.a)(s,2),a=c[0],o=c[1],i=Object(n.useState)(0),b=Object(r.a)(i,2),j=b[0],u=b[1],d=Object(n.useState)(!0),g=Object(r.a)(d,2),O=g[0],m=g[1],f=Object(n.useState)({}),h=Object(r.a)(f,2),p=(h[0],h[1]),S="";Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("currentJob"));null===e||""===e?m(!1):(S=JSON.parse(localStorage.getItem("settings"+e.selectedJob)),p(S),o(S.messagesPerKeyPress),u(S.assignedUsers))}),[]);return O?Object(l.jsxs)("div",{className:"jobSettingsPage",children:[Object(l.jsxs)("div",{className:"inputsPerPress",children:[Object(l.jsx)("label",{children:" Messages sent per press: "}),Object(l.jsx)("input",{value:a,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"workers",children:[Object(l.jsx)("label",{children:" Number of users working on selected job:"}),Object(l.jsx)("input",{value:j,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("currentJob"));(S=JSON.parse(localStorage.getItem("settings"+e.selectedJob))).messagesPerKeyPress=a,S.assignedUsers=j,localStorage.setItem("settings"+e.selectedJob,JSON.stringify(S)),t(999)}()},children:"Update"})]}):Object(l.jsx)("h3",{children:" No Job is Selected "})},y=(s(923),function(e){var t=e.setDisplayState,s=JSON.parse(localStorage.getItem("jobInfo")),c=Object(n.useState)(!1),a=Object(r.a)(c,2),o=a[0],i=a[1],b=Object(n.useState)(""),j=Object(r.a)(b,2),u=j[0],d=j[1];return console.log("availableJobs: ",s),Object(l.jsx)("div",{className:"SelectJob",children:null!==s?Object(l.jsxs)("div",{className:"JobAvailable",children:[Object(l.jsxs)("div",{className:"Selection",children:[Object(l.jsx)("label",{for:"Job",children:" Selected Job: "}),Object(l.jsxs)("select",{name:"Job",id:"Job",onChange:function(e){i(!1),d(e.target.value)},children:[Object(l.jsx)("option",{value:"",defaultValue:!0}),s.Jobs.map((function(e,t){return Object(l.jsxs)("option",{value:e.jobName,children:[" ",e.jobName," "]},t)}))]})]}),Object(l.jsx)("button",{onClick:function(){""!==u?(i(!1),console.log(u),localStorage.getItem(u)&&(null!=localStorage.getItem("currentJob")&&localStorage.removeItem("currentJob"),localStorage.removeItem("settings"+u),localStorage.removeItem("message"+u),localStorage.removeItem(u),JSON.parse(localStorage.getItem("jobInfo"))),t(999)):i(!0)},children:" Delete"}),o?Object(l.jsx)("div",{className:"ErrorMessageSelectJob",children:"No Job Is Selected"}):null]}):Object(l.jsx)("div",{children:" No jobs available "})})}),k=function(e){var t=Object(n.useState)(!1),s=Object(r.a)(t,2),c=(s[0],s[1]),a=Object(n.useState)(999),o=Object(r.a)(a,2),i=o[0],b=o[1],j=Object(n.useState)(!1),u=Object(r.a)(j,2),g=u[0],O=u[1],m=Object(n.useState)(""),f=Object(r.a)(m,2),S=f[0],x=f[1],k=Object(n.useState)(!0),L=Object(r.a)(k,2),P=L[0],C=L[1],D=Object(n.useState)(""),M=Object(r.a)(D,2),U=M[0],w=M[1],B=Object(n.useState)(""),R=Object(r.a)(B,2),A=R[0],F=R[1],E=Object(n.useState)(""),K=Object(r.a)(E,2),T=K[0],H=(K[1],Object(n.useState)(!1)),W=Object(r.a)(H,2),z=W[0],V=(W[1],Object(n.useState)(!0)),Y=Object(r.a)(V,2),_=(Y[0],Y[1],Object(n.useState)("")),X=Object(r.a)(_,2),q=X[0],G=X[1];console.log("HEY: ","Hello World");if(console.log("Displaystate: ",i),0===i);else{if(1===i)return Object(l.jsx)(d,{user:A,setUser:F,setDisplayState:b,setIsListSplit:c});if(i>=2)return Object(l.jsxs)("div",{className:"FullSiteDisplay",children:[Object(l.jsx)(p,{name:A,setDisplay:b}),2===i?Object(l.jsx)(h,{longMessage:g,setMessageContents:x,setLongMessage:O,displayImageInput:P,setImageURL:G,imageURL:q,setDisplayImageInput:C,messageContents:S,setDisplayState:b}):3===i?Object(l.jsx)(v,{list:U,displayLoaded:z,setDisplayState:b,setList:w,messageList:T}):4===i?Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"finishBox",children:[Object(l.jsx)("h2",{children:"Done sending messages"}),Object(l.jsx)("button",{onClick:function(){return localStorage.removeItem("messagingList"),void b(999)},children:" Reset "})]})}):5===i?Object(l.jsx)(N,{setDisplayState:b}):6===i?Object(l.jsx)(J,{setDisplayState:b}):7===i?Object(l.jsx)(I,{setDisplayState:b}):8===i?Object(l.jsx)(y,{setDisplayState:b}):Object(l.jsx)("div",{})]})}};var L=function(){return console.log("Hello World"),Object(l.jsx)(k,{})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,925)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),P()}},[[924,1,2]]]);
//# sourceMappingURL=main.a5183b73.chunk.js.map