(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(22),s=n.n(o),l=(n(209),n(73)),c=n(18),r=(n(210),n(169)),p=n(170),d=n(171),u=n(196),m=n(2),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(m.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(m.jsx)("a",{children:this.state.date.toLocaleTimeString()})})}}]),n}(i.a.Component),j=function(e){return Object(m.jsx)("div",{style:{position:"relative",width:"100%",height:"20px",backgroundColor:"#333333"},children:Object(m.jsxs)("div",{class:"head-title",style:{position:"",maxWidth:"1500px",marginLeft:"auto",marginRight:"auto",display:"flex",alignItems:"start"},children:[Object(m.jsx)("div",{onClick:function(){e({})},class:"wrap-equiped-reset",children:Object(m.jsx)("a",{children:" X "})}),Object(m.jsx)("div",{style:{width:"100px",marginLeft:"auto",padding:"0px 0px",backgroundColor:"#aaaaaa",color:"#333333"},children:Object(m.jsx)(g,{})})]})})};n(212);n(213),n(107);var b=n(7),x=n.n(b),h=n(198),y={"\u706b":0,"\u6c34":0,"\u571f":0,"\u98a8":0,"\u5149":0,"\u95c7":0},f={"\u706b":!1,"\u6c34":!1,"\u571f":!1,"\u98a8":!1,"\u5149":!1,"\u95c7":!1},O={"\u706b":"images/Icon_Element_Fire","\u6c34":"images/Icon_Element_Water","\u571f":"images/Icon_Element_Earth","\u98a8":"images/Icon_Element_Wind","\u5149":"images/Icon_Element_Light","\u95c7":"images/Icon_Element_Dark"},k={"\u901a\u5e38\u653b\u5203":x()(y),"\u901a\u5e38\u80cc\u6c34":x()(y),"\u901a\u5e38\u6e3e\u8eab":x()(y),"\u65b9\u9663\u6e3e\u8eab":x()(y),"\u65b9\u9663\u80cc\u6c34":x()(y),"\u65b9\u9663\u653b\u5203":x()(y),"EX\u653b\u5203":x()(y),"\u6280\u5de7":x()(y),"DA\u7387":x()(y),"TA\u7387":x()(y),"\u30a2\u30d3\u4e0e\u30c0\u30e1":x()(y),"D\u4e0a\u9650":x()(y),"\u4e0e\u30c0\u30e1\u30fc\u30b8":x()(y),"\u5bfe\u6709\u5229\u4e0e\u30c0\u30e1":x()(y)},v=function(e,t,n,a){var i={"\u901a\u5e38\u6e3e\u8eab":{"\u4e2d":65,"\u5927":56.4},"\u65b9\u9663\u6e3e\u8eab":{"\u4e2d":60.4,"\u5927":56.4},"\u5f37\u58ee":{"\u4e2d":53.7,"\u5927":53.7}}[t][n];if(e<25)return 1e-4;var o=0;return o=a<=15?a:15+.4*(a+-15),Math.pow(e/(i-o),2.9)+2.1},_=function(e,t,n,a){var i={"\u901a\u5e38\u80cc\u6c34":{"\u5c0f":{1:.5,2:1.1,3:1.7,4:2.3,5:2.9,6:3.5,7:4.1,8:4.7,9:5.3,10:6,11:6.2,12:6.4,13:6.6,14:6.8,15:7,16:7.1,17:7.2,18:7.3,19:7.4,20:7.5},"\u4e2d":{1:1,2:1.75,3:2.5,4:3.25,5:4,6:4.75,7:5.5,8:6.25,9:7,10:8,11:8.4,12:8.8,13:9.2,14:9.6,15:10,16:10.2,17:10.4,18:10.6,19:10.8,20:11},"\u5927":{1:3,2:4,3:5,4:5.5,5:6,6:6.5,7:7,8:8,9:9,10:10,11:10.5,12:11,13:11.5,14:12,15:12.5,16:12.7,17:12.9,18:13.1,19:13.3,20:13.5}},"\u65b9\u9663\u80cc\u6c34":{"\u5c0f":{1:.5,2:1.1,3:1.7,4:2.3,5:2.9,6:3.5,7:4.1,8:4.7,9:5.3,10:6,11:6.2,12:6.4,13:6.6,14:6.8,15:7,16:7.1,17:7.2,18:7.3,19:7.4,20:7.5},"\u4e2d":{1:1,2:1.75,3:2.5,4:3.25,5:4,6:4.75,7:5.5,8:6.25,9:7,10:8,11:8.4,12:8.8,13:9.2,14:9.6,15:10,16:10.2,17:10.4,18:10.6,19:10.8,20:11},"\u5927":{1:3,2:4,3:5,4:5.5,5:6,6:6.5,7:7,8:8,9:9,10:10,11:10.5,12:11,13:11.5,14:12,15:12.5,16:12.7,17:12.9,18:13.1,19:13.3,20:13.5}}}[t][n][a],o=e/100;return(2*Math.pow(o,2)-5*o+3)*i>0?(2*Math.pow(o,2)-5*o+3)*i:1e-4},w={"\u901a\u5e38\u653b\u5203":{"\u5c0f":{10:10,15:12,20:12.5},"\u4e2d":{10:12,15:14.5,20:15.5},"\u5927":{10:15,15:18,20:20},II:{10:16,15:20,20:22},III:{10:17,15:22,20:0},"\u7279\u5927":{10:18,15:23,20:25.5},"\u66b4\u541bII":{10:18,15:23,20:25.5},"\u30d0\u30cf":{10:30,15:32},"\u52ab\u98a8\u306e\u653b\u5203":{10:25,15:33}},"\u65b9\u9663\u653b\u5203":{"\u5c0f":{10:10,15:12,20:12.5},"\u4e2d":{10:12,15:14.5,20:15.5},II:{10:15,15:18,20:20}},"EX\u653b\u5203":{"\u5c0f":{10:10,15:10,20:10},"\u4e2d":{10:12,15:14.5,20:0},"\u5927":{10:15,15:18,20:21},"\u8987\u9053":{10:18,15:23,20:25.5},"\u865a\u7a7a":{10:20,15:20,20:20},"\u652f\u914d\u8005":{10:25,15:33,20:37}},"\u6280\u5de7":{"\u5c0f":{10:2,15:3,20:4},"\u4e2d":{10:5,15:6.5,20:7.5},"\u5927":{10:8,15:10,20:11},II:{10:10,15:12,20:0},"\u6c34\u798d\u306e\u6280\u5de7":{10:20,15:20,20:20}},"\u901a\u5e38\u6e3e\u8eab":{"\u5c0f":{10:0,15:5.59,20:0},"\u4e2d":{10:v,15:v,20:v},"\u5927":{10:v,15:v,20:v},II:{10:0,15:17.79,20:0},"\u5f37\u58ee":{10:v,15:v,20:v},"\u546a\u89e6\u306e\u6e3e\u8eab":{10:18.14,15:22.41,20:0}},"\u65b9\u9663\u6e3e\u8eab":{"\u4e2d":{10:v,15:v,20:v},"\u5927":{10:v,15:v,20:v}},"\u901a\u5e38\u80cc\u6c34":{"\u5c0f":{10:_,15:_,20:_},"\u4e2d":{10:_,15:_,20:_},"\u5927":{10:_,15:_,20:_},"\u708e\u5a01\u306e\u80cc\u6c34":{10:2,15:3,20:0}},"\u65b9\u9663\u80cc\u6c34":{"\u5c0f":{10:_,15:_,20:_},"\u4e2d":{10:_,15:_,20:_},"\u5927":{10:_,15:_,20:_}},"TA\u7387":{"\u4e71\u821e\u5c0f":{10:1.35,15:2,20:0},"\u4e71\u821e\u4e2d":{10:2.15,15:2.9,20:3.65},"\u5c0f":{10:2,15:3.5,20:0},"\u4e2d":{10:3.5,15:5,20:6},"\u5927":{10:5,15:7,20:0},"\u30d0\u30cf":{10:5,15:8,20:0},"\u767d\u306e\u8a93\u7d04":{10:0,15:14,20:0},"\u30aa\u30e1\u30ac\u95d8\u4e89":{10:20,15:0,20:0}}},S=Object(l.a)({"\u901a\u5e38\u5239\u90a3":{"\u7279\u5927":{"\u6280\u5de7":"II","\u901a\u5e38\u653b\u5203":"\u7279\u5927"},"\u4e2d":{"\u6280\u5de7":"\u4e2d","\u901a\u5e38\u653b\u5203":"\u4e2d"}},"\u901a\u5e38\u4e09\u624b":{"\u5c0f":{"TA\u7387":"\u5c0f"}},"\u901a\u5e38\u4e71\u821e":{"\u4e2d":{"TA\u7387":"\u4e2d","\u901a\u5e38\u653b\u5203":"\u4e2d"}},"\u4fee\u7f85":{"\u5927":{"\u901a\u5e38\u653b\u5203":"\u5927"}},"\u901a\u5e38\u514b\u5df1":{"\u5c0f":{"\u6280\u5de7":"\u5c0f"},"\u4e2d":{"\u6280\u5de7":"\u4e2d"},"\u5927":{"\u6280\u5de7":"\u5927"}}},"\u4fee\u7f85",{"\u5927":{"\u901a\u5e38\u653b\u5203":"\u5927"}}),I={opti:x()(y),omega:x()(y),None:x()(y)},C={150:{value:150,toggle:!1},140:{value:140,toggle:!1}},W={140:{value:140,toggle:!1},120:{value:120,toggle:!1}},E={"\u30a2\u30b0\u30cb\u30b9":"images/summon/Summon_b_2040094000_02.png","\u30f4\u30a1\u30eb\u30ca":"images/summon/Summon_b_2040100000_02.png","\u30c6\u30a3\u30bf\u30fc\u30f3":"images/summon/Summon_b_2040084000_02.png","\u30bc\u30d4\u30e5\u30ed\u30b9":"images/summon/Summon_b_2040098000_02.png","\u30bc\u30a6\u30b9":"images/summon/Summon_b_2040080000_02.png","\u30cf\u30c7\u30b9":"images/summon/Summon_b_2040090000_02.png","\u30b3\u30ed\u30c3\u30b5\u30b9":"images/summon/Summon_b_2040034000_02.png","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"images/summon/Summon_b_2040028000_02.png","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"images/summon/Summon_b_2040027000_02.png","\u30c6\u30a3\u30a2\u30de\u30c8":"images/summon/Summon_b_2040020000_02.png","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"images/summon/Summon_b_2040047000_02.png","\u30bb\u30ec\u30b9\u30c8":"images/summon/Summon_b_2040046000_02.png","\u30a6\u30a3\u30eb\u30ca\u30b9":"images/summon/218610.png","\u30ef\u30e0\u30c7\u30e5\u30b9":"images/summon/218609.png","\u30ac\u30ec\u30aa\u30f3":"images/summon/218559.png","\u30a4\u30fc\u30a6\u30a3\u30a2":"images/summon/218608.png","\u30eb\u30aa\u30fc":"images/summon/218606.png","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"images/summon/06e572c1db4f20de7646efd9c180c90b.jpg"},L={20:{value:20,toggle:!1},10:{value:10,toggle:!1}},A={"\u30a2\u30b0\u30cb\u30b9":x()(C),"\u30f4\u30a1\u30eb\u30ca":x()(C),"\u30c6\u30a3\u30bf\u30fc\u30f3":x()(C),"\u30bc\u30d4\u30e5\u30ed\u30b9":x()(C),"\u30bc\u30a6\u30b9":x()(C),"\u30cf\u30c7\u30b9":x()(C)},F={"\u30b3\u30ed\u30c3\u30b5\u30b9":x()(W),"\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":x()(W),"\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":x()(W),"\u30c6\u30a3\u30a2\u30de\u30c8":x()(W),"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":x()(W),"\u30bb\u30ec\u30b9\u30c8":x()(W)},D={"\u30a6\u30a3\u30eb\u30ca\u30b9":x()(L),"\u30ef\u30e0\u30c7\u30e5\u30b9":x()(L),"\u30ac\u30ec\u30aa\u30f3":x()(L),"\u30a4\u30fc\u30a6\u30a3\u30a2":x()(L),"\u30eb\u30aa\u30fc":x()(L),"\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":x()(L)},T={opti:x()(A),omega:x()(F),sixdragon:x()(D)},N={MAIN:x()(T),FRIEND:x()(T)},R={name:"",Lv:1,SLv:1,Bonus:0,Tag:"",EX_Skill:{1:{name:"",lank:""},2:{name:"",lank:""}}},z={"\u30a4\u30af\u30b5\u30d0":{name:"\u30a4\u30af\u30b5\u30d0",element:"\u706b",icon:"images/weapon/Weapon_b_1040906400.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u7d76\u62f3":{name:"\u7d76\u62f3",element:"\u706b",icon:"images/weapon/Weapon_b_1040612700.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u5239\u90a3",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u4e09\u624b",lank:"\u5c0f",aura:"opti"}}},"\u30ac\u30ea\u30ec\u30aa\u30b5\u30a4\u30c8":{name:"\u30ac\u30ea\u30ec\u30aa\u30b5\u30a4\u30c8",element:"\u6c34",icon:"images/weapon/Weapon_b_1040211600.png",skill:{1:{e:"\u6c34",type:"\u901a\u5e38\u514b\u5df1",lank:"\u4e2d",aura:"opti"},2:{e:"\u6c34",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u5927",aura:"opti"}}},"\u865a\u7121\u4e43\u54ed\u98a8":{name:"\u865a\u7121\u4e43\u54ed\u98a8",element:"\u98a8",icon:"images/weapon/Weapon_b_1040212700.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u5927",aura:"opti"}}},"\u30a8\u30c7\u30f3":{name:"\u30a8\u30c7\u30f3",element:"\u5149",icon:"images/weapon/Weapon_b_1040207000.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u5149",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30a2\u30fc\u30af":{name:"\u30a2\u30fc\u30af",element:"\u5149",icon:"images/weapon/Weapon_b_1040112500.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u5239\u90a3",lank:"\u7279\u5927",aura:"opti"}}},"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8\u30bd\u30fc\u30c9\u30de\u30b0\u30ca":{name:"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8\u30bd\u30fc\u30c9\u30de\u30b0\u30ca",element:"\u5149",icon:"images/weapon/Luminiera_Sword_Omega.png",skill:{1:{e:"\u5149",type:"\u65b9\u9663\u653b\u5203",lank:"\u4e2d",aura:"omega"},2:{e:"\u5149",type:"\u901a\u5e38\u653b\u5203",lank:"\u5c0f",aura:"opti"}}},"\u6247\u629c":{name:"\u6247\u629c",element:"\u6c34",icon:"images/weapon/Weapon_b_1040704800.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u592a\u6b73\u7cbe\u5f13":{name:"\u592a\u6b73\u7cbe\u5f13",element:"\u6c34",icon:"images/weapon/Weapon_b_1040708700.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30b0\u30e9\u30fc\u30b7\u30fc\u30b6\u30fc":{name:"\u30b0\u30e9\u30fc\u30b7\u30fc\u30b6\u30fc",element:"\u95c7",icon:"images/weapon/Weapon_b_1040200700.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u653b\u5203",lank:"II",aura:"opti"},2:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u4e2d",aura:"opti"}}},"\u30a8\u30c3\u30b1\u30b6\u30c3\u30af\u30b9":{name:"\u30a8\u30c3\u30b1\u30b6\u30c3\u30af\u30b9",element:"\u706b",icon:"images/weapon/Ecke_Sachs.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u5239\u90a3",lank:"\u4e2d",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"}}},"\u30c9\u30b9":{name:"\u30c9\u30b9",element:"\u706b",icon:"images/weapon/Weapon_b_1040112600.png",skill:{1:{e:"\u706b",type:"\u6280\u5de7",lank:"\u5c0f",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5927",aura:"opti"}}},"\u30bd\u30eb\u30ec\u30e0\u30ca\u30f3\u30c8":{name:"\u30bd\u30eb\u30ec\u30e0\u30ca\u30f3\u30c8",element:"\u706b",icon:"images/weapon/Weapon_b_1040311800.png",skill:{1:{e:"\u706b",type:"EX\u653b\u5203",lank:"\u652f\u914d\u8005",aura:"None"}}},"\u6ce1\u672b\u5922\u5e7b":{name:"\u6ce1\u672b\u5922\u5e7b",element:"\u98a8",icon:"images/weapon/Weapon_b_1040022000.png",skill:{1:{e:"\u98a8",type:"\u6280\u5de7",lank:"II",aura:"opti"},2:{e:"\u98a8",type:"\u901a\u5e38\u653b\u5203",lank:"\u4e2d",aura:"opti"}}},"\u7b2c\u516b\u7dbf\u7f8a\u884c\u5203":{name:"\u7b2c\u516b\u7dbf\u7f8a\u884c\u5203",element:"\u98a8",icon:"images/weapon/Weapon_b_1040313100.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u4e71\u821e",lank:"\u4e2d",aura:"opti"}}},"\u5bbf\u547d\u9244\u62f3":{name:"\u5bbf\u547d\u9244\u62f3",element:"\u98a8",icon:"images/weapon/462px-Weapon_b_1040614800.png",skill:{1:{e:"\u98a8",type:"\u4fee\u7f85",lank:"\u5927",aura:"opti"},2:{e:"\u98a8",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"}}},"\u30e9\u30b9\u30c8\u30b9\u30c8\u30fc\u30e0\u30cf\u30fc\u30d7":{name:"\u30e9\u30b9\u30c8\u30b9\u30c8\u30fc\u30e0\u30cf\u30fc\u30d7",element:"\u98a8",icon:"images/weapon/462px-Last_Storm_Harp.png",skill:{1:{e:"\u98a8",type:"\u65b9\u9663\u6e3e\u8eab",lank:"\u4e2d",aura:"omega"},2:{e:"\u98a8",type:"\u6280\u5de7",lank:"\u4e2d",aura:"omega"}}},"\u30bf\u30a2\u30ed\u30de\u30b5\u30e9":{name:"\u30bf\u30a2\u30ed\u30de\u30b5\u30e9",element:"\u95c7",icon:"images/weapon/Weapon_b_1040615400.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u653b\u5203",lank:"\u4e2d",aura:"opti"},2:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"},3:{e:"\u95c7",type:"\u4fee\u7f85",lank:"\u5927",aura:"opti"}}},"\u65b9\u5929\u753b\u621f":{name:"\u65b9\u5929\u753b\u621f",element:"\u95c7",icon:"images/weapon/Sky_Piercer.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5927",aura:"opti"}}}};function M(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=t;console.log(i);var o=n,s={},l=1;Object.keys(e).forEach((function(t){s[l]=z[e[t].name],s[l].skill_level="15",l+=1}));var c=JSON.parse(JSON.stringify(k));if(Object.keys(s).forEach((function(e){Object.keys(s[e].skill).forEach((function(t){var n=s[e].skill[t].e,a=s[e].skill[t].type,l=s[e].skill[t].lank,r=s[e].skill[t].aura,p=s[e].skill_level;if(Object.keys(S).includes(a))Object.keys(S[a][l]).forEach((function(e){var t=S[a][l][e];c[e][n]+=w[e][t][p]*(1+i[r][n])}));else{["\u901a\u5e38\u6e3e\u8eab","\u65b9\u9663\u6e3e\u8eab"].includes(a)||["\u901a\u5e38\u80cc\u6c34","\u65b9\u9663\u80cc\u6c34"].includes(a)?c[a][n]+=w[a][l][p](o,a,l,p)*(1+i[r][n]):c[a][n]+=w[a][l][p]*(1+i[r][n])}}))})),a)return Object(m.jsx)("div",{style:{display:"flex",flexFlow:"column",padding:"0px 60px"},children:Object.keys(c).map((function(e){return Object.keys(c[e]).map((function(t){if(0!=c[e][t])return Object(m.jsxs)("div",{style:{fontSize:"12px",textAlign:"left",paddingBottom:"5px"},children:[e,"|",t,"|",c[e][t]>.1?c[e][t].toFixed(2):0]})}))}))});var r=x()(y),p=["\u901a\u5e38\u653b\u5203","\u901a\u5e38\u6e3e\u8eab","\u901a\u5e38\u80cc\u6c34","\u65b9\u9663\u653b\u5203","\u65b9\u9663\u6e3e\u8eab","\u65b9\u9663\u80cc\u6c34","EX\u653b\u5203"];return Object.keys(r).map((function(e){return r[e]=1})),Object.keys(c).map((function(e){return Object.keys(c[e]).map((function(t){c[e][t]>.1&&p.includes(e)&&(r[t]=r[t]*(1+c[e][t]/100))}))})),Object.keys(r).map((function(e){return r[e]=r[e].toFixed(2)})),r}n(109);var P=n(45),B=n(377),X=n(371),J={"\u30a2\u30b0\u30cb\u30b9":"\u706b","\u30f4\u30a1\u30eb\u30ca":"\u6c34","\u30c6\u30a3\u30bf\u30fc\u30f3":"\u571f","\u30bc\u30d4\u30e5\u30ed\u30b9":"\u98a8","\u30bc\u30a6\u30b9":"\u5149","\u30cf\u30c7\u30b9":"\u95c7","\u30b3\u30ed\u30c3\u30b5\u30b9":"\u706b","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"\u6c34","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"\u571f","\u30c6\u30a3\u30a2\u30de\u30c8":"\u98a8","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"\u5149","\u30bb\u30ec\u30b9\u30c8":"\u95c7","\u30a6\u30a3\u30eb\u30ca\u30b9":"\u706b","\u30ef\u30e0\u30c7\u30e5\u30b9":"\u6c34","\u30ac\u30ec\u30aa\u30f3":"\u571f","\u30a4\u30fc\u30a6\u30a3\u30a2":"\u98a8","\u30eb\u30aa\u30fc":"\u5149","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"\u95c7"},q=function(e,t,n,a,o){var s=function(e,i,o,s){var l=x()(n);console.log(l),"sixdragon"==i?Object.keys(l[e].sixdragon).map((function(t){return Object.keys(l[e].sixdragon[t]).map((function(n){return l[e].sixdragon[t][n].toggle=!1}))})):Object.keys(l[e]).map((function(t){return Object.keys(l[e][t]).map((function(n){return Object.keys(l[e][t][n]).forEach((function(a){"sixdragon"!==t&&(l[e][t][n][a].toggle=!1)}))}))})),l[e][i][o][s].toggle=!l[e][i][o][s].toggle,console.log(l),t(l),function(e,t){var n={"\u30a2\u30b0\u30cb\u30b9":"\u706b","\u30f4\u30a1\u30eb\u30ca":"\u6c34","\u30c6\u30a3\u30bf\u30fc\u30f3":"\u571f","\u30bc\u30d4\u30e5\u30ed\u30b9":"\u98a8","\u30bc\u30a6\u30b9":"\u5149","\u30cf\u30c7\u30b9":"\u95c7","\u30b3\u30ed\u30c3\u30b5\u30b9":"\u706b","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"\u6c34","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"\u571f","\u30c6\u30a3\u30a2\u30de\u30c8":"\u98a8","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"\u5149","\u30bb\u30ec\u30b9\u30c8":"\u95c7","\u30a6\u30a3\u30eb\u30ca\u30b9":"\u706b","\u30ef\u30e0\u30c7\u30e5\u30b9":"\u6c34","\u30ac\u30ec\u30aa\u30f3":"\u571f","\u30a4\u30fc\u30a6\u30a3\u30a2":"\u98a8","\u30eb\u30aa\u30fc":"\u5149","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"\u95c7"},a={sixdragon:"opti",opti:"opti",omega:"omega"},i=x()(I);Object.keys(e).map((function(t){return Object.keys(e[t]).map((function(o){return Object.keys(e[t][o]).map((function(s){return Object.keys(e[t][o][s]).map((function(l){var c=a[o],r=n[s];e[t][o][s][l].toggle&&(i[c][r]+=e[t][o][s][l].value/100)}))}))}))})),console.log(i),t(i)}(l,a)},l=Object(P.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,padding:"15px",fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(B.a),c={opti:[],omega:[],sixdragon:[]};return Object.keys(n[e]).map((function(t){return Object.keys(n[e][t]).map((function(a){return Object.keys(n[e][t][a]).forEach((function(r){if(("FRIEND"!=e||"sixdragon"!=t)&&o[J[a]]){console.log(a);var p=e,d=t,u=a,g=r,j=n[e][t][a][r].toggle,b="";b="sixdragon"==d?a+" "+r+"%":a+"Lv."+r,c[t].push(Object(m.jsx)(l,{title:Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)("a",{children:[Object(m.jsx)(X.a,{color:"inherit",children:"Information"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{style:{fontSize:"10px"},children:b})]})}),children:Object(m.jsx)("div",{style:{transform:"scale(1)",width:"100px",border:"0px solid black"},class:"tooltip button",value:b,onClick:function(){return s(p,d,u,g)},children:Object(m.jsx)("div",{style:{fontSize:"10px",textAlign:"center",backgroundColor:"#222222"},children:Object(m.jsx)("img",{style:{margin:"0",padding:"0",border:"0",width:"100%",height:"20px",objectPosition:"0% 15%",objectFit:"cover",opacity:j?1:.15},src:"/gbp/"+E[a]})})})}))}}))}))})),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("div",{class:"wrap-opti",children:c.opti}),Object(m.jsx)("div",{class:"wraup-omega",children:c.omega}),Object(m.jsx)("div",{class:"wrap-sixdragon",children:c.sixdragon})]})},U=n(379),G=function(e,t){return Object(m.jsx)(U.a,{size:"small",defaultValue:e,"aria-label":"Small",valueLabelDisplay:"auto",onChange:function(e,n){t(n)},min:0,max:100,step:10})},H=function(e,t){var n=function(e){var n=x()(f);n[e]=!n[e],t(n)};return Object(m.jsx)("dvi",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#666666",height:"30px",padding:"5px"},class:"weapon-element-wrapper",children:Object(m.jsx)(m.Fragment,{children:Object.keys(e).map((function(t){return e[t]?Object(m.jsx)("a",{onClick:function(){return n(t)},style:{backgroundColor:""},children:Object(m.jsx)("img",{style:{padding:"2.5px",width:"15px"},src:"/gbp/"+O[t]+".png"})}):Object(m.jsx)("a",{onClick:function(){return n(t)},style:{backgroundColor:""},children:Object(m.jsx)("img",{style:{padding:"2.5px",width:"15px",opacity:"0.5"},src:"/gbp/"+O[t]+".png"})})}))})})},K=function(e){var t={AW:{toggle:!1,icon:"images/WeaponSeries_Astral_Weapons_icon.png"},"\u7d42\u672b":{toggle:!1,icon:"images/25px-WeaponSeries_Dark_Opus_Weapons_icon.png"},"\u30bb\u30e9\u30d5\u30a3\u30c3\u30af\u30a6\u30a7\u30dd\u30f3":{toggle:!1,icon:"images/25px-WeaponSeries_Seraphic_Weapons_icon.png"}};return Object(m.jsx)("dvi",{style:{display:"flex",justifyContent:"space-evenly",backgroundColor:"#666666",width:"",height:"30px",padding:"5px"},class:"weapon-element-wrapper",children:Object(m.jsx)(m.Fragment,{children:Object.keys(t).map((function(e){return t[e].toggle?Object(m.jsx)("a",{style:{backgroundColor:""},children:Object(m.jsx)("img",{style:{padding:"2px",width:"22px"},src:"/gbp/"+t[e].icon})}):Object(m.jsx)("a",{style:{backgroundColor:""},children:Object(m.jsx)("img",{style:{padding:"2px",width:"22px",opacity:"0.5"},src:"/gbp/"+t[e].icon})})}))})})},V=function(e,t){var n=Object(P.a)((function(e){return{tooltip:{backgroundColor:"rgba(230,230,230,0.95)",opacity:.2,color:"rgba(0, 0, 0, 0.8)",maxWidth:"275px",width:"300px",fontSize:"10px",border:"1px solid #dadde9",padding:"20px"}}}))(B.a);return Object(m.jsx)("div",{children:Object.keys(e).map((function(t){var a=e[t].name;return console.log(a),Object(m.jsx)(n,{title:Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{class:"weapon-icon-wraper",children:Object(m.jsx)("img",{style:{width:"100px"},src:"/gbp/"+z[a].icon})}),Object(m.jsxs)("div",{class:"weapon-info-wraper",children:[Object(m.jsx)(X.a,{color:"inherit",children:a}),Object(m.jsx)("hr",{}),Object(m.jsx)("a",{children:z[a].element}),Object(m.jsx)("div",{style:{fontSize:"10px"},children:Object.keys(z[a].skill).map((function(e){return Object(m.jsx)("p",{style:{marginBottom:"0px"},children:z[a].skill[e].type})}))})]})]})}),children:Object(m.jsx)("div",{class:"btn-wrap",value:z[a].name,children:Object(m.jsx)("a",{style:{backgroundColor:"#333333",color:"#eeeeee"},class:"btn",children:z[a].name})})})}))})},Q=n(372),Y=n(197),Z=n(376),$=n(194),ee=n(193),te=n(84),ne=function(e,t){for(var n=[],a=["\u706b","\u6c34","\u571f","\u98a8","\u5149","\u95c7"],i={"\u706b":"#ff6666","\u6c34":"#668cff","\u571f":"#ffb366","\u98a8":"#057C27","\u5149":"#e6b800","\u95c7":"#8c66ff"},o={"\u706b":!1,"\u6c34":!1,"\u571f":!1,"\u98a8":!1,"\u5149":!1,"\u95c7":!1},s=function(i){var s=M(e,t,i,!1),l={name:String(i)};a.map((function(e){l[e]=s[e],50==i&&s[e]>1&&(o[e]=!0)})),n.push(l)},l=0;l<=100;l+=10)s(l);return Object(m.jsxs)(Q.a,{width:500,height:400,data:n,children:[a.map((function(e){if(o[e])return Object(m.jsx)(Y.a,{type:"monotone",dataKey:e,stroke:i[e],fillOpacity:0,fill:i[e]})})),Object(m.jsx)(Z.a,{strokeDasharray:"3 3"}),Object(m.jsx)($.a,{domain:[0,80]}),Object(m.jsx)(ee.a,{dataKey:"name"}),Object(m.jsx)(te.a,{})]})},ae=function(e,t,n,a){var o=Object(P.a)((function(e){return{tooltip:{backgroundColor:"rgba(230,230,230,0.95)",opacity:.2,color:"rgba(0, 0, 0, 0.8)",maxWidth:"275px",width:"300px",fontSize:"10px",border:"1px solid #dadde9",padding:"20px"}}}))(B.a);return Object(m.jsx)("div",{children:Object.keys(z).map((function(s){if(console.log(),a[z[s].element])return Object(m.jsx)(o,{title:Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{style:{justifyContent:"center"},class:"weapon-icon-wraper",children:Object(m.jsx)("img",{style:{width:"100px"},src:"/gbp/"+z[s].icon})}),Object(m.jsxs)("div",{style:{borderLeft:"solid 0px gray",paddingLeft:"20px"},class:"weapon-info-wraper",children:[Object(m.jsx)(X.a,{color:"inherit",children:s}),Object(m.jsx)("hr",{}),Object(m.jsx)("a",{children:z[s].element}),Object(m.jsx)("div",{style:{fontSize:"10px"},children:Object.keys(z[s].skill).map((function(e){return Object(m.jsx)("p",{style:{marginBottom:"0px"},children:z[s].skill[e].type})}))})]})]})}),children:Object(m.jsx)("div",{class:"btn-wrap",onClick:function(){return function(a){var i=x()(e),o=x()(R);if(o.name=a,Object.keys(i).length>9)n();else{var s=0;Object.keys(i).map((function(e){e!=String(s)||(s+=1)})),i[String(s)]=o,console.log(i),t(i)}}(z[s].name)},value:z[s].name,children:Object(m.jsx)("a",{class:"btn",children:z[s].name})})})}))})};var ie=function(){var e,t=i.a.useState({}),n=Object(c.a)(t,2),a=n[0],o=n[1],s=i.a.useState(60),r=Object(c.a)(s,2),p=r[0],d=r[1],u=i.a.useState(x()(I)),g=Object(c.a)(u,2),b=g[0],y=g[1],O=i.a.useState(x()(N)),k=Object(c.a)(O,2),v=k[0],_=k[1],w=i.a.useState(x()(f)),S=Object(c.a)(w,2),C=S[0],W=S[1],E=i.a.useState([]),L=Object(c.a)(E,2),A=(L[0],L[1],i.a.useState(!0)),F=Object(c.a)(A,2),D=F[0],T=F[1],R=Object(h.a)("root",{preventScroll:!0}),z=Object(c.a)(R,4),P=z[0],B=z[1],X=z[2];return z[3],Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(P,{children:Object(m.jsxs)("div",{style:{backgroundColor:"#fff",padding:"60px 100px",borderRadius:"10px"},children:[Object(m.jsx)("h1",{children:"\u8b66\u544a:\u6b66\u5668\u306f10\u672c\u307e\u3067\u3067\u3059"}),Object(m.jsx)("p",{children:"\u66f4\u65b0\u3057\u3066EquipedList\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(m.jsx)("button",{onClick:X,children:"CLOSE"})]})}),j(o),Object(m.jsx)("div",{class:"wrap-app",style:{position:"relative",height:"auto",width:"100%"},children:Object(m.jsxs)("div",{class:"App",style:(e={minHeight:"1000px",maxWidth:"1500px",marginLeft:"auto",marginRight:"auto",display:"flex"},Object(l.a)(e,"display","-webkit-flex"),Object(l.a)(e,"alignItems","start"),e),children:[Object(m.jsxs)("div",{class:"app-weapon-select-wrap",children:[H(C,W),ae(a,o,B,C)]}),Object(m.jsxs)("div",{class:"app-equiped",children:[K(),V(a)]}),Object(m.jsxs)("div",{class:"weap-compute-result",style:{flexGrow:"1"},children:[Object(m.jsx)("div",{style:{display:"flex",backgroundColor:"#666666",height:"40px",width:"100%"}}),Object(m.jsx)("div",{class:"wrap-chart",style:{display:"flex",width:"100%",justifyContent:"center"},children:ne(a,b)}),Object(m.jsx)("div",{class:"wrap-hp-slider",style:{display:"flex",width:"100%",justifyContent:"center"},children:Object(m.jsxs)("div",{class:"wrap-slider",style:{width:"20%"},children:[Object(m.jsx)("div",{style:{textAlign:"center"},children:"RESULT:"+p}),G(p,d)]})}),Object(m.jsx)("div",{class:"wrap-compute-skill",style:{width:"100%",display:"flex",justifyContent:"center"},children:M(a,b,p)})]}),Object(m.jsxs)("div",{class:"wrap-summons",style:{width:"100px",marginLeft:"auto",border:"solid 0px black"},children:[Object(m.jsx)("div",{class:"summons-head",onClick:function(){return T(!D)},style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"40px",backgroundColor:"#444444",color:"white"},children:Object(m.jsx)("a",{style:{verticalAlign:"middle",textAlign:"center",backgroundColor:"#557799",display:"block",width:"90%",height:"60%"},children:Object(m.jsx)("span",{style:{},children:D?"MAIN":"SUPPORT"})})}),D&&q("MAIN",_,v,y,C),!D&&q("FRIEND",_,v,y,C)]})]})}),Object(m.jsx)("div",{class:"wrap-footer",style:{position:"relative",height:"auto",width:"100%",backgroundColor:"#333333"},children:Object(m.jsx)("div",{class:"Footer",style:{maxWidth:"1500px",marginLeft:"auto",marginRight:"auto",display:"flex",border:"solid 0px black"},children:Object(m.jsx)("span",{style:{width:"100%",color:"white",textAlign:"center"},children:"Granblue Portal Produced By @sra_norahs"})})})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,380)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[351,1,2]]]);
//# sourceMappingURL=main.027ca92f.chunk.js.map