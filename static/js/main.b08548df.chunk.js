(this.webpackJsonppersonalproject=this.webpackJsonppersonalproject||[]).push([[0],{116:function(e,t){},212:function(e,t,s){},217:function(e,t){},218:function(e,t){},219:function(e,t,s){},220:function(e,t,s){},222:function(e,t,s){},223:function(e,t,s){},291:function(e,t){},790:function(e,t){},792:function(e,t){},801:function(e,t){},803:function(e,t){},830:function(e,t){},832:function(e,t){},833:function(e,t){},838:function(e,t){},840:function(e,t){},846:function(e,t){},848:function(e,t){},867:function(e,t){},879:function(e,t){},882:function(e,t){},922:function(e,t,s){},923:function(e,t,s){},924:function(e,t,s){"use strict";s.r(t);var n=s(8),a=s.n(n),c=s(207),o=s.n(c),l=(s(212),s(9)),r=s(7),i=function(e){var t=e.setImageURL,s=e.imageURL;return Object(r.jsxs)("div",{className:"imageInput",children:[Object(r.jsx)("label",{for:"file",children:"Chose image URL to upload: "}),Object(r.jsx)("input",{type:"text",value:s,onChange:function(e){return t(e.target.value)}})]})},u=function(e){var t=e.label,s=e.setter,n=e.set;return Object(r.jsxs)("div",{className:"CheckBox",children:[Object(r.jsxs)("label",{for:"checkbox",children:[" ",t," "]}),n?Object(r.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:function(){s(!n)},checked:!0}):Object(r.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:function(){s(!n)}})]})},j=function(e){e.limitLength;var t=e.setter,s=e.messageContents;return Object(r.jsxs)("div",{className:"MessageBox",children:[Object(r.jsx)("label",{for:"message",children:" Message: "}),Object(r.jsx)("textarea",{value:s,id:"message",name:"message",onChange:function(e){return t(e.target.value)}})]})},b=s(113),d=function(e){var t=e.setter;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:function(e){!function(e){new Promise((function(t,s){var n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(e){var s=e.target.result,n=b.read(s,{type:"buffer"}),a=n.SheetNames[0],c=n.Sheets[a],o=b.utils.sheet_to_json(c);t(o)},n.onerror=function(e){s(e)}})).then((function(e){for(var s=[],n=0;n<e.length;n++)s.push({FirstName:e[n].FirstName,LastName:e[n].LastName,PrimaryPhone:e[n].CellPhone});t(s)}))}(e.target.files[0])}})})},g=(s(219),s(220),function(e){var t=e.user,s=e.setUser,a=e.setDisplayState,c=e.setIsListSplit,o=Object(n.useState)(!0),i=Object(l.a)(o,2),j=i[0],b=i[1];Object(n.useEffect)((function(){console.log(localStorage.getItem("progchamp"));var e=JSON.parse(localStorage.getItem("progchamp"));null!==e&&""!==e&&d(e.username)}),[]);var d=function(e){switch(function(e,t){if(j){var s={username:e};localStorage.setItem("progchamp",JSON.stringify(s))}else localStorage.removeItem("progchamp")}(e),e){case"justin":return s("justin"),a(999),void c(!1);case"eric":return s("eric"),a(999),void c(!1);case"omar":return s("omar"),a(999),void c(!1);default:return void s("")}};return Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"loginPage",children:[Object(r.jsxs)("div",{className:"usernameInput",children:[Object(r.jsx)("label",{children:" Username: "}),Object(r.jsx)("input",{onChange:function(e){return s(e.target.value)}})]}),Object(r.jsx)(u,{label:"Stay Logged in: ",setter:b,set:j}),Object(r.jsx)("button",{onClick:function(){d(t)},children:" Submit "})]})})}),O=s(23),m=s.n(O),h=s(36),p=(s(222),function(e){var t=e.setInputImage;return Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){t(e),console.log("E")}})}),f=function(e){var t=e.setPreNameMessage,s=e.setPostNameMessage,n=e.preNameMessage+"Justin"+e.postNameMessage;return Object(r.jsxs)("div",{className:"PresonalizedMessageInput",children:[Object(r.jsxs)("div",{className:"PreNameText",children:[Object(r.jsx)("label",{children:" Text Before Name:"}),Object(r.jsx)("textarea",{onChange:function(e){return t(e.target.value)}})]}),Object(r.jsxs)("div",{className:"PostNameText",children:[Object(r.jsx)("label",{children:" Text After Name:"}),Object(r.jsx)("textarea",{onChange:function(e){return s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"TextPreview",children:[Object(r.jsx)("label",{children:" Text Preview:"}),Object(r.jsx)("textarea",{value:n,disabled:!0})]})]})},x=function(e){var t=e.longMessage,s=e.setMessageContents,a=(e.setLongMessage,e.displayImageInput),c=e.setImageURL,o=e.imageURL,b=e.setDisplayImageInput,d=e.messageContents,g=e.setDisplayState,O=(e.setImageUploaded,e.imageUploaded,Object(n.useState)(0)),x=Object(l.a)(O,2),v=x[0],S=(x[1],JSON.parse(localStorage.getItem("currentJob"))),N="message"+(null===S||void 0===S?void 0:S.selectedJob),I=Object(n.useState)(!0),J=Object(l.a)(I,2),L=J[0],y=J[1],k=Object(n.useState)(!0),P=Object(l.a)(k,2),M=P[0],C=P[1],U=Object(n.useState)(0),D=Object(l.a)(U,2),w=D[0],R=D[1],B=Object(n.useState)(""),T=Object(l.a)(B,2),A=T[0],E=T[1],F=Object(n.useState)(!1),H=Object(l.a)(F,2),K=H[0],z=H[1],W=Object(n.useState)(!0),G=Object(l.a)(W,2),Y=G[0],V=G[1],_=Object(n.useState)(""),q=Object(l.a)(_,2),X=q[0],Q=q[1],Z=Object(n.useState)(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1],se=function(){var e=Object(h.a)(m.a.mark((function e(t){var s,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("called, e:",t),s=t.target,(n=s.files[0])&&n.size<5e6?(a=new FormData,"Client-ID a3aefde99235d33",a.append("image",n),fetch("https://api.imgur.com/3/image",{method:"POST",headers:{Authorization:"Client-ID a3aefde99235d33",Accept:"application/json"},body:a}).then((function(e){return e.json()})).then((function(e){t.preventDefault(),console.log("response: ",e),console.log("response.data.link: ",e.data.link);var s=e.data.link;c(s),z(!0)}))):console.error("oversized file");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(console.log("Hello World Use Effect"),null===S||""===S)y(!1);else{console.log("not broken 1");var e=JSON.parse(localStorage.getItem(N));console.log("not broken 2"),null!==e&&""!==e&&(s(e.message),""!==e.imageURL&&c(e.imageURL),R(1),setTimeout((function(){return R(0)}),1)),console.log("Refresh: ",w)}}),[]);var ne=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={message:Y?"":d,preNameMessage:Y?X:"",postNameMessage:Y?ee:"",personalizedMessageBool:Y,imageURL:""},null!==o&&""!==o&&(t.imageURL=o),localStorage.setItem(N,JSON.stringify(t)),g(999);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===A||null===A){e.next=4;break}return e.next=3,se(A);case 3:console.log("EA SPORTS");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===w?Object(r.jsxs)("div",{className:"page",children:[L?Object(r.jsxs)("div",{className:"MessageInputs",children:[Y?Object(r.jsx)(f,{setPreNameMessage:Q,setPostNameMessage:te,preNameMessage:X,postNameMessage:ee}):Object(r.jsx)(j,{limitLength:t,setter:s,messageContents:d}),a?Object(r.jsx)(i,{setImageURL:c,imageURL:o}):Object(r.jsx)("div",{}),Object(r.jsx)(u,{label:"Send Image",setter:b,set:a}),a?Object(r.jsx)(u,{label:"Upload Image",setter:C,set:M}):null,Object(r.jsx)(u,{label:"Personalized Message",setter:V,set:Y}),Object(r.jsx)("button",{onClick:function(){return ne()},children:" Save "}),1===v?Object(r.jsx)("h3",{children:" Message Saved"}):Object(r.jsx)("div",{})]}):Object(r.jsx)("h3",{children:" No Job is Selected"}),M&&L?Object(r.jsxs)("div",{className:"inputUpload",children:[Object(r.jsx)(p,{setInputImage:E}),K?Object(r.jsx)("div",{children:" API Request Sent "}):null,Object(r.jsx)("button",{onClick:function(){return ae()},children:"Upload Image"})]}):null]}):Object(r.jsx)("div",{})},v=(s(223),function(e){var t=e.name,s=e.setDisplay;return Object(r.jsxs)("div",{className:"HeaderBar",children:[Object(r.jsxs)("div",{className:"selectable",children:[Object(r.jsx)("button",{onClick:function(){s(5)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Select Job"})})}),Object(r.jsx)("button",{onClick:function(){s(2)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Edit Message"})})}),Object(r.jsx)("button",{onClick:function(){s(6)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Upload Spreadsheet"})})}),Object(r.jsx)("button",{onClick:function(){return s(3)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Send Messages"})})}),Object(r.jsx)("button",{onClick:function(){s(7)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Job Settings"})})}),Object(r.jsx)("button",{onClick:function(){return s(8)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Delete Job"})})}),Object(r.jsx)("button",{children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:"Clean List"})})})]}),Object(r.jsx)("button",{onClick:function(){return localStorage.removeItem("progchamp"),void s(1)},children:Object(r.jsx)("div",{className:"buttonBackground",children:Object(r.jsx)("h3",{children:t})})})]})}),S=s(51),N=s.n(S),I=function(e){s(242).config();var t=e.list,a=(e.displayLoaded,e.setDisplayState),c=(e.messageList,e.setList),o=Object(n.useState)(0),i=Object(l.a)(o,2),u=i[0],j=i[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),g=d[0],O=d[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),x=f[0],v=f[1],S=Object(n.useState)(""),I=Object(l.a)(S,2),J=(I[0],I[1],Object(n.useState)("")),L=Object(l.a)(J,2),y=L[0],k=L[1],P=s(244),M=s(247),C=localStorage.getItem("accountSID"),U=localStorage.getItem("accountAuthToken");null!==C&&null!==U&&new M(C,U);var D=JSON.parse(localStorage.getItem("currentJob")),w="",R="",B="";null!==D&&""!==D&&(w=JSON.parse(localStorage.getItem("settings"+D.selectedJob)),R=JSON.parse(localStorage.getItem("message"+D.selectedJob)),B=JSON.parse(localStorage.getItem(D.selectedJob)));var T=Object(n.useState)(0),A=Object(l.a)(T,2),E=A[0],F=A[1],H=Object(n.useState)(0),K=Object(l.a)(H,2),z=(K[0],K[1],Object(n.useState)([])),W=Object(l.a)(z,2),G=W[0],Y=W[1],V=Object(n.useState)(!0),_=Object(l.a)(V,2),q=_[0],X=_[1],Q=Object(n.useState)(0),Z=Object(l.a)(Q,2),$=(Z[0],Z[1],Object(n.useState)("")),ee=Object(l.a)($,2);ee[0],ee[1];console.log(w);var te=Object(n.useState)(!1),se=Object(l.a)(te,2),ne=se[0],ae=se[1],ce=Object(n.useState)(["+17255022509","+17252231054"]),oe=Object(l.a)(ce,2),le=oe[0],re=oe[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("messagingList"));if(""!==e&&null!==e);else if(D){for(var t=[],s=0;s<w.assignedUsers;s++)t.push(s);Y(t)}else X(!1)}),[]),Object(n.useEffect)((function(){null!==C&&""!==C&&null!==U&&""!==U||X(!1)}));var ie=function(e,t){return{start:0===t?0:B.length*t/e+1,end:B.length*(t+1)/e}},ue=function(){var e=Object(h.a)(m.a.mark((function e(){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=le[t.PersonsList.length%2],""===R.imageURL||null===R.imageURL||void 0===R.imageURL){e.next=4;break}return e.next=4,N.a.post("https://api.twilio.com/2010-04-01/Accounts/"+C+"/Messages.json",P.stringify({Body:R.personalizedMessageBool?R.preNameMessage+t.PersonsList[t.PersonsList.length-1].FirstName+R.postNameMessage:R.message,MediaUrl:R.imageURL,From:s,To:y}),{auth:{username:C,password:U}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(h.a)(m.a.mark((function e(s,n){var o,l,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("entered"),o=!1,0,0!==n){e.next=5;break}return e.abrupt("return");case 5:if(1!==t.PersonsList.length){e.next=11;break}if(console.log("one person left: checking"),!ne){e.next=10;break}return ae(!1),e.abrupt("return");case 10:ae(!0);case 11:if(!s){e.next=29;break}if(!x){e.next=16;break}v(!1),e.next=27;break;case 16:if(console.log("Remaining: ",t.PersonsList.length),l=le[t.PersonsList.length%2],console.log("+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone),""===R.imageURL||null===R.imageURL||void 0===R.imageURL){e.next=24;break}return e.next=22,N.a.post("https://api.twilio.com/2010-04-01/Accounts/"+C+"/Messages.json",P.stringify({Body:R.personalizedMessageBool?R.preNameMessage+t.PersonsList[t.PersonsList.length-1].FirstName+R.postNameMessage:R.message,MediaUrl:R.imageURL,From:l,To:"+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone}),{auth:{username:C,password:U}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 22:e.next=26;break;case 24:return e.next=26,N.a.post("https://api.twilio.com/2010-04-01/Accounts/"+C+"/Messages.json",P.stringify({Body:R.personalizedMessageBool?R.preNameMessage+t.PersonsList[t.PersonsList.length-1].FirstName+R.postNameMessage:R.message,From:l,To:"+1"+t.PersonsList[t.PersonsList.length-1].PrimaryPhone}),{auth:{username:C,password:U}}).then((function(e){return console.log(e)})).catch((function(e){400!==e&&401!==e||console.log(e)}));case 26:console.log("Message sent to ",t.PersonsList[t.PersonsList.length-1].FirstName);case 27:e.next=30;break;case 29:console.log("Message not sent");case 30:1===t.PersonsList.length?(a(4),o=!0):(r=t.PersonsList,r.pop()==r&&(o=!0),i={PersonsList:r},console.log(i),c(i)),o||je(s,n-1),console.log("setting sendMessage to false"),O(!1);case 34:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return q?0===E?Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"sectionSelection",children:[Object(r.jsx)("h3",{children:" Which part would you like to work on?"}),G.map((function(e){return Object(r.jsxs)("button",{onClick:function(){return function(e){var s=ie(w.assignedUsers,e);console.log(s),c({PersonsList:B.slice(s.start,s.end+1)}),setTimeout((function(){console.log(t),v(!1),F(1)}),500)}(e)},children:[" ",e," "]})})),Object(r.jsxs)("select",{name:"UserList",onChange:function(e){var t;"Nash"===(t=e.target.value)?re(["+17257264785","+17257264395"]):"Hansen"===t?re(["+17257263083","+17257264669"]):"Yurek"===t?re(["+17257264271","+17257263481"]):"Haden"===t?re(["+17255022509","+17252231054"]):"Hafen"===t?re(["+17257263904","+17257264587"]):"Kasama"===t?re(["+17257264483","+17257263202"]):"Letizia"===t?re(["+17252667052","+17257263410"]):"Hibbetts"===t?re(["+17257263617","+17257264626"]):"Dixon"===t?re(["+17257263346","+17257263994"]):"Williams"===t?re(["+17257265006","+17257264803"]):"Beers"===t?re(["+17255299272","+17257264021"]):"DeSalvio"===t?re(["+17257264867","+17252286602"]):"Titus"===t?re(["+17752060147","+17752425888"]):"Juhl"===t?re(["+17755714017","+17755716242"]):"Jones"===t?re(["+17257264509","+17252667085"]):"Res"===t?re(["+17755216414","+17755217439"]):"Lier"===t?re(["+17257264960","+17257263042"]):"Gunnell"===t?re(["+17257264216","+17257264958"]):"Seaman"===t?re(["+17257263288","+17257264664"]):"Berkley"===t?re(["+17252204864","+17252026027"]):"Giordani"===t?re(["+17252667987","+17252667701"]):"Wood"===t?re(["+17252288384","+17254658378"]):"DeLise"===t?re(["+17257263907","+17257264377"]):"Delong"===t?re(["+17755719695","+17755719015"]):"Lucey"===t?re(["+17752454477","+17752453758"]):"Dotson"===t?re(["+17257263411","+17257264378"]):"Miller"===t?re(["+17257264973","+17257264617"]):"Grady"===t&&re(["+17257264597","+17257263881"])},children:[Object(r.jsx)("option",{value:""}),Object(r.jsx)("option",{value:"Nash",children:"Nash"}),Object(r.jsx)("option",{value:"Kasama",children:"Kasama"}),Object(r.jsx)("option",{value:"Hibbetts",children:"Hibbetts"}),Object(r.jsx)("option",{value:"Yurek",children:"Yurek"}),Object(r.jsx)("option",{value:"Williams",children:"Williams"}),Object(r.jsx)("option",{value:"Dixon",children:"Dixon"}),Object(r.jsx)("option",{value:"Hafen",children:"Hafen"}),Object(r.jsx)("option",{value:"Hansen",children:"Hansen"}),Object(r.jsx)("option",{value:"Lier",children:"Lier"}),Object(r.jsx)("option",{value:"Lucey",children:"Lucey"}),Object(r.jsx)("option",{value:"Juhl",children:"Juhl"}),Object(r.jsx)("option",{value:"DeLise",children:"DeLise"}),Object(r.jsx)("option",{value:"Delong",children:"Delong"}),Object(r.jsx)("option",{value:"Miller",children:"Miller"}),Object(r.jsx)("option",{value:"Grady",children:"Grady"})]})]})}):null!==t?Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"SendMessage",children:[Object(r.jsx)("h2",{children:" Press page down to skip sending a message to the listed user. "}),Object(r.jsxs)("h2",{children:[" Would you like to message ",t.PersonsList[t.PersonsList.length-1].FirstName," ",t.PersonsList[t.PersonsList.length-1].LastName," ",w.messagesPerKeyPress>1?" and "+JSON.stringify(w.messagesPerKeyPress-1)+" more":null,"?"]}),Object(r.jsx)("button",{onClick:function(){(!g||u>=1)&&(console.log("setting sendMessage to true"),j(0),O(!0),je(!0,w.messagesPerKeyPress))},children:" Yes "}),Object(r.jsx)("button",{onClick:function(){(!g||u>=1)&&(j(0),console.log("setting sendMessage to true"),O(!0),je(!1,w.messagesPerKeyPress))},children:" No "}),Object(r.jsx)("input",{onKeyDown:function(e){console.log("Hello World")}}),Object(r.jsx)("button",{onClick:function(){return ue()},children:" Send Test Message"}),Object(r.jsxs)("select",{onChange:function(e){var t;"Justin"===(t=e.target.value)?k("+17023353384"):"Omar"===t?k("+19405947448"):"Eric"===t&&k("+17024798615")},children:[Object(r.jsx)("option",{value:""}),Object(r.jsx)("option",{value:"Justin",children:"Justin"}),Object(r.jsx)("option",{value:"Omar",children:"Omar"}),Object(r.jsx)("option",{value:"Eric",children:"Eric"})]})]})}):Object(r.jsx)("div",{}):Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h3",{children:" No job is selected or no SID/Auth has been saved "})]})},J=(s(922),function(e){var t=e.setDisplayState,s=JSON.parse(localStorage.getItem("jobInfo")),a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),b=j[0],d=j[1];return console.log("availableJobs: ",s),Object(r.jsx)("div",{className:"SelectJob",children:null!==s?Object(r.jsxs)("div",{className:"JobAvailable",children:[Object(r.jsxs)("div",{className:"Selection",children:[Object(r.jsx)("label",{for:"Job",children:" Selected Job: "}),Object(r.jsxs)("select",{name:"Job",id:"Job",onChange:function(e){i(!1),d(e.target.value)},children:[Object(r.jsx)("option",{value:"",defaultValue:!0}),s.Jobs.map((function(e,t){return Object(r.jsxs)("option",{value:e.jobName,children:[" ",e.jobName," "]},t)}))]})]}),Object(r.jsx)("button",{onClick:function(){""!==b?(i(!1),console.log(b),localStorage.setItem("currentJob",JSON.stringify({selectedJob:b})),t(999)):i(!0)},children:" Save"}),o?Object(r.jsx)("div",{className:"ErrorMessageSelectJob",children:"No Job Is Selected"}):null]}):Object(r.jsx)("div",{children:" No jobs available "})})}),L=function(e){var t=Object(n.useState)(""),s=Object(l.a)(t,2),a=s[0],c=s[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),O=g[0],m=g[1],h=Object(n.useState)(!1),p=Object(l.a)(h,2),f=p[0],x=p[1],v=e.setDisplayState;return Object(r.jsxs)("div",{className:"UploadeSpreadsheet",children:[Object(r.jsx)("h3",{children:" Spreadsheet Upload Specs: "}),Object(r.jsxs)("div",{className:"XLSUpsload",children:[Object(r.jsx)("label",{children:" Select a Spreadsheet: "}),Object(r.jsx)(d,{setter:c})]}),Object(r.jsxs)("div",{className:"JobNameSelect",children:[Object(r.jsx)("label",{for:"JobNameSelection",children:" Select Job Name: "}),Object(r.jsx)("input",{id:"JobNameSelection",onChange:function(e){return j(e.target.value)}})]}),Object(r.jsx)("button",{onClick:function(){return function(){if(x(!1),""!==u)if(null===JSON.parse(localStorage.getItem(u)))if(m(!1),null!==a&&""!==a){var e=JSON.parse(localStorage.getItem("jobInfo"));null===e&&(e={Jobs:[]}),e.Jobs.push({jobName:u}),localStorage.setItem(u,JSON.stringify(a)),localStorage.setItem("jobInfo",JSON.stringify(e)),localStorage.setItem("settings"+u,JSON.stringify({messagesPerKeyPress:1,assignedUsers:3,userList:["eric","justin","omar"]})),v(999)}else x(!0);else m(!0);else m(!0)}()},children:" Upload "}),O?Object(r.jsx)("div",{className:"errorMessage",children:"Name is not permitted"}):null,f?Object(r.jsx)("div",{className:"errorMessage",children:"No spreadsheet has been uploaded"}):null]})},y=function(e){var t=e.setDisplayState,s=Object(n.useState)(0),a=Object(l.a)(s,2),c=a[0],o=a[1],i=Object(n.useState)(0),u=Object(l.a)(i,2),j=u[0],b=u[1],d=Object(n.useState)(!0),g=Object(l.a)(d,2),O=g[0],m=g[1],h=Object(n.useState)({}),p=Object(l.a)(h,2),f=(p[0],p[1]),x=Object(n.useState)(""),v=Object(l.a)(x,2),S=v[0],N=v[1],I=Object(n.useState)(""),J=Object(l.a)(I,2),L=J[0],y=J[1],k="";Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("currentJob"));null===e||""===e?m(!1):(k=JSON.parse(localStorage.getItem("settings"+e.selectedJob)),f(k),o(k.messagesPerKeyPress),b(k.assignedUsers))}),[]);return O?Object(r.jsxs)("div",{className:"jobSettingsPage",children:[Object(r.jsxs)("div",{className:"inputsPerPress",children:[Object(r.jsx)("label",{children:" Messages sent per press: "}),Object(r.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"workers",children:[Object(r.jsx)("label",{children:" Number of users working on selected job:"}),Object(r.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)}})]}),Object(r.jsxs)("div",{className:"SID Input",children:[Object(r.jsx)("label",{children:" Account SID:"}),Object(r.jsx)("input",{value:S,onChange:function(e){return N(e.target.value)}})]}),Object(r.jsxs)("div",{className:"Auth Token Input",children:[Object(r.jsx)("label",{children:" Account Auth Token:"}),Object(r.jsx)("input",{value:L,onChange:function(e){return y(e.target.value)}})]}),Object(r.jsx)("button",{onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("currentJob"));(k=JSON.parse(localStorage.getItem("settings"+e.selectedJob))).messagesPerKeyPress=c,k.assignedUsers=j,localStorage.setItem("settings"+e.selectedJob,JSON.stringify(k)),""!==S&&null!==S&&localStorage.setItem("accountSID",S),""!==L&&null!==L&&localStorage.setItem("accountAuthToken",L),t(999)}()},children:"Update"})]}):Object(r.jsx)("h3",{children:" No Job is Selected "})},k=(s(923),function(e){var t=e.setDisplayState,s=JSON.parse(localStorage.getItem("jobInfo")),a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),b=j[0],d=j[1];return console.log("availableJobs: ",s),Object(r.jsx)("div",{className:"SelectJob",children:null!==s?Object(r.jsxs)("div",{className:"JobAvailable",children:[Object(r.jsxs)("div",{className:"Selection",children:[Object(r.jsx)("label",{for:"Job",children:" Selected Job: "}),Object(r.jsxs)("select",{name:"Job",id:"Job",onChange:function(e){i(!1),d(e.target.value)},children:[Object(r.jsx)("option",{value:"",defaultValue:!0}),s.Jobs.map((function(e,t){return Object(r.jsxs)("option",{value:e.jobName,children:[" ",e.jobName," "]},t)}))]})]}),Object(r.jsx)("button",{onClick:function(){""!==b?(i(!1),console.log(b),localStorage.getItem(b)&&(null!=localStorage.getItem("currentJob")&&localStorage.removeItem("currentJob"),localStorage.removeItem("settings"+b),localStorage.removeItem("message"+b),localStorage.removeItem(b),JSON.parse(localStorage.getItem("jobInfo"))),t(999)):i(!0)},children:" Delete"}),o?Object(r.jsx)("div",{className:"ErrorMessageSelectJob",children:"No Job Is Selected"}):null]}):Object(r.jsx)("div",{children:" No jobs available "})})}),P=function(e){var t=Object(n.useState)(!1),s=Object(l.a)(t,2),a=(s[0],s[1]),c=Object(n.useState)(999),o=Object(l.a)(c,2),i=o[0],u=o[1],j=Object(n.useState)(!1),b=Object(l.a)(j,2),d=b[0],O=b[1],m=Object(n.useState)(""),h=Object(l.a)(m,2),p=h[0],f=h[1],S=Object(n.useState)(!0),N=Object(l.a)(S,2),P=N[0],M=N[1],C=Object(n.useState)(""),U=Object(l.a)(C,2),D=U[0],w=U[1],R=Object(n.useState)(""),B=Object(l.a)(R,2),T=B[0],A=B[1],E=Object(n.useState)(""),F=Object(l.a)(E,2),H=F[0],K=(F[1],Object(n.useState)(!1)),z=Object(l.a)(K,2),W=z[0],G=(z[1],Object(n.useState)(!0)),Y=Object(l.a)(G,2),V=(Y[0],Y[1],Object(n.useState)("")),_=Object(l.a)(V,2),q=_[0],X=_[1],Q=Object(n.useState)(!1),Z=Object(l.a)(Q,2),$=Z[0],ee=Z[1];console.log("HEY: ","Hello World");if(Object(n.useEffect)((function(){console.log("Updating saved message");var e=JSON.parse(localStorage.getItem("currentJob")),t="message"+(null===e||void 0===e?void 0:e.selectedJob),s=localStorage.getItem("keyName");null!==s?((s=JSON.parse(s)).imageURL=q,localStorage.setItem(t,JSON.stringify(s))):localStorage.setItem(e+"imageURL",q)}),$),console.log("Displaystate: ",i),0===i);else{if(1===i)return Object(r.jsx)(g,{user:T,setUser:A,setDisplayState:u,setIsListSplit:a});if(i>=2)return Object(r.jsxs)("div",{className:"FullSiteDisplay",children:[Object(r.jsx)(v,{name:T,setDisplay:u}),2===i?Object(r.jsx)(x,{longMessage:d,setMessageContents:f,setLongMessage:O,displayImageInput:P,setImageURL:X,imageURL:q,setDisplayImageInput:M,messageContents:p,setDisplayState:u,setImageUploaded:ee,imageUploaded:$}):3===i?Object(r.jsx)(I,{list:D,displayLoaded:W,setDisplayState:u,setList:w,messageList:H}):4===i?Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"finishBox",children:[Object(r.jsx)("h2",{children:"Done sending messages"}),Object(r.jsx)("button",{onClick:function(){return localStorage.removeItem("messagingList"),void u(999)},children:" Reset "})]})}):5===i?Object(r.jsx)(J,{setDisplayState:u}):6===i?Object(r.jsx)(L,{setDisplayState:u}):7===i?Object(r.jsx)(y,{setDisplayState:u}):8===i?Object(r.jsx)(k,{setDisplayState:u}):Object(r.jsx)("div",{})]})}};var M=function(){return console.log("Hello World"),Object(r.jsx)(P,{})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,925)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root")),C()}},[[924,1,2]]]);
//# sourceMappingURL=main.b08548df.chunk.js.map