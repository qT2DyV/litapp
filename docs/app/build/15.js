webpackJsonp([15],{690:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),u.d(n,"SortPopoverModuleNgFactory",function(){return L});var a=u(1),t=u(733),e=u(383),i=u(384),o=u(385),r=u(386),c=u(387),_=u(388),s=u(389),d=u(390),f=u(391),b=u(736),m=u(18),v=u(28),p=u(86),g=u(87),S=u(89),Y=u(88),h=u(41),j=u(127),k=u(192),C=u(40),z=u(707),Z=u(60),y=u(727),L=a.W(t.a,[],function(l){return a._10([a._11(512,a.i,a.S,[[8,[e.a,i.a,o.a,r.a,c.a,_.a,s.a,d.a,f.a,b.a]],[3,a.i],a.s]),a._11(4608,m.l,m.k,[a.r,[2,m.t]]),a._11(4608,v.r,v.r,[]),a._11(4608,v.d,v.d,[]),a._11(4608,p.b,p.a,[]),a._11(4608,g.a,g.b,[]),a._11(4608,S.b,S.a,[]),a._11(4608,Y.b,Y.a,[]),a._11(4608,h.a,h.a,[j.a,p.b,g.a,S.b,Y.b,h.b,h.c]),a._11(512,m.b,m.b,[]),a._11(512,v.p,v.p,[]),a._11(512,v.g,v.g,[]),a._11(512,v.n,v.n,[]),a._11(512,k.a,k.a,[]),a._11(512,k.b,k.b,[]),a._11(512,C.a,C.a,[]),a._11(512,z.a,z.a,[]),a._11(512,z.f,z.f,[]),a._11(512,z.c,z.c,[]),a._11(512,z.b,z.b,[]),a._11(512,z.d,z.d,[]),a._11(512,z.e,z.e,[]),a._11(512,t.a,t.a,[]),a._11(256,Z.a,y.a,[]),a._11(256,h.c,void 0,[]),a._11(256,h.b,void 0,[])])})},707:function(l,n,u){"use strict";function a(l){return void 0===l}function t(l){return"string"==typeof l}function e(l,n){var u=n.split("."),t=u.shift();return u.reduce(function(l,n){return a(l)||a(l[n])?void 0:l[n]},l[t||""])}u.d(n,"e",function(){return b}),u.d(n,"a",function(){return r}),u.d(n,"g",function(){return o}),u.d(n,"d",function(){return c}),u.d(n,"f",function(){return s}),u.d(n,"h",function(){return _}),u.d(n,"c",function(){return d}),u.d(n,"b",function(){return f});var i=u(0),o=function(){function l(){}return l.prototype.transform=function(n,u){if(!Array.isArray(n))return n;var a=Object(i.__spread)(n);if(Array.isArray(u))return a.sort(function(n,a){for(var t=u.length,e=0;e<t;++e){var o=Object(i.__read)(l.extractFromConfig(u[e]),2),r=l.orderCompare(o[0],o[1],n,a);if(0!==r)return r}return 0});if(t(u)){var e=Object(i.__read)(l.extractFromConfig(u),3),o=e[0],r=e[1];if(1===u.length)switch(e[2]){case"+":return a.sort(l.simpleSort.bind(this));case"-":return a.sort(l.simpleSort.bind(this)).reverse()}return a.sort(l.orderCompare.bind(this,o,r))}return a.sort(l.simpleSort.bind(this))},l.simpleSort=function(l,n){return t(l)&&t(n)?l.toLowerCase().localeCompare(n.toLowerCase()):l-n},l.orderCompare=function(l,n,u,i){var o=e(u,l),r=e(i,l);if(o===r)return 0;if(a(o)||""===o)return 1;if(a(r)||""===r)return-1;if(t(o)&&t(r)){var c=o.toLowerCase().localeCompare(r.toLowerCase());return n?c:-c}return n?o-r:r-o},l.extractFromConfig=function(l){var n=l.substr(0,1);return[l.replace(/^[-+]/,""),"-"!==n,n]},l}(),r=function(){return function(){}}(),c=function(){return function(){}}(),_=function(){function l(){}return l.prototype.transform=function(l,n,u){if(void 0===n&&(n=1),void 0===u&&(u=""),n<=0)throw new RangeError;return 1===n?l:this.repeat(l,n-1,u)},l.prototype.repeat=function(l,n,u){return t(l)?0===n?l:l+u+this.repeat(l,n-1,u):l},l}(),s=function(){return function(){}}(),d=function(){return function(){}}(),f=function(){return function(){}}(),b=function(){return function(){}}()},727:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(0),u(58);var a=function(){function l(l,n){this.viewCtrl=n,this.sortMethod=l.get("sortMethod")||""}return l.prototype.save=function(){this.viewCtrl.dismiss(this.sortMethod)},l}()},733:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(0),u(58),u(40);var a=function(){return function(){}}()},736:function(l,n,u){"use strict";function a(l){return t._22(0,[(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(1,0,null,null,129,"ion-list",[["radio-group",""],["role","radiogroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var a=!0;if("ngModelChange"===n){a=!1!==(l.component.sortMethod=u)&&a}return a},null,null)),t.Y(2,1064960,null,1,e.a,[t.z,t.j,t.g],null,null),t._18(335544320,1,{_header:0}),t._17(1024,null,i.h,function(l){return[l]},[e.a]),t.Y(5,671744,null,0,i.m,[[8,null],[8,null],[8,null],[2,i.h]],{model:[0,"model"]},{update:"ngModelChange"}),t._17(2048,null,i.i,null,[i.m]),t.Y(7,16384,null,0,i.j,[i.i],null,null),t.Y(8,16384,null,0,o.a,[r.a,t.j,t.z,c.a,_.l,s.a],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(10,0,null,null,7,"ion-list-header",[["class","item"]],null,null,null,d.b,d.a)),t.Y(11,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,2,{contentLabel:0}),t._18(603979776,3,{_buttons:1}),t._18(603979776,4,{_icons:1}),t.Y(15,16384,[[1,4]],0,v.a,[r.a,t.z,t.j,[8,null]],null,null),(l()(),t._20(16,2,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(19,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(20,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,5,{contentLabel:0}),t._18(603979776,6,{_buttons:1}),t._18(603979776,7,{_icons:1}),t.Y(24,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(26,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(27,16384,[[5,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(28,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(31,0,null,4,1,"ion-radio",[["value",""]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,32)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(32,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(35,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(36,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,8,{contentLabel:0}),t._18(603979776,9,{_buttons:1}),t._18(603979776,10,{_icons:1}),t.Y(40,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(42,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(43,16384,[[8,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(44,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(47,0,null,4,1,"ion-radio",[["value","-timestamp"]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,48)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(48,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(51,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(52,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,11,{contentLabel:0}),t._18(603979776,12,{_buttons:1}),t._18(603979776,13,{_icons:1}),t.Y(56,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(58,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(59,16384,[[11,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(60,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(63,0,null,4,1,"ion-radio",[["value","title"]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,64)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(64,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(67,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(68,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,14,{contentLabel:0}),t._18(603979776,15,{_buttons:1}),t._18(603979776,16,{_icons:1}),t.Y(72,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(74,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(75,16384,[[14,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(76,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(79,0,null,4,1,"ion-radio",[["value","author.name"]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,80)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(80,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(83,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(84,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,17,{contentLabel:0}),t._18(603979776,18,{_buttons:1}),t._18(603979776,19,{_icons:1}),t.Y(88,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(90,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(91,16384,[[17,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(92,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(95,0,null,4,1,"ion-radio",[["value","-rating"]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,96)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(96,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(99,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(100,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,20,{contentLabel:0}),t._18(603979776,21,{_buttons:1}),t._18(603979776,22,{_icons:1}),t.Y(104,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(106,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(107,16384,[[20,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(108,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(111,0,null,4,1,"ion-radio",[["value","category"]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,112)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(112,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(115,0,null,null,14,"ion-item",[["class","item item-block"]],null,null,null,d.b,d.a)),t.Y(116,1097728,null,3,f.a,[b.a,r.a,t.j,t.z,[2,m.a]],null,null),t._18(335544320,23,{contentLabel:0}),t._18(603979776,24,{_buttons:1}),t._18(603979776,25,{_icons:1}),t.Y(120,16384,null,0,S.a,[],null,null),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(122,0,null,1,3,"ion-label",[],null,null,null,null,null)),t.Y(123,16384,[[23,4]],0,Y.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(124,null,["",""])),t._14(131072,p.a,[g.a,t.g]),(l()(),t._20(-1,2,["\n        "])),(l()(),t.Z(127,0,null,4,1,"ion-radio",[["value","-downloadtimestamp"]],[[2,"radio-disabled",null]],[[null,"ionSelect"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==t._13(l,128)._click(u)&&a}if("ionSelect"===n){a=!1!==e.save()&&a}return a},h.b,h.a)),t.Y(128,245760,null,0,j.a,[b.a,r.a,t.j,t.z,[2,f.a],[2,e.a]],{value:[0,"value"]},{ionSelect:"ionSelect"}),(l()(),t._20(-1,2,["\n      "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n  "]))],function(l,n){l(n,5,0,n.component.sortMethod);l(n,32,0,"");l(n,48,0,"-timestamp");l(n,64,0,"title");l(n,80,0,"author.name");l(n,96,0,"-rating");l(n,112,0,"category");l(n,128,0,"-downloadtimestamp")},function(l,n){l(n,1,0,t._13(n,7).ngClassUntouched,t._13(n,7).ngClassTouched,t._13(n,7).ngClassPristine,t._13(n,7).ngClassDirty,t._13(n,7).ngClassValid,t._13(n,7).ngClassInvalid,t._13(n,7).ngClassPending);l(n,16,0,t._21(n,16,0,t._13(n,17).transform("HISTORY_SORT")));l(n,28,0,t._21(n,28,0,t._13(n,29).transform("FIRST_ACCESSED")));l(n,31,0,t._13(n,32)._disabled);l(n,44,0,t._21(n,44,0,t._13(n,45).transform("NEWEST")));l(n,47,0,t._13(n,48)._disabled);l(n,60,0,t._21(n,60,0,t._13(n,61).transform("TITLE")));l(n,63,0,t._13(n,64)._disabled);l(n,76,0,t._21(n,76,0,t._13(n,77).transform("AUTHOR")));l(n,79,0,t._13(n,80)._disabled);l(n,92,0,t._21(n,92,0,t._13(n,93).transform("RATING")));l(n,95,0,t._13(n,96)._disabled);l(n,108,0,t._21(n,108,0,t._13(n,109).transform("CATEGORY")));l(n,111,0,t._13(n,112)._disabled);l(n,124,0,t._21(n,124,0,t._13(n,125).transform("DOWNLOADED")));l(n,127,0,t._13(n,128)._disabled)})}u.d(n,"a",function(){return y});var t=u(1),e=u(66),i=u(28),o=u(64),r=u(3),c=u(6),_=u(10),s=u(12),d=u(191),f=u(26),b=u(22),m=u(59),v=u(129),p=u(126),g=u(41),S=u(85),Y=u(65),h=u(395),j=u(92),k=u(727),C=u(16),z=u(7),Z=t.X({encapsulation:2,styles:[],data:{}}),y=t.V("sort-popover",k.a,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"sort-popover",[],null,null,null,a,Z)),t.Y(1,49152,null,0,k.a,[C.a,z.a],null,null)],null,null)},{},{},[])}});