(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{112:function(e,t,n){},114:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(24),s=n.n(o),r=(n(215),n(29)),l=n(17),c=(n(216),n(172)),p=n(173),m=n(174),u=n(200),d=n(1),g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(d.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(d.jsx)("a",{children:this.state.date.toLocaleTimeString()})})}}]),n}(i.a.Component),j=n(388),b=n(198);Object(b.a)({palette:{neutral:{main:"647488",contrastText:"#fff"}}}),n(222);n(223),n(112);var x,h,_=n(5),O=n.n(_),y=n(202),f={"\u706b":0,"\u6c34":0,"\u571f":0,"\u98a8":0,"\u5149":0,"\u95c7":0},k={"\u706b":!1,"\u6c34":!1,"\u571f":!1,"\u98a8":!1,"\u5149":!1,"\u95c7":!1},v={"\u706b":"images/Icon_Element_Fire","\u6c34":"images/Icon_Element_Water","\u571f":"images/Icon_Element_Earth","\u98a8":"images/Icon_Element_Wind","\u5149":"images/Icon_Element_Light","\u95c7":"images/Icon_Element_Dark"},S={"\u901a\u5e38\u653b\u5203":O()(f),"\u901a\u5e38\u80cc\u6c34":O()(f),"\u901a\u5e38\u6e3e\u8eab":O()(f),"\u65b9\u9663\u6e3e\u8eab":O()(f),"\u65b9\u9663\u80cc\u6c34":O()(f),"\u65b9\u9663\u653b\u5203":O()(f),"EX\u653b\u5203":O()(f),"\u6280\u5de7":O()(f),"DA\u7387":O()(f),"TA\u7387":O()(f),"\u30a2\u30d3\u4e0e\u30c0\u30e1":O()(f),"D\u4e0a\u9650":O()(f),"\u4e0e\u30c0\u30e1\u30fc\u30b8":O()(f),"\u5bfe\u6709\u5229\u4e0e\u30c0\u30e1":O()(f)},w=function(e,t,n,a){var i={"\u901a\u5e38\u6e3e\u8eab":{"\u4e2d":65,"\u5927":56.4},"\u65b9\u9663\u6e3e\u8eab":{"\u4e2d":60.4,"\u5927":56.4},"\u5f37\u58ee":{"\u4e2d":53.7,"\u5927":53.7}}[t][n];if(e<25)return 1e-4;var o=0;return o=a<=15?a:15+.4*(a+-15),Math.pow(e/(i-o),2.9)+2.1},C=function(e,t,n,a){var i={"\u901a\u5e38\u80cc\u6c34":{"\u5c0f":{1:.5,2:1.1,3:1.7,4:2.3,5:2.9,6:3.5,7:4.1,8:4.7,9:5.3,10:6,11:6.2,12:6.4,13:6.6,14:6.8,15:7,16:7.1,17:7.2,18:7.3,19:7.4,20:7.5},"\u4e2d":{1:1,2:1.75,3:2.5,4:3.25,5:4,6:4.75,7:5.5,8:6.25,9:7,10:8,11:8.4,12:8.8,13:9.2,14:9.6,15:10,16:10.2,17:10.4,18:10.6,19:10.8,20:11},"\u5927":{1:3,2:4,3:5,4:5.5,5:6,6:6.5,7:7,8:8,9:9,10:10,11:10.5,12:11,13:11.5,14:12,15:12.5,16:12.7,17:12.9,18:13.1,19:13.3,20:13.5}},"\u65b9\u9663\u80cc\u6c34":{"\u5c0f":{1:.5,2:1.1,3:1.7,4:2.3,5:2.9,6:3.5,7:4.1,8:4.7,9:5.3,10:6,11:6.2,12:6.4,13:6.6,14:6.8,15:7,16:7.1,17:7.2,18:7.3,19:7.4,20:7.5},"\u4e2d":{1:1,2:1.75,3:2.5,4:3.25,5:4,6:4.75,7:5.5,8:6.25,9:7,10:8,11:8.4,12:8.8,13:9.2,14:9.6,15:10,16:10.2,17:10.4,18:10.6,19:10.8,20:11},"\u5927":{1:3,2:4,3:5,4:5.5,5:6,6:6.5,7:7,8:8,9:9,10:10,11:10.5,12:11,13:11.5,14:12,15:12.5,16:12.7,17:12.9,18:13.1,19:13.3,20:13.5}}}[t][n][a],o=e/100;return(2*Math.pow(o,2)-5*o+3)*i>0?(2*Math.pow(o,2)-5*o+3)*i:1e-4},I={"\u901a\u5e38\u653b\u5203":{"\u5c0f":{10:10,15:12,20:12.5},"\u4e2d":{10:12,15:14.5,20:15.5},"\u5927":{10:15,15:18,20:20},II:{10:16,15:20,20:22},III:{10:17,15:22,20:0},"\u7279\u5927":{10:18,15:23,20:25.5},"\u66b4\u541b":{10:15,15:18,20:20},"\u66b4\u541bII":{10:18,15:23,20:25.5},"\u30d0\u30cf":{10:30,15:32},"\u52ab\u98a8\u306e\u653b\u5203":{10:25,15:33}},"\u65b9\u9663\u653b\u5203":{"\u5c0f":{10:10,15:12,20:12.5},"\u4e2d":{10:12,15:14.5,20:15.5},"\u5927":{10:15,15:18,20:20},II:{10:15,15:18,20:20}},"EX\u653b\u5203":{"\u5c0f":{10:10,15:10,20:10},"\u4e2d":{10:12,15:14.5,20:0},"\u5927":{10:15,15:18,20:21},"\u8987\u9053":{10:18,15:23,20:25.5},"\u865a\u7a7a":{10:20,15:20,20:20},"\u652f\u914d\u8005":{10:25,15:33,20:37}},"\u6280\u5de7":{"\u5c0f":{10:2,15:3,20:4},"\u4e2d":{10:5,15:6.5,20:7.5},"\u5927":{10:8,15:10,20:11},II:{10:10,15:12,20:0},"\u6c34\u798d\u306e\u6280\u5de7":{10:20,15:20,20:20}},"\u901a\u5e38\u6e3e\u8eab":{"\u5c0f":{10:0,15:5.59,20:0},"\u4e2d":{10:w,15:w,20:w},"\u5927":{10:w,15:w,20:w},II:{10:0,15:17.79,20:0},"\u5f37\u58ee":{10:w,15:w,20:w},"\u546a\u89e6\u306e\u6e3e\u8eab":{10:18.14,15:22.41,20:0}},"\u65b9\u9663\u6e3e\u8eab":{"\u4e2d":{10:w,15:w,20:w},"\u5927":{10:w,15:w,20:w}},"\u901a\u5e38\u80cc\u6c34":{"\u5c0f":{10:C,15:C,20:C},"\u4e2d":{10:C,15:C,20:C},"\u5927":{10:C,15:C,20:C},"\u708e\u5a01\u306e\u80cc\u6c34":{10:2,15:3,20:0}},"\u65b9\u9663\u80cc\u6c34":{"\u5c0f":{10:C,15:C,20:C},"\u4e2d":{10:C,15:C,20:C},"\u5927":{10:C,15:C,20:C}},"TA\u7387":{"\u4e71\u821e\u5c0f":{10:1.35,15:2,20:0},"\u4e71\u821e\u4e2d":{10:2.15,15:2.9,20:3.65},"\u5c0f":{10:2,15:3.5,20:0},"\u4e2d":{10:3.5,15:5,20:6},"\u5927":{10:5,15:7,20:0},"\u30d0\u30cf":{10:5,15:8,20:0},"\u767d\u306e\u8a93\u7d04":{10:0,15:14,20:0},"\u30aa\u30e1\u30ac\u95d8\u4e89":{10:20,15:0,20:0}}},W=(x={"\u901a\u5e38\u5239\u90a3":{"\u7279\u5927":{"\u6280\u5de7":"II","\u901a\u5e38\u653b\u5203":"\u7279\u5927"},"\u4e2d":{"\u6280\u5de7":"\u4e2d","\u901a\u5e38\u653b\u5203":"\u4e2d"}},"\u901a\u5e38\u4e09\u624b":{"\u5c0f":{"TA\u7387":"\u5c0f"},"\u5927":{"TA\u7387":"\u5927"}},"\u901a\u5e38\u4e71\u821e":{"\u4e2d":{"TA\u7387":"\u4e2d","\u901a\u5e38\u653b\u5203":"\u4e2d"}},"\u4fee\u7f85":{"\u5927":{"\u901a\u5e38\u653b\u5203":"\u5927"}},"\u901a\u5e38\u514b\u5df1":{"\u5c0f":{"\u6280\u5de7":"\u5c0f"},"\u4e2d":{"\u6280\u5de7":"\u4e2d"},"\u5927":{"\u6280\u5de7":"\u5927"}}},Object(r.a)(x,"\u4fee\u7f85",{"\u5927":{"\u901a\u5e38\u653b\u5203":"\u5927"}}),Object(r.a)(x,"\u901a\u5e38\u795e\u5a01",{"\u5927":{"\u901a\u5e38\u653b\u5203":"\u5927"},"\u4e2d":{"\u901a\u5e38\u653b\u5203":"\u4e2d"},"\u5c0f":{"\u901a\u5e38\u653b\u5203":"\u5c0f"}}),Object(r.a)(x,"\u65b9\u9663\u795e\u5a01",{"\u5c0f":{"\u65b9\u9663\u653b\u5203":"\u5c0f"},"\u4e2d":{"\u65b9\u9663\u653b\u5203":"\u4e2d"},"\u5927":{"\u65b9\u9663\u653b\u5203":"\u5927"}}),Object(r.a)(x,"\u65b9\u9663\u514b\u5df1",{"\u5c0f":{"\u6280\u5de7":"\u5c0f"},"\u4e2d":{"\u6280\u5de7":"\u4e2d"},"\u5927":{"\u6280\u5de7":"\u5927"}}),x),E={opti:O()(f),omega:O()(f),None:O()(f)},A={150:{value:150,toggle:!1},140:{value:140,toggle:!1}},F={140:{value:140,toggle:!1},120:{value:120,toggle:!1}},L={"\u30a2\u30b0\u30cb\u30b9":"images/summon/Summon_b_2040094000_02.png","\u30f4\u30a1\u30eb\u30ca":"images/summon/Summon_b_2040100000_02.png","\u30c6\u30a3\u30bf\u30fc\u30f3":"images/summon/Summon_b_2040084000_02.png","\u30bc\u30d4\u30e5\u30ed\u30b9":"images/summon/Summon_b_2040098000_02.png","\u30bc\u30a6\u30b9":"images/summon/Summon_b_2040080000_02.png","\u30cf\u30c7\u30b9":"images/summon/Summon_b_2040090000_02.png","\u30b3\u30ed\u30c3\u30b5\u30b9":"images/summon/Summon_b_2040034000_02.png","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"images/summon/Summon_b_2040028000_02.png","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"images/summon/Summon_b_2040027000_02.png","\u30c6\u30a3\u30a2\u30de\u30c8":"images/summon/Summon_b_2040020000_02.png","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"images/summon/Summon_b_2040047000_02.png","\u30bb\u30ec\u30b9\u30c8":"images/summon/Summon_b_2040046000_02.png","\u30a6\u30a3\u30eb\u30ca\u30b9":"images/summon/218610.png","\u30ef\u30e0\u30c7\u30e5\u30b9":"images/summon/218609.png","\u30ac\u30ec\u30aa\u30f3":"images/summon/218559.png","\u30a4\u30fc\u30a6\u30a3\u30a2":"images/summon/218608.png","\u30eb\u30aa\u30fc":"images/summon/218606.png","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"images/summon/06e572c1db4f20de7646efd9c180c90b.jpg"},T={20:{value:20,toggle:!1},10:{value:10,toggle:!1}},D={"\u30a2\u30b0\u30cb\u30b9":O()(A),"\u30f4\u30a1\u30eb\u30ca":O()(A),"\u30c6\u30a3\u30bf\u30fc\u30f3":O()(A),"\u30bc\u30d4\u30e5\u30ed\u30b9":O()(A),"\u30bc\u30a6\u30b9":O()(A),"\u30cf\u30c7\u30b9":O()(A)},N={"\u30b3\u30ed\u30c3\u30b5\u30b9":O()(F),"\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":O()(F),"\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":O()(F),"\u30c6\u30a3\u30a2\u30de\u30c8":O()(F),"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":O()(F),"\u30bb\u30ec\u30b9\u30c8":O()(F)},q={"\u30a6\u30a3\u30eb\u30ca\u30b9":O()(T),"\u30ef\u30e0\u30c7\u30e5\u30b9":O()(T),"\u30ac\u30ec\u30aa\u30f3":O()(T),"\u30a4\u30fc\u30a6\u30a3\u30a2":O()(T),"\u30eb\u30aa\u30fc":O()(T),"\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":O()(T)},R={opti:O()(D),omega:O()(N),sixdragon:O()(q)},P={MAIN:O()(R),FRIEND:O()(R)},z={name:"",Lv:1,SLv:1,Bonus:0,Tag:"",EX_Skill:{1:{name:"",lank:""},2:{name:"",lank:""}}},M=["\u7d76\u5bfe\u5426\u5b9a\u306e\u5927\u938c","\u7d76\u5bfe\u5426\u5b9a\u306e\u6756","\u7d76\u5bfe\u5426\u5b9a\u306e\u5805\u7434","\u7d76\u5bfe\u5426\u5b9a\u306e\u69cd","\u7d76\u5bfe\u5426\u5b9a\u306e\u5263","\u7d76\u5bfe\u5426\u5b9a\u306e\u592a\u5200","\u6c38\u9060\u62d2\u7d76\u306e\u5927\u938c","\u6c38\u9060\u62d2\u7d76\u306e\u6756","\u6c38\u9060\u62d2\u7d76\u306e\u5805\u7434","\u6c38\u9060\u62d2\u7d76\u306e\u69cd","\u6c38\u9060\u62d2\u7d76\u306e\u5263","\u6c38\u9060\u62d2\u7d76\u306e\u592a\u5200"],B=["\u30bd\u30eb\u30ec\u30e0\u30ca\u30f3\u30c8","\u30d5\u30a7\u30a4\u30c8\u30ec\u30b9","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb\u30d6\u30e9\u30f3\u30c1","\u30a4\u30ce\u30bb\u30f3\u30c8\u30e9\u30f4","\u30ed\u30f3\u30b4\u30df\u30cb\u30a2\u30c9","\u9ed2\u9280\u306e\u6ec5\u722a"],U=["\u30bd\u30fc\u30c9\u30aa\u30d6\u30df\u30ab\u30a8\u30eb","\u30ef\u30f3\u30c9\u30aa\u30d6\u30ac\u30d6\u30ea\u30a8\u30eb","\u30b0\u30ed\u30fc\u30d6\u30aa\u30d6\u30a6\u30ea\u30a8\u30eb","\u30ea\u30f3\u30b0\u30aa\u30d6\u30e9\u30d5\u30a1\u30a8\u30eb","\u30cf\u30fc\u30d7\u30aa\u30d6\u30cf\u30eb\u30ef\u30a2\u30e0\u30eb","\u30b5\u30a4\u30b9\u30aa\u30d6\u30d9\u30ea\u30a2\u30eb"],X=(h={"\u30a4\u30af\u30b5\u30d0":{name:"\u30a4\u30af\u30b5\u30d0",element:"\u706b",icon:"images/weapon/Weapon_b_1040906400.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u7d76\u62f3":{name:"\u7d76\u62f3",element:"\u706b",icon:"images/weapon/Weapon_b_1040612700.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u5239\u90a3",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u4e09\u624b",lank:"\u5c0f",aura:"opti"}}},"\u30ac\u30ea\u30ec\u30aa\u30b5\u30a4\u30c8":{name:"\u30ac\u30ea\u30ec\u30aa\u30b5\u30a4\u30c8",element:"\u6c34",icon:"images/weapon/Weapon_b_1040211600.png",skill:{1:{e:"\u6c34",type:"\u901a\u5e38\u514b\u5df1",lank:"\u4e2d",aura:"opti"},2:{e:"\u6c34",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u5927",aura:"opti"}}},"\u865a\u7121\u4e43\u54ed\u98a8":{name:"\u865a\u7121\u4e43\u54ed\u98a8",element:"\u98a8",icon:"images/weapon/Weapon_b_1040212700.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u5927",aura:"opti"}}},"\u30a8\u30c7\u30f3":{name:"\u30a8\u30c7\u30f3",element:"\u5149",icon:"images/weapon/Weapon_b_1040207000.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u5149",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30a2\u30fc\u30af":{name:"\u30a2\u30fc\u30af",element:"\u5149",icon:"images/weapon/Weapon_b_1040112500.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u5239\u90a3",lank:"\u7279\u5927",aura:"opti"}}},"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8\u30bd\u30fc\u30c9\u30de\u30b0\u30ca":{name:"\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8\u30bd\u30fc\u30c9\u30de\u30b0\u30ca",element:"\u5149",icon:"images/weapon/Luminiera_Sword_Omega.png",skill:{1:{e:"\u5149",type:"\u65b9\u9663\u653b\u5203",lank:"\u4e2d",aura:"omega"},2:{e:"\u5149",type:"\u901a\u5e38\u653b\u5203",lank:"\u5c0f",aura:"opti"}}},"\u6247\u629c":{name:"\u6247\u629c",element:"\u6c34",icon:"images/weapon/Weapon_b_1040704800.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u592a\u6b73\u7cbe\u5f13":{name:"\u592a\u6b73\u7cbe\u5f13",element:"\u6c34",icon:"images/weapon/Weapon_b_1040708700.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u653b\u5203",lank:"\u7279\u5927",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u6e3e\u8eab",lank:"\u4e2d",aura:"opti"}}},"\u30b0\u30e9\u30fc\u30b7\u30fc\u30b6\u30fc":{name:"\u30b0\u30e9\u30fc\u30b7\u30fc\u30b6\u30fc",element:"\u95c7",icon:"images/weapon/Weapon_b_1040200700.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u653b\u5203",lank:"II",aura:"opti"},2:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u4e2d",aura:"opti"}}},"\u30a8\u30c3\u30b1\u30b6\u30c3\u30af\u30b9":{name:"\u30a8\u30c3\u30b1\u30b6\u30c3\u30af\u30b9",element:"\u706b",icon:"images/weapon/Ecke_Sachs.png",skill:{1:{e:"\u706b",type:"\u901a\u5e38\u5239\u90a3",lank:"\u4e2d",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"}}},"\u30c9\u30b9":{name:"\u30c9\u30b9",element:"\u706b",icon:"images/weapon/Weapon_b_1040112600.png",skill:{1:{e:"\u706b",type:"\u6280\u5de7",lank:"\u5c0f",aura:"opti"},2:{e:"\u706b",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5927",aura:"opti"}}},"\u30bd\u30eb\u30ec\u30e0\u30ca\u30f3\u30c8":{name:"\u30bd\u30eb\u30ec\u30e0\u30ca\u30f3\u30c8",element:"\u706b",icon:"images/weapon/Weapon_b_1040311800.png",skill:{1:{e:"\u706b",type:"EX\u653b\u5203",lank:"\u652f\u914d\u8005",aura:"None"}}},"\u30a4\u30ce\u30bb\u30f3\u30c8\u30e9\u30f4":{name:"\u30a4\u30ce\u30bb\u30f3\u30c8\u30e9\u30f4",element:"\u98a8",icon:"images/weapon/Weapon_b_1040811600.png",skill:{1:{e:"\u98a8",type:"EX\u653b\u5203",lank:"\u652f\u914d\u8005",aura:"None"}}},"\u30ea\u30f3\u30b0\u30aa\u30d6\u30e9\u30d5\u30a1\u30a8\u30eb":{name:"\u30ea\u30f3\u30b0\u30aa\u30d6\u30e9\u30d5\u30a1\u30a8\u30eb",element:"\u98a8",icon:"images/weapon/Weapon_b_1040709100.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u795e\u5a01",lank:"\u5c0f",aura:"opti"}}},"\u6ce1\u672b\u5922\u5e7b":{name:"\u6ce1\u672b\u5922\u5e7b",element:"\u98a8",icon:"images/weapon/Weapon_b_1040022000.png",skill:{1:{e:"\u98a8",type:"\u6280\u5de7",lank:"II",aura:"opti"},2:{e:"\u98a8",type:"\u901a\u5e38\u653b\u5203",lank:"\u4e2d",aura:"opti"}}},"\u7b2c\u516b\u7dbf\u7f8a\u884c\u5203":{name:"\u7b2c\u516b\u7dbf\u7f8a\u884c\u5203",element:"\u98a8",icon:"images/weapon/Weapon_b_1040313100.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u4e71\u821e",lank:"\u4e2d",aura:"opti"}}},"\u5bbf\u547d\u9244\u62f3":{name:"\u5bbf\u547d\u9244\u62f3",element:"\u98a8",icon:"images/weapon/462px-Weapon_b_1040614800.png",skill:{1:{e:"\u98a8",type:"\u4fee\u7f85",lank:"\u5927",aura:"opti"},2:{e:"\u98a8",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"}}},"\u30e9\u30b9\u30c8\u30b9\u30c8\u30fc\u30e0\u30cf\u30fc\u30d7":{name:"\u30e9\u30b9\u30c8\u30b9\u30c8\u30fc\u30e0\u30cf\u30fc\u30d7",element:"\u98a8",icon:"images/weapon/462px-Last_Storm_Harp.png",skill:{1:{e:"\u98a8",type:"\u65b9\u9663\u6e3e\u8eab",lank:"\u4e2d",aura:"omega"},2:{e:"\u98a8",type:"\u6280\u5de7",lank:"\u5927",aura:"omega"}}},"\u30bf\u30a2\u30ed\u30de\u30b5\u30e9":{name:"\u30bf\u30a2\u30ed\u30de\u30b5\u30e9",element:"\u95c7",icon:"images/weapon/Weapon_b_1040615400.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u653b\u5203",lank:"\u4e2d",aura:"opti"},2:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5c0f",aura:"opti"},3:{e:"\u95c7",type:"\u4fee\u7f85",lank:"\u5927",aura:"opti"}}},"\u65b9\u5929\u753b\u621f":{name:"\u65b9\u5929\u753b\u621f",element:"\u95c7",icon:"images/weapon/Sky_Piercer.png",skill:{1:{e:"\u95c7",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5927",aura:"opti"}}},"\u7d76\u5bfe\u5426\u5b9a\u306e\u5263":{name:"\u7d76\u5bfe\u5426\u5b9a\u306e\u5263",element:"\u5149",icon:"images/weapon/Weapon_b_1040017000.png",skill:{1:{e:"\u5149",type:"\u901a\u5e38\u795e\u5a01",lank:"\u5927",aura:"opti"},2:{},3:{}}},"\u30c6\u30a3\u30a2\u30de\u30c8\u30dc\u30eb\u30c8\u30de\u30b0\u30ca":{name:"\u30c6\u30a3\u30a2\u30de\u30c8\u30dc\u30eb\u30c8\u30de\u30b0\u30ca",element:"\u98a8",icon:"images/weapon/Tiamat_Bolt_Omega.png",skill:{1:{e:"\u98a8",type:"\u65b9\u9663\u80cc\u6c34",lank:"\u5c0f",aura:"omega"},2:{e:"\u98a8",type:"\u65b9\u9663\u653b\u5203",lank:"\u4e2d",aura:"omega"},3:{}}},"\u8f1d\u7f85\u714c\u9583\u6756":{name:"\u8f1d\u7f85\u714c\u9583\u6756",element:"\u98a8",icon:"images/weapon/Weapon_b_1040418000.png",skill:{1:{e:"\u98a8",type:"\u65b9\u9663\u795e\u5a01",lank:"\u5c0f",aura:"omega"},2:{e:"\u98a8",type:"\u65b9\u9663\u514b\u5df1",lank:"\u4e2d",aura:"omega"},3:{}}}},Object(r.a)(h,"\u65b9\u5929\u753b\u621f",{name:"\u65b9\u5929\u753b\u621f",element:"\u98a8",icon:"images/weapon/Sky_Piercer.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u80cc\u6c34",lank:"\u5927",aura:"opti"}}}),Object(r.a)(h,"\u7d76\u5bfe\u5426\u5b9a\u306e\u69cd",{name:"\u7d76\u5bfe\u5426\u5b9a\u306e\u69cd",element:"\u98a8",icon:"images/weapon/Weapon_b_1040212500.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u795e\u5a01",lank:"\u5927",aura:"opti"}}}),Object(r.a)(h,"\u6c38\u9060\u62d2\u7d76\u306e\u69cd",{name:"\u6c38\u9060\u62d2\u7d76\u306e\u69cd",element:"\u98a8",icon:"images/weapon/Weapon_b_1040212600.png",skill:{1:{e:"\u98a8",type:"\u65b9\u9663\u795e\u5a01",lank:"\u5927",aura:"omega"}}}),Object(r.a)(h,"\u30c6\u30a3\u30a2\u30de\u30c8\u30ac\u30f3\u30c8\u30ec\u30de\u30b0\u30ca",{name:"\u30c6\u30a3\u30a2\u30de\u30c8\u30ac\u30f3\u30c8\u30ec\u30de\u30b0\u30ca",element:"\u98a8",icon:"images/weapon/Tiamat_Gauntlet_Omega.png",skill:{1:{e:"\u98a8",type:"\u65b9\u9663\u653b\u5203",lank:"\u5927",aura:"omega"}}}),Object(r.a)(h,"\u30a8\u30bf\u30fc\u30ca\u30eb\u30e9\u30f4",{name:"\u30a8\u30bf\u30fc\u30ca\u30eb\u30e9\u30f4",element:"\u98a8",icon:"images/weapon/Weapon_b_1040105400.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u653b\u5203",lank:"III",aura:"opti"},2:{e:"\u98a8",type:"\u901a\u5e38\u4e71\u821e",lank:"\u4e2d",aura:"opti"}}}),Object(r.a)(h,"\u30a4\u30fc\u30a6\u30a3\u30a2\u30d3\u30fc\u30af",{name:"\u30a4\u30fc\u30a6\u30a3\u30a2\u30d3\u30fc\u30af",element:"\u98a8",icon:"images/weapon/Weapon_b_1040912400.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u653b\u5203",lank:"\u52ab\u98a8\u306e\u653b\u5203",aura:"None"}}}),Object(r.a)(h,"\u30eb\u30d5\u30a7\u30a4",{name:"\u30eb\u30d5\u30a7\u30a4",element:"\u98a8",icon:"images/weapon/Le_Fay.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u653b\u5203",lank:"\u66b4\u541b",aura:"opti"},2:{e:"\u98a8",type:"\u901a\u5e38\u4e09\u624b",lank:"\u5927",aura:"opti"}}}),Object(r.a)(h,"\u9752\u7adc\u90aa\u69cd\u738b",{name:"\u9752\u7adc\u90aa\u69cd\u738b",element:"\u98a8",icon:"images/weapon/Qinglong_Spear_Regus.png",skill:{1:{e:"\u98a8",type:"\u901a\u5e38\u653b\u5203",lank:"II",aura:"opti"},2:{e:"\u98a8",type:"\u6280\u5de7",lank:"\u4e2d",aura:"opti"}}}),h);function H(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=t;console.log(i);var o=n,s={},r=1;Object.keys(e).forEach((function(t){s[r]=X[e[t].name],s[r].skill_level="15",r+=1}));var l=JSON.parse(JSON.stringify(S));if(Object.keys(s).forEach((function(e){Object.keys(s[e].skill).forEach((function(t){if(void 0!=s[e].skill[t].e){var n=s[e].skill[t].e,a=s[e].skill[t].type,r=s[e].skill[t].lank,c=s[e].skill[t].aura,p=s[e].skill_level;if(Object.keys(W).includes(a))Object.keys(W[a][r]).forEach((function(e){var t=W[a][r][e];l[e][n]+=I[e][t][p]*(1+i[c][n])}));else{["\u901a\u5e38\u6e3e\u8eab","\u65b9\u9663\u6e3e\u8eab"].includes(a)||["\u901a\u5e38\u80cc\u6c34","\u65b9\u9663\u80cc\u6c34"].includes(a)?l[a][n]+=I[a][r][p](o,a,r,p)*(1+i[c][n]):l[a][n]+=I[a][r][p]*(1+i[c][n])}}}))})),a)return Object(d.jsx)("div",{style:{display:"flex",flexFlow:"column",padding:"0px 60px"},children:Object.keys(l).map((function(e){return Object.keys(l[e]).map((function(t){if(0!=l[e][t])return Object(d.jsxs)("div",{style:{fontSize:"12px",textAlign:"left",paddingBottom:"5px"},children:[e,"|",t,"|",l[e][t]>.1?l[e][t].toFixed(2):0]})}))}))});var c=O()(f),p=["\u901a\u5e38\u653b\u5203","\u901a\u5e38\u6e3e\u8eab","\u901a\u5e38\u80cc\u6c34","\u65b9\u9663\u653b\u5203","\u65b9\u9663\u6e3e\u8eab","\u65b9\u9663\u80cc\u6c34","EX\u653b\u5203"];return Object.keys(c).map((function(e){return c[e]=1})),Object.keys(l).map((function(e){return Object.keys(l[e]).map((function(t){l[e][t]>.1&&p.includes(e)&&(c[t]=c[t]*(1+l[e][t]/100)),l[e][t]>.1&&"\u6280\u5de7"==e&&l[e][t]>=100&&(c[t]=1.5*c[t])}))})),Object.keys(c).map((function(e){return c[e]=c[e].toFixed(2)})),c}n(114);var J=n(20),G=n(386),K=n(377),Q={"\u30a2\u30b0\u30cb\u30b9":"\u706b","\u30f4\u30a1\u30eb\u30ca":"\u6c34","\u30c6\u30a3\u30bf\u30fc\u30f3":"\u571f","\u30bc\u30d4\u30e5\u30ed\u30b9":"\u98a8","\u30bc\u30a6\u30b9":"\u5149","\u30cf\u30c7\u30b9":"\u95c7","\u30b3\u30ed\u30c3\u30b5\u30b9":"\u706b","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"\u6c34","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"\u571f","\u30c6\u30a3\u30a2\u30de\u30c8":"\u98a8","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"\u5149","\u30bb\u30ec\u30b9\u30c8":"\u95c7","\u30a6\u30a3\u30eb\u30ca\u30b9":"\u706b","\u30ef\u30e0\u30c7\u30e5\u30b9":"\u6c34","\u30ac\u30ec\u30aa\u30f3":"\u571f","\u30a4\u30fc\u30a6\u30a3\u30a2":"\u98a8","\u30eb\u30aa\u30fc":"\u5149","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"\u95c7"};function V(e){var t=e.number,n=e.main_or_friend,a=e.parentSetStateSmnToggle,o=e.parent_state_smn_toggle[t],s=e.parentSetStateUpdateAura,r=e.parent_state_search_element,l=e.parent_state_list_aura_boost,c=function(n,i,r,c){var p=O()(e.parent_state_smn_toggle),m=O()(o);console.log(m),"sixdragon"==i?Object.keys(m[n].sixdragon).map((function(e){return Object.keys(m[n].sixdragon[e]).map((function(t){return m[n].sixdragon[e][t].toggle=!1}))})):Object.keys(m[n]).map((function(e){return Object.keys(m[n][e]).map((function(t){return Object.keys(m[n][e][t]).forEach((function(a){"sixdragon"!==e&&(m[n][e][t][a].toggle=!1)}))}))})),m[n][i][r][c].toggle=!m[n][i][r][c].toggle,console.log(m),p[t]=m,console.log(p),a(p),function(e,t,n,a){var i=e[a],o=O()(t),s={"\u30a2\u30b0\u30cb\u30b9":"\u706b","\u30f4\u30a1\u30eb\u30ca":"\u6c34","\u30c6\u30a3\u30bf\u30fc\u30f3":"\u571f","\u30bc\u30d4\u30e5\u30ed\u30b9":"\u98a8","\u30bc\u30a6\u30b9":"\u5149","\u30cf\u30c7\u30b9":"\u95c7","\u30b3\u30ed\u30c3\u30b5\u30b9":"\u706b","\u30ea\u30f4\u30a1\u30a4\u30a2\u30b5\u30f3":"\u6c34","\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb":"\u571f","\u30c6\u30a3\u30a2\u30de\u30c8":"\u98a8","\u30b7\u30e5\u30f4\u30a1\u30ea\u30a8":"\u5149","\u30bb\u30ec\u30b9\u30c8":"\u95c7","\u30a6\u30a3\u30eb\u30ca\u30b9":"\u706b","\u30ef\u30e0\u30c7\u30e5\u30b9":"\u6c34","\u30ac\u30ec\u30aa\u30f3":"\u571f","\u30a4\u30fc\u30a6\u30a3\u30a2":"\u98a8","\u30eb\u30aa\u30fc":"\u5149","\u30d5\u30a7\u30c7\u30a3\u30a8\u30eb":"\u95c7"},r={sixdragon:"opti",opti:"opti",omega:"omega"},l=O()(E);Object.keys(i).map((function(e){return Object.keys(i[e]).map((function(t){return Object.keys(i[e][t]).map((function(n){return Object.keys(i[e][t][n]).map((function(a){var o=r[t],c=s[n];i[e][t][n][a].toggle&&(l[o][c]+=i[e][t][n][a].value/100)}))}))}))})),console.log(l),o[a]=l,n(o)}(p,l,s,t)},p=Object(J.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,padding:"15px",fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(G.a),m={opti:[],omega:[],sixdragon:[]};return Object.keys(o[n]).map((function(e){return Object.keys(o[n][e]).map((function(t){return Object.keys(o[n][e][t]).forEach((function(a){if(("FRIEND"!=n||"sixdragon"!=e)&&r[Q[t]]){console.log(t);var s=n,l=e,u=t,g=a,j=o[n][e][t][a].toggle,b="";b="sixdragon"==l?t+" "+a+"%":t+"Lv."+a,m[e].push(Object(d.jsx)(p,{title:Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("a",{children:[Object(d.jsx)(K.a,{color:"inherit",children:"Information"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{style:{fontSize:"10px"},children:b})]})}),children:Object(d.jsx)("div",{style:{transform:"scale(1)",width:"100px",border:"0px solid black"},class:"tooltip button",value:b,onClick:function(){return c(s,l,u,g)},children:Object(d.jsx)("div",{style:{fontSize:"10px",textAlign:"center",backgroundColor:"#222222"},children:Object(d.jsx)("img",{style:{margin:"0",padding:"0",border:"0",width:"100%",height:"20px",objectPosition:"0% 15%",objectFit:"cover",opacity:j?1:.15,cursor:"pointer"},src:"/gbp/"+L[t]})})})}))}}))}))})),Object(d.jsxs)("div",{style:{textAlign:"center"},children:[Object(d.jsx)("div",{class:"wrap-opti",children:m.opti}),Object(d.jsx)("div",{class:"wraup-omega",children:m.omega}),Object(d.jsx)("div",{class:"wrap-sixdragon",children:m.sixdragon})]})}var Y=n(389),Z=function(e,t){return Object(d.jsx)(Y.a,{size:"small",defaultValue:e,"aria-label":"Small",valueLabelDisplay:"off",onChange:function(e,n){t(n)},min:0,max:100,step:10})},$=function(e,t){var n=function(e){var n=O()(k);n[e]=!n[e],t(n)};return Object(d.jsx)("dvi",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#666666",height:"30px",padding:"5px"},class:"weapon-element-wrapper",children:Object(d.jsx)(d.Fragment,{children:Object.keys(e).map((function(t){return e[t]?Object(d.jsx)("a",{onClick:function(){return n(t)},style:{backgroundColor:""},children:Object(d.jsx)("img",{style:{cursor:"pointer",padding:"2.5px",width:"15px"},src:"/gbp/"+v[t]+".png"})}):Object(d.jsx)("a",{onClick:function(){return n(t)},style:{backgroundColor:""},children:Object(d.jsx)("img",{style:{cursor:"pointer",padding:"2.5px",width:"15px",opacity:"0.175"},src:"/gbp/"+v[t]+".png"})})}))})})};function ee(e){var t=e.parent_state_list_equiped,n={AW:{toggle:!1,icon:"images/WeaponSeries_Astral_Weapons_icon.png"},"\u7d42\u672b":{toggle:!1,icon:"images/25px-WeaponSeries_Dark_Opus_Weapons_icon.png"},"\u30bb\u30e9\u30d5\u30a3\u30c3\u30af\u30a6\u30a7\u30dd\u30f3":{toggle:!1,icon:"images/25px-WeaponSeries_Seraphic_Weapons_icon.png"}};return Object.keys(t).forEach((function(e){M.includes(t[e].name)&&(n["\u7d42\u672b"].toggle=!0),U.includes(t[e].name)&&(n["\u30bb\u30e9\u30d5\u30a3\u30c3\u30af\u30a6\u30a7\u30dd\u30f3"].toggle=!0),B.includes(t[e].name)&&(n.AW.toggle=!0)})),Object(d.jsx)("dvi",{style:{display:"flex",justifyContent:"space-evenly",backgroundColor:"#666666",width:"",height:"30px",padding:"5px"},class:"weapon-element-wrapper",children:Object(d.jsx)(d.Fragment,{children:Object.keys(n).map((function(e){return n[e].toggle?Object(d.jsx)("a",{style:{backgroundColor:""},children:Object(d.jsx)("img",{style:{padding:"2px",width:"22px"},src:"/gbp/"+n[e].icon})}):Object(d.jsx)("a",{style:{backgroundColor:""},children:Object(d.jsx)("img",{style:{cursor:"pointer",padding:"2px",width:"22px",opacity:"0.15"},src:"/gbp/"+n[e].icon})})}))})})}var te=function(e,t,n){return Object(d.jsx)("div",{class:"button-active-equiped",style:{width:"100%",height:"3px",padding:"0px",margin:"0px",backgroundColor:e==n?"red":"black"},onClick:function(){return t(n)}})};function ne(e){var t=String(e.number),n=e.parent_state_list_equiped[t],a=e.parentSetStateAddEquiped,i=Object(J.a)((function(e){return{tooltip:{backgroundColor:"rgba(230,230,230,0.95)",opacity:.2,color:"rgba(0, 0, 0, 0.8)",maxWidth:"275px",width:"300px",fontSize:"10px",border:"1px solid #dadde9",padding:"20px"}}}))(G.a);return Object(d.jsx)("div",{children:Object.keys(n).map((function(o){var s=n[o].name;return console.log(s),Object(d.jsx)(i,{open:n[o].isShow,title:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{class:"weapon-icon-wraper",children:Object(d.jsx)("img",{style:{width:"100px"},src:"/gbp/"+X[s].icon})}),Object(d.jsxs)("div",{children:["HP:",X[s].element]})]})}),children:Object(d.jsx)("div",{class:"btn-wrap",onClick:function(){return function(n){var i=O()(e.parent_state_list_equiped);i[t][n].isShow=!i[t][n].isShow,a(i)}(o)},value:X[s].name,children:Object(d.jsx)("a",{style:{backgroundColor:"#333333",color:"#eeeeee",cursor:"default"},class:"btn",children:X[s].name})})})}))})}var ae=n(378),ie=n(201),oe=n(382),se=n(197),re=n(196),le=n(89),ce=function(e,t,n,a){for(var i=[],o=["\u706b","\u6c34","\u571f","\u98a8","\u5149","\u95c7"],s={"\u706b":"#ff6666","\u6c34":"#668cff","\u571f":"#ffb366","\u98a8":"#057C27","\u5149":"#e6b800","\u95c7":"#8c66ff"},r={"\u706b1":!1,"\u6c341":!1,"\u571f1":!1,"\u98a81":!1,"\u51491":!1,"\u95c71":!1,"\u706b2":!1,"\u6c342":!1,"\u571f2":!1,"\u98a82":!1,"\u51492":!1,"\u95c72":!1},l=void 0,c=void 0,p=function(n){c={name:String(n)};for(var a=function(a){l=H(e[String(a)],t[String(a)],n,!1),o.map((function(e){c[e+String(a)]=l[e],50==n&&l[e]>1&&(r[e+String(a)]=!0)}))},s=1;s<=Object.keys(e).length;s++)a(s);i.push(c)},m=0;m<=100;m+=10)p(m);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(ae.a,{width:500,height:400,data:i,children:[o.map((function(e){if(r[e+String(1)])return Object(d.jsx)(ie.a,{type:"monotone",dataKey:e+String(1),stroke:s[e],fillOpacity:0,fill:s[e]})})),o.map((function(e){if(r[e+String(2)])return Object(d.jsx)(ie.a,{type:"monotone",dataKey:e+String(2),stroke:s[e],fillOpacity:0,fill:s[e],strokeDasharray:"3 4 5"})})),Object(d.jsx)(oe.a,{strokeDasharray:"3 3"}),Object(d.jsx)(se.a,{domain:[0,n]}),Object(d.jsx)(re.a,{dataKey:"name"}),Object(d.jsx)(le.a,{})]})})},pe=function(e,t,n,a,o){var s=Object(J.a)((function(e){return{tooltip:{backgroundColor:"rgba(230,230,230,0.95)",opacity:.2,color:"rgba(0, 0, 0, 0.8)",maxWidth:"275px",width:"300px",fontSize:"10px",border:"1px solid #dadde9",padding:"20px"}}}))(G.a);return Object(d.jsx)("div",{children:Object.keys(X).map((function(r){if(console.log(),a[X[r].element])return Object(d.jsx)(s,{title:Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{justifyContent:"center"},class:"weapon-icon-wraper",children:Object(d.jsx)("img",{style:{width:"100px"},src:"/gbp/"+X[r].icon})}),Object(d.jsxs)("div",{style:{borderLeft:"solid 0px gray",paddingLeft:"20px"},class:"weapon-info-wraper",children:[Object(d.jsx)(K.a,{color:"inherit",children:r}),Object(d.jsx)("hr",{}),Object(d.jsx)("a",{children:X[r].element}),Object(d.jsx)("div",{style:{fontSize:"10px"},children:Object.keys(X[r].skill).map((function(e){return Object(d.jsx)("p",{style:{marginBottom:"0px"},children:X[r].skill[e].type})}))})]})]})}),children:Object(d.jsx)("div",{class:"btn-wrap",onClick:function(){return function(a){var i=String(o),s=O()(e),r=O()(z);if(r.name=a,Object.keys(s[i]).length>9)n();else{var l=!1;if(M.includes(a)&&Object.keys(e[i]).forEach((function(t){M.includes(e[i][t].name)&&(l=!0)})),B.includes(a)&&Object.keys(e[i]).forEach((function(t){B.includes(e[i][t].name)&&(l=!0)})),U.includes(a)&&Object.keys(e[i]).forEach((function(t){U.includes(e[i][t].name)&&(l=!0)})),!l){var c=0;Object.keys(s[i]).map((function(e){e!=String(c)||(c+=1)})),r.isShow=!1,s[i][String(c)]=r,console.log(s),t(s)}}}(X[r].name)},value:X[r].name,children:Object(d.jsx)("a",{class:"btn",style:{cursor:"pointer"},children:X[r].name})})})}))})};var me=n(390),ue=n(385),de=n(384),ge=n(383);function je(e){var t=Object(d.jsxs)(me.a,{sx:{maxWidth:200},children:[Object(d.jsx)(ge.a,{component:"img",height:"300",image:"/gbp/images/summon/Summon_b_2040027000_02.png",alt:"green iguana"}),Object(d.jsxs)(de.a,{children:[Object(d.jsx)(K.a,{gutterBottom:!0,variant:"h5",component:"div",children:Object(d.jsx)("h4",{children:"\u30b5\u30f3\u30d7\u30eb\uff1a\u30e6\u30b0\u30c9\u30e9\u30b7\u30eb\u30fb\u30de\u30b0\u30ca"})}),Object(d.jsx)(K.a,{variant:"body2",color:"text.secondary",children:"\u30b5\u30a4\u30c8\u306e\u8aac\u660e\u7684\u306a\u3082\u306e\u304c\u5165\u308b\u3068\u3053\u308d"})]}),Object(d.jsxs)(ue.a,{children:[Object(d.jsx)(j.a,{size:"small",children:"Share"}),Object(d.jsx)(j.a,{size:"small",children:"Learn More"})]})]});return Object(d.jsx)("div",{style:{height:"700px"},children:Object(d.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:[t,t,t]})})}var be=function(){var e,t,n=Object(a.useState)("top"),o=Object(l.a)(n,2),s=o[0],c=o[1],p=Object(a.useState)(!1),m=Object(l.a)(p,2),u=m[0],b=m[1],x=i.a.useState({1:{},2:{}}),h=Object(l.a)(x,2),_=h[0],f=h[1],v=Object(a.useState)("1"),S=Object(l.a)(v,2),w=S[0],C=S[1],I=i.a.useState(60),W=Object(l.a)(I,2),A=W[0],F=W[1],L=i.a.useState({1:O()(E),2:O()(E)}),T=Object(l.a)(L,2),D=T[0],N=T[1],q=i.a.useState({1:O()(P),2:O()(P)}),R=Object(l.a)(q,2),z=R[0],M=R[1],B=i.a.useState(O()(k)),U=Object(l.a)(B,2),X=U[0],J=U[1],G=i.a.useState([]),K=Object(l.a)(G,2),Q=(K[0],K[1],i.a.useState(!0)),Y=Object(l.a)(Q,2),ae=Y[0],ie=Y[1],oe=Object(a.useState)(80),se=Object(l.a)(oe,2),re=se[0],le=se[1],me=Object(y.a)("root",{preventScroll:!0}),ue=Object(l.a)(me,4),de=ue[0],ge=ue[1],be=ue[2];return ue[3],Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(de,{children:Object(d.jsxs)("div",{style:{backgroundColor:"#fff",padding:"60px 100px",borderRadius:"10px"},children:[Object(d.jsx)("h1",{children:"\u8b66\u544a:\u6b66\u5668\u306f10\u672c\u307e\u3067\u3067\u3059"}),Object(d.jsx)("p",{children:"\u66f4\u65b0\u3057\u3066EquipedList\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(d.jsx)("button",{onClick:be,children:"CLOSE"})]})}),(t=c,Object(d.jsx)("div",{style:{position:"relative",width:"100%",height:"35px",backgroundColor:"#333333"},children:Object(d.jsxs)("div",{class:"head-title",style:{position:"",maxWidth:"1500px",marginLeft:"auto",marginRight:"auto",display:"flex",alignItems:"start"},children:[Object(d.jsx)("div",{onClick:function(){return t("top")},class:"",children:Object(d.jsx)(j.a,{color:"primary.dark",style:{maxHeight:"35px"},children:Object(d.jsx)("a",{style:{color:"white"},children:"TOP"})})}),Object(d.jsx)("div",{onClick:function(){return t("app")},class:"",children:Object(d.jsx)(j.a,{style:{maxHeight:"35px"},children:Object(d.jsx)("a",{style:{color:"white"},children:"APP"})})}),Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",height:"35px",width:"100px",marginLeft:"auto",padding:"0px 0px",backgroundColor:"#aaaaaa",color:"#333333"},children:Object(d.jsx)(g,{})})]})})),"top"==s&&Object(d.jsx)(je,{}),"app"==s&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{class:"wrap-app",style:{position:"relative",height:"auto",width:"100%"},children:Object(d.jsxs)("div",{class:"App",style:(e={minHeight:"1000px",maxWidth:"1500px",marginLeft:"auto",marginRight:"auto",display:"flex"},Object(r.a)(e,"display","-webkit-flex"),Object(r.a)(e,"alignItems","start"),e),children:[Object(d.jsxs)("div",{class:"app-weapon-select-wrap",children:[$(X,J),pe(_,f,ge,X,w)]}),Object(d.jsxs)("div",{class:"app-equiped-1",children:[Object(d.jsx)("div",{onClick:function(){return C("1")},children:Object(d.jsx)(ee,{parent_state_list_equiped:_[1]})}),te(w,C,1),Object(d.jsx)(ne,{parent_state_list_equiped:_,parentSetStateAddEquiped:f,number:1})]}),Object(d.jsxs)("div",{class:"app-equiped-2",children:[Object(d.jsx)("div",{onClick:function(){return C("2")},children:Object(d.jsx)(ee,{parent_state_list_equiped:_[2]})}),te(w,C,2),Object(d.jsx)(ne,{parent_state_list_equiped:_,parentSetStateAddEquiped:f,number:2})]}),Object(d.jsxs)("div",{class:"weap-compute-result",style:{flexGrow:"1"},children:[Object(d.jsxs)("div",{style:{display:"flex",backgroundColor:"#666666",height:"40px",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(d.jsx)(j.a,{onClick:function(){return le(re+10)},children:"\u25b2"}),re,Object(d.jsx)(j.a,{onClick:function(){return le(re-10)},children:"\u25bc"})]}),Object(d.jsx)("div",{class:"wrap-chart",style:{display:"flex",width:"100%",justifyContent:"center"},children:ce(_,D,re)}),Object(d.jsx)("div",{class:"wrap-hp-slider",style:{display:"flex",width:"100%",justifyContent:"center"},children:Object(d.jsxs)("div",{class:"wrap-slider",style:{width:"20%"},children:[Object(d.jsx)("div",{style:{textAlign:"center"},children:"RESULT:"+A}),Z(A,F)]})}),Object(d.jsx)("div",{class:"wrap-compute-skill",style:{width:"100%",display:"flex",justifyContent:"center"},children:H(_[w],D[w],A)})]}),Object(d.jsx)("div",{class:"wrap-summons",style:{width:"100px",marginLeft:"auto",border:"solid 0px black"},children:Object(d.jsx)("div",{class:"summons-head",onClick:function(){return ie(!ae)},style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"40px",backgroundColor:"#444444",color:"white"}})})]})}),Object(d.jsxs)("div",{class:"under-menu",style:{position:"fixed",bottom:0,width:"100%",marginLeft:"auto",marginRight:"auto",display:"flex",alignItems:"center",justifyContent:"center",border:"0px solid black",backgroundColor:"#ededf7"},children:[u&&Object(d.jsxs)("div",{style:{position:"fixed",bottom:"40px",width:"100%",marginLeft:"auto",marginRight:"auto",display:"flex",alignItems:"center",justifyContent:"center",border:"0px solid black",backgroundColor:"#ededf7"},children:[ae&&Object(d.jsx)(V,{main_or_friend:"MAIN",parentSetStateSmnToggle:M,parent_state_smn_toggle:z,parentSetStateUpdateAura:N,parent_state_search_element:X,parent_state_list_aura_boost:D,number:"1"}),!ae&&Object(d.jsx)(V,{main_or_friend:"FRIEND",parentSetStateSmnToggle:M,parent_state_smn_toggle:z,parentSetStateUpdateAura:N,parent_state_search_element:X,parent_state_list_aura_boost:D,number:"1"}),ae&&Object(d.jsx)(V,{main_or_friend:"MAIN",parentSetStateSmnToggle:M,parent_state_smn_toggle:z,parentSetStateUpdateAura:N,parent_state_search_element:X,parent_state_list_aura_boost:D,number:"2"}),!ae&&Object(d.jsx)(V,{main_or_friend:"FRIEND",parentSetStateSmnToggle:M,parent_state_smn_toggle:z,parentSetStateUpdateAura:N,parent_state_search_element:X,parent_state_list_aura_boost:D,number:"2"})]}),Object(d.jsx)(j.a,{onClick:function(){return f({1:{},2:{}})},children:Object(d.jsx)("img",{style:{width:"30px"},src:"/gbp/images/outline_delete_black_24dp.png"})}),Object(d.jsxs)(j.a,{onClick:function(){return ie(!ae)},children:[Object(d.jsx)("img",{style:{width:"30px"},src:"/gbp/images/outline_upgrade_black_24dp.png"}),ae?"MAIN":"FRIEND"]}),Object(d.jsxs)(j.a,{onClick:function(){return b(!u)},children:[Object(d.jsx)("img",{style:{width:"30px"},src:"/gbp/images/SummonSeries_Omega_Series_icon.png"}),Object(d.jsx)("img",{style:{width:"30px"},src:"/gbp/images/SummonSeries_Optimus_Series_icon.png"}),ae&&Object(d.jsx)("img",{style:{width:"30px"},src:"/gbp/images/SummonSeries_Six_Dragons_icon.png"})]})]})]}),Object(d.jsx)("div",{class:"wrap-footer",style:{position:"relative",height:"auto",width:"100%",backgroundColor:"#333333"},children:Object(d.jsx)("div",{class:"Footer",style:{maxWidth:"1500px",marginLeft:"auto",marginRight:"auto",display:"flex",border:"solid 0px black"},children:Object(d.jsx)("span",{style:{width:"100%",color:"white",textAlign:"center"},children:"Granblue Portal Produced By @sra_norahs"})})})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,391)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(be,{})}),document.getElementById("root")),xe()}},[[357,1,2]]]);
//# sourceMappingURL=main.34ff4cd7.chunk.js.map