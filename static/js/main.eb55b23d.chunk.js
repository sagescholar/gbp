(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(5),o=n.n(c),l=(n(53),n(16)),r=(n(54),n(34)),s=n(35),p=n(44),u=n(42),d=n(1),j=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("a",{children:this.state.date.toLocaleTimeString()})})}}]),n}(i.a.Component),b=function(e){return Object(d.jsxs)("div",{class:"head-title",children:[Object(d.jsx)("div",{onClick:function(){e([])},class:"wrap-equiped-reset",children:Object(d.jsx)("a",{children:" X "})}),Object(d.jsx)("div",{style:{marginLeft:"auto",padding:"0px 20px",backgroundColor:"#aaaaaa",width:"",textAlign:"right",color:"#333333"},children:Object(d.jsx)(j,{})})]})};n(56);n(57),n(31);var g=n(3),x=n.n(g),m=n(43),h={"\u706b":0,"\u6c34":0,"\u571f":0,"\u98a8":0,"\u5149":0,"\u95c7":0},O={"\u706b":!0,"\u6c34":!0,"\u571f":!0,"\u98a8":!0,"\u5149":!0,"\u95c7":!0},f={"\u706b":"images/Icon_Element_Fire","\u6c34":"images/Icon_Element_Water","\u571f":"images/Icon_Element_Earth","\u98a8":"images/Icon_Element_Wind","\u5149":"images/Icon_Element_Light","\u95c7":"images/Icon_Element_Dark"},k={"\u901a\u5e38\u653b\u5203":x()(h),"\u901a\u5e38\u80cc\u6c34":x()(h),"\u901a\u5e38\u6e3e\u8eab":x()(h),"\u65b9\u9663\u6e3e\u8eab":x()(h),"\u65b9\u9663\u80cc\u6c34":x()(h),"\u65b9\u9663\u653b\u5203":x()(h),"EX\u653b\u5203":x()(h),"\u6280\u5de7":x()(h),"DA\u7387":x()(h),"TA\u7387":x()(h)},y=function(e,t,n,a){var i={"\u901a\u5e38\u6e3e\u8eab":{"\u4e2d":65,"\u5927":56.4},"\u65b9\u9663\u6e3e\u8eab":{"\u4e2d":60.4,"\u5927":56.4},"\u5f37\u58ee":{"\u4e2d":53.7,"\u5927":53.7}}[t][n];if(e<25)return 1e-4;var c=0;return c=a<=15?a:15+.4*(a+-15),Math.pow(e/(i-c),2.9)+2.1},v=function(e,t,n,a){var i={"\u901a\u5e38\u80cc\u6c34":{"\u5c0f":{1:.5,2:1.1,3:1.7,4:2.3,5:2.9,6:3.5,7:4.1,8:4.7,9:5.3,10:6,11:6.2,12:6.4,13:6.6,14:6.8,15:7,16:7.1,17:7.2,18:7.3,19:7.4,20:7.5},"\u4e2d":{1:1,2:1.75,3:2.5,4:3.25,5:4,6:4.75,7:5.5,8:6.25,9:7,10:8,11:8.4,12:8.8,13:9.2,14:9.6,15:10,16:10.2,17:10.4,18:10.6,19:10.8,20:11},"\u5927":{1:3,2:4,3:5,4:5.5,5:6,6:6.5,7:7,8:8,9:9,10:10,11:10.5,12:11,13:11.5,14:12,15:12.5,16:12.7,17:12.9,18:13.1,19:13.3,20:13.5}},"\u65b9\u9663\u80cc\u6c34":{"\u5c0f":{1:.5,2:1.1,3:1.7,4:2.3,5:2.9,6:3.5,7:4.1,8:4.7,9:5.3,10:6,11:6.2,12:6.4,13:6.6,14:6.8,15:7,16:7.1,17:7.2,18:7.3,19:7.4,20:7.5},"\u4e2d":{1:1,2:1.75,3:2.5,4:3.25,5:4,6:4.75,7:5.5,8:6.25,9:7,10:8,11:8.4,12:8.8,13:9.2,14:9.6,15:10,16:10.2,17:10.4,18:10.6,19:10.8,20:11},"\u5927":{1:3,2:4,3:5,4:5.5,5:6,6:6.5,7:7,8:8,9:9,10:10,11:10.5,12:11,13:11.5,14:12,15:12.5,16:12.7,17:12.9,18:13.1,19:13.3,20:13.5}}}[t][n][a],c=e/100;return(2*Math.pow(c,2)-5*c+3)*i>0?(2*Math.pow(c,2)-5*c+3)*i:1e-4},_={"\u901a\u5e38\u653b\u5203":{"\u5c0f":{10:10,15:12,20:12.5},"\u4e2d":{10:12,15:14.5,20:15.5},"\u5927":{10:15,15:18,20:20},II:{10:16,15:20,20:22},III:{10:17,15:22,20:0},"\u7279\u5927":{10:18,15:23,20:25.5},"\u66b4\u541bII":{10:18,15:23,20:25.5},"\u30d0\u30cf":{10:30,15:32},"\u52ab\u98a8\u306e\u653b\u5203":{10:25,15:33}},"\u65b9\u9663\u653b\u5203":{"\u5c0f":{10:10,15:12,20:12.5},"\u4e2d":{10:12,15:14.5,20:15.5},II:{10:15,15:18,20:20}},"EX\u653b\u5203":{"\u5c0f":{10:10,15:10,20:10},"\u4e2d":{10:12,15:14.5,20:0},"\u5927":{10:15,15:18,20:21},"\u8987\u9053":{10:18,15:23,20:25.5},"\u865a\u7a7a":{10:20,15:20,20:20},"\u652f\u914d\u8005":{10:25,15:33,20:37}},"\u6280\u5de7":{"\u5c0f":{10:2,15:3,20:4},"\u4e2d":{10:5,15:6.5,20:7.5},"\u5927":{10:8,15:10,20:11},II:{10:10,15:12,20:0},"\u6c34\u798d\u306e\u6280\u5de7":{10:20,15:20,20:20}},"\u901a\u5e38\u6e3e\u8eab":{"\u5c0f":{10:0,15:5.59,20:0},"\u4e2d":{10:y,15:y,20:y},"\u5927":{10:y,15:y,20:y},II:{10:0,15:17.79,20:0},"\u5f37\u58ee":{10:y,15:y,20:y},"\u546a\u89e6\u306e\u6e3e\u8eab":{10:18.14,15:22.41,20:0}},"\u65b9\u9663\u6e3e\u8eab":{"\u4e2d":{10:y,15:y,20:y},"\u5927":{10:y,15:y,20:y}},"\u901a\u5e38\u80cc\u6c34":{"\u5c0f":{10:v,15:v,20:v},"\u4e2d":{10:v,15:v,20:v},"\u5927":{10:v,15:v,20:v},"\u708e\u5a01\u306e\u80cc\u6c34":{10:2,15:3,20:0}},"\u65b9\u9663\u80cc\u6c34":{"\u5c0f":{10:v,15:v,20:v},"\u4e2d":{10:v,15:v,20:v},"\u5927":{10:v,15:v,20:v}},"TA\u7387":{"\u4e71\u821e\u5c0f":{10:1.35,15:2,20:0},"\u4e71\u821e\u4e2d":{10:2.15,15:2.9,20:3.65},"\u5c0f":{10:2,15:3.5,20:0},"\u4e2d":{10:3.5,15:5,20:6},"\u5927":{10:5,15:7,20:0},"\u30d0\u30cf":{10:5,15:8,20:0},"\u767d\u306e\u8a93\u7d04":{10:0,15:14,20:0},"\u30aa\u30e1\u30ac\xdf\u95d8\u4e89":{10:20,15:0,20:0}}},w={"\u901a\u5e38\u5239\u90a3":{"\u7279\u5927":{"\u6280\u5de7":"II","\u901a\u5e38\u653b\u5203":"\u7279\u5927"},"\u4e2d":{"\u6280\u5de7":"\u4e2d","\u901a\u5e38\u653b\u5203":"\u4e2d"}},"\u901a\u5e38\u4e09\u624b":{"\u5c0f":{"TA\u7387":"\u5c0f"}},"\u901a\u5e38\u514b\u5df1":{"\u5c0f":{"\u6280\u5de7":"\u5c0f"},"\u4e2d":{"\u6280\u5de7":"\u4e2d"},"\u5927":{"\u6280\u5de7":"\u5927"}}},I={opti:x()(h),omega:x()(h),None:x()(h)},E={150:{value:150,toggle:!1},140:{value:140,toggle:!1}},S={140:{value:140,toggle:!1},120:{value:120,toggle:!1}},C={20:{value:20,toggle:!1},10:{value:10,toggle:!1}},W={"\u30a2\u30b0\u30cb\u30b9":x()(E),"\u30f4\u30a1\u30eb\u30ca":x()(E),"\u30c6\u30a3\u30bf\u30fc\u30f3":x()(E),"\u30bc\u30d4\u30e5\u30ed\u30b9":x()(E),"\u30bc\u30a6\u30b9":x()(E),"\u30cf\u30c7\u30b9":x()(E)},D={"\u30b3\u30ed\u30c3\u30b5\u30b9":x()(S),"\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":x()(S),"\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":x()(S),"\u30c6\u30a3\u30a2\u30de\u30c8":x()(S),"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":x()(S),"\u30bb\u30ec\u30b9\u30c8":x()(S)},F={"\u30a6\u30a3\u30eb\u30ca\u30b9":x()(C),"\u30ef\u30e0\u30c7\u30e5\u30b9":x()(C),"\u30ac\u30ec\u30aa\u30f3":x()(C),"\u30a4\u30fc\u30a6\u30a3\u30a2":x()(C),"\u30eb\u30aa\u30fc":x()(C),"\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":x()(C)},A={opti:x()(W),omega:x()(D),sixdragon:x()(F)},L={MAIN:x()(A),FRIEND:x()(A)},T={"\u30a4\u30af\u30b5\u30d0":{name:"\u30a4\u30af\u30b5\u30d0",element:"\u706b",icon:"images/weapon/Weapon_b_1040906400.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u7d76\u62f3":{name:"\u7d76\u62f3",element:"\u706b",icon:"images/weapon/Weapon_b_1040612700.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u5239\u90a3",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u4e09\u624b",lank:"\u5c0f",aura:"opti"}}},"\u30ac\u30ea\u30ec\u30aa\u30b5\u30a4\u30c8":{name:"\u30ac\u30ea\u30ec\u30aa\u30b5\u30a4\u30c8",element:"\u6c34",icon:"images/weapon/Weapon_b_1040211600.png",skill:{1:{e:"\u6c34",type:"\u901a\u5e38\u514b\u5df1",lank:"\u4e2d",aura:"opti"},2:{e:"\u6c34",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u5927",aura:"opti"}}},"\u865a\u7121\u4e43\u54ed\u98a8":{name:"\u865a\u7121\u4e43\u54ed\u98a8",element:"\u98a8",icon:"images/weapon/Weapon_b_1040212700.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30a8\u30c7\u30f3":{name:"\u30a8\u30c7\u30f3",element:"\u5149",icon:"images/weapon/Weapon_b_1040207000.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u5149",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30a2\u30fc\u30af":{name:"\u30a2\u30fc\u30af",element:"\u5149",icon:"images/weapon/Weapon_b_1040112500.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u5239\u90a3",lank:"\u7279\u5927",aura:"opti"}}},"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8\u30bd\u30fc\u30c9\u30de\u30b0\u30ca":{name:"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8\u30bd\u30fc\u30c9\u30de\u30b0\u30ca",element:"\u5149",icon:"images/weapon/Luminiera_Sword_Omega.png",skill:{1:{e:"\u5149",type:"\u65b9\u9663\u653b\u5203",lank:"\u4e2d",aura:"omega"},2:{e:"\u5149",type:"\u901a\u5e38\u653b\u5203",lank:"\u5c0f",aura:"opti"}}},"\u6247\u629c":{name:"\u6247\u629c",element:"\u6c34",icon:"images/weapon/Weapon_b_1040704800.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u592a\u6b73\u7cbe\u5f13":{name:"\u592a\u6b73\u7cbe\u5f13",element:"\u6c34",icon:"images/weapon/Weapon_b_1040708700.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30b0\u30e9\u30fc\u30b7\u30fc\u30b6\u30fc":{name:"\u30b0\u30e9\u30fc\u30b7\u30fc\u30b6\u30fc",element:"\u95c7",icon:"images/weapon/Weapon_b_1040200700.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u653b\u5203",lank:"II",aura:"opti"},2:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u4e2d",aura:"opti"}}},"\u30a8\u30c3\u30b1\u30b6\u30c3\u30af\u30b9":{name:"\u30a8\u30c3\u30b1\u30b6\u30c3\u30af\u30b9",element:"\u706b",icon:"images/weapon/Ecke_Sachs.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u5239\u90a3",lank:"\u4e2d",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"}}},"\u30c9\u30b9":{name:"\u30c9\u30b9",element:"\u706b",icon:"images/weapon/Weapon_b_1040112600.png",skill:{1:{e:"\u706b",type:"\u6280\u5de7",lank:"\u5c0f",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5927",aura:"opti"}}}};function M(e,t,n){var a=t;console.log(a);var i=n,c={},o=1;e.forEach((function(e){c[o]=T[e],c[o].skill_level="15",o+=1}));var l=JSON.parse(JSON.stringify(k));return Object.keys(c).forEach((function(e){Object.keys(c[e].skill).forEach((function(t){var n=c[e].skill[t].e,o=c[e].skill[t].type,r=c[e].skill[t].lank,s=c[e].skill[t].aura,p=c[e].skill_level;if(Object.keys(w).includes(o))Object.keys(w[o][r]).forEach((function(e){var t=w[o][r][e];l[e][n]+=_[e][t][p]*(1+a[s][n])}));else{["\u901a\u5e38\u6e3e\u8eab","\u65b9\u9663\u6e3e\u8eab"].includes(o)||["\u901a\u5e38\u80cc\u6c34","\u65b9\u9663\u80cc\u6c34"].includes(o)?l[o][n]+=_[o][r][p](i,o,r,p)*(1+a[s][n]):l[o][n]+=_[o][r][p]*(1+a[s][n])}}))})),Object(d.jsx)("div",{style:{display:"flex",flexFlow:"column",padding:"0px 60px"},children:Object.keys(l).map((function(e){return Object.keys(l[e]).map((function(t){if(0!=l[e][t])return Object(d.jsxs)("div",{style:{fontSize:"12px",textAlign:"left",paddingBottom:"5px"},children:[e,"|",t,"|",l[e][t]>.1?l[e][t]:0]})}))}))})}n(33);var N=n(14),z=n(83),R=n(82),B=function(e,t,n,a){var c=function(e,i,c,o){var l=x()(n);console.log(l),"sixdragon"==i?Object.keys(l[e].sixdragon).map((function(t){return Object.keys(l[e].sixdragon[t]).map((function(n){return l[e].sixdragon[t][n].toggle=!1}))})):Object.keys(l[e]).map((function(t){return Object.keys(l[e][t]).map((function(n){return Object.keys(l[e][t][n]).forEach((function(a){"sixdragon"!==t&&(l[e][t][n][a].toggle=!1)}))}))})),l[e][i][c][o].toggle=!l[e][i][c][o].toggle,console.log(l),t(l),function(e,t){var n={"\u30a2\u30b0\u30cb\u30b9":"\u706b","\u30f4\u30a1\u30eb\u30ca":"\u6c34","\u30c6\u30a3\u30bf\u30fc\u30f3":"\u571f","\u30bc\u30d4\u30e5\u30ed\u30b9":"\u98a8","\u30bc\u30a6\u30b9":"\u5149","\u30cf\u30c7\u30b9":"\u95c7","\u30b3\u30ed\u30c3\u30b5\u30b9":"\u706b","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"\u6c34","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"\u571f","\u30c6\u30a3\u30a2\u30de\u30c8":"\u98a8","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"\u5149","\u30bb\u30ec\u30b9\u30c8":"\u95c7","\u30a6\u30a3\u30eb\u30ca\u30b9":"\u706b","\u30ef\u30e0\u30c7\u30e5\u30b9":"\u6c34","\u30ac\u30ec\u30aa\u30f3":"\u571f","\u30a4\u30fc\u30a6\u30a3\u30a2":"\u98a8","\u30eb\u30aa\u30fc":"\u5149","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"\u95c7"},a={sixdragon:"opti",opti:"opti",omega:"omega"},i=x()(I);Object.keys(e).map((function(t){return Object.keys(e[t]).map((function(c){return Object.keys(e[t][c]).map((function(o){return Object.keys(e[t][c][o]).map((function(l){var r=a[c],s=n[o];e[t][c][o][l].toggle&&(i[r][s]+=e[t][c][o][l].value/100)}))}))}))})),console.log(i),t(i)}(l,a)},o=Object(N.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,padding:"15px",fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(z.a),l={opti:[],omega:[],sixdragon:[]};return Object.keys(n[e]).map((function(t){return Object.keys(n[e][t]).map((function(a){return Object.keys(n[e][t][a]).forEach((function(n){if("FRIEND"!=e||"sixdragon"!=t){var r=e,s=t,p=a,u=n,j="";j="sixdragon"==s?a+" "+n+"%":a+"Lv."+n,l[t].push(Object(d.jsx)(o,{title:Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("a",{children:[Object(d.jsx)(R.a,{color:"inherit",children:"Information"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{style:{fontSize:"10px"},children:j})]})}),children:Object(d.jsx)("button",{style:{transform:"scale(0.8)",width:"150px",border:"0px","&:hover":{textDecoration:"underline"}},class:"tooltip button",value:j,onClick:function(){return c(r,s,p,u)},children:Object(d.jsx)("a",{style:{fontSize:"10px",textAlign:"center","&:hover":{textDecoration:"underline"}},children:j})})}))}}))}))})),Object(d.jsxs)("div",{style:{textAlign:"center"},children:[Object(d.jsx)("p",{style:{textAlign:"center"},children:e}),Object(d.jsx)("div",{class:"opti_button",children:l.opti}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{class:"omega_button",children:l.omega}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{class:"sixdragon_button",children:l.sixdragon})]})},q=n(84),J=function(e,t){return Object(d.jsx)(q.a,{size:"small",defaultValue:e,"aria-label":"Small",valueLabelDisplay:"auto",onChange:function(e,n){t(n)},min:0,max:100,step:10})},U=function(e,t){var n=function(n){var a=x()(e);a[n]=!a[n],t(a)};return Object(d.jsx)("dvi",{style:{display:"block",backgroundColor:"#666666",width:"",padding:"5px"},class:"weapon-element-wrapper",children:Object(d.jsx)(d.Fragment,{children:Object.keys(e).map((function(t){return e[t]?Object(d.jsx)("a",{onClick:function(){return n(t)},style:{backgroundColor:""},children:Object(d.jsx)("img",{style:{padding:"2px",width:"20px"},src:"/gbp/"+f[t]+".png"})}):Object(d.jsx)("a",{onClick:function(){return n(t)},style:{backgroundColor:""},children:Object(d.jsx)("img",{style:{padding:"2px",width:"20px",opacity:"0.5"},src:"/gbp/"+f[t]+".png"})})}))})})},P=function(e,t,n,a){var c=Object(N.a)((function(e){return{tooltip:{backgroundColor:"rgba(230,230,230,0.95)",opacity:.2,color:"rgba(0, 0, 0, 0.8)",maxWidth:"275px",width:"300px",fontSize:"10px",border:"1px solid #dadde9",padding:"20px"}}}))(z.a);return Object(d.jsx)("div",{children:Object.keys(T).map((function(o){if(console.log(),a[T[o].element])return Object(d.jsx)(c,{title:Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{class:"weapon-icon-wraper",children:Object(d.jsx)("img",{style:{width:"100px"},src:"/gbp/"+T[o].icon})}),Object(d.jsxs)("div",{class:"weapon-info-wraper",children:[Object(d.jsx)(R.a,{color:"inherit",children:o}),Object(d.jsx)("hr",{}),Object(d.jsx)("a",{children:T[o].element}),Object(d.jsx)("div",{style:{fontSize:"10px"},children:Object.keys(T[o].skill).map((function(e){return Object(d.jsx)("p",{style:{marginBottom:"0px"},children:T[o].skill[e].type})}))})]})]})}),children:Object(d.jsx)("div",{class:"btn-wrap",onClick:function(){return function(a){var i=x()(e);console.log(a),i.push(a),i.length>10?n():(console.log(i),t(i))}(T[o].name)},value:T[o].name,children:Object(d.jsx)("a",{class:"btn",children:T[o].name})})})}))})};var X=function(){var e=i.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=i.a.useState(60),o=Object(l.a)(c,2),r=o[0],s=o[1],p=i.a.useState(x()(I)),u=Object(l.a)(p,2),j=u[0],g=u[1],h=i.a.useState(x()(L)),f=Object(l.a)(h,2),k=f[0],y=f[1],v=i.a.useState(x()(O)),_=Object(l.a)(v,2),w=_[0],E=_[1],S=Object(m.a)("root",{preventScroll:!0}),C=Object(l.a)(S,4),W=C[0],D=C[1],F=C[2];return C[3],Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{children:Object(d.jsxs)("div",{style:{backgroundColor:"#fff",padding:"60px 100px",borderRadius:"10px"},children:[Object(d.jsx)("h1",{children:"\u8b66\u544a:\u6b66\u5668\u306f10\u672c\u307e\u3067\u3067\u3059"}),Object(d.jsx)("p",{children:"\u66f4\u65b0\u3057\u3066EquipedList\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(d.jsx)("button",{onClick:F,children:"CLOSE"})]})}),b(a),Object(d.jsxs)("div",{class:"App",children:[Object(d.jsxs)("div",{class:"app-weapon-select-wrap",children:[U(w,E),P(n,a,D,w)]}),Object(d.jsx)("div",{class:"app-equiped",children:n.map((function(e){return Object(d.jsx)("div",{class:"equiped-btn-wrap",children:Object(d.jsx)("a",{class:"equiped-btn",children:e})})}))}),Object(d.jsxs)("div",{class:"app-compute",children:[Object(d.jsxs)("div",{style:{width:""},children:[Object(d.jsx)("a",{children:"RESULT:"+r}),J(r,s)]}),Object(d.jsx)("p",{style:{textAlign:"center",paddingBottom:"5px",borderBottom:"1px solid #202020"},children:"COMPUTE RESULT"}),M(n,j,r)]}),Object(d.jsxs)("div",{class:"app-summons",children:[B("MAIN",y,k,g),B("FRIEND",y,k,g)]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{class:"Footer",children:Object(d.jsx)("img",{src:"/gbp/images/img_title.png",alt:"\u30aa\u30d7\u30c6\u30a3\u30de\u30b9",class:"footer-img"})})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root")),V()}},[[63,1,2]]]);
//# sourceMappingURL=main.eb55b23d.chunk.js.map