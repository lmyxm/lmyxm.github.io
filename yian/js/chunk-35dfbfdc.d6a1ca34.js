(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35dfbfdc"],{"06db":function(t,i,a){"use strict";var o=a("23c6"),s={};s[a("2b4c")("toStringTag")]="z",s+""!="[object z]"&&a("2aba")(Object.prototype,"toString",function(){return"[object "+o(this)+"]"},!0)},"20f9":function(t,i,a){"use strict";a.r(i);var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"box"},[a("div",{staticClass:"header"},[a("i",{staticClass:"icon",on:{click:t.toback}}),a("p",{staticClass:"title"},[t._v("工单列表")])]),a("div",{staticClass:"maiList"},t._l(t.orderList,function(i,o){return a("div",{key:o,staticClass:"list"},[a("span",{class:{icon_youxian:0==i.zhuangtai,icon_jin:1==i.zhuangtai,icon_jia:2==i.zhuangtai,icon_pu:3==i.zhuangtai}},[t._v(t._s(0==i.zhuangtai?"优先":1==i.zhuangtai?"紧急":2==i.zhuangtai?"加急":"正常"))]),a("img",{staticClass:"left_img",attrs:{src:t.src1,alt:""}}),a("div",{staticClass:"right_box"},[a("ul",[a("li",[t._v("工单编号："+t._s(i.orderNo))]),a("li",[t._v("工单类型："+t._s(i.orderProduct.leixing))]),a("li",[t._v("优先级别："+t._s(0==i.zhuangtai?"优先":1==i.zhuangtai?"紧急":2==i.zhuangtai?"加急":"正常"))]),a("li",[t._v("报修日期："+t._s(i.time))]),a("li",[t._v("处理状态："+t._s(i.chulizhuangtai))])])]),a("div",{staticClass:"anniu"},[a("i",{staticClass:"ac",on:{click:function(i){return t.toorderdetail(o)}}},[t._v("工单详情")]),a("i",{on:{click:function(i){return t.toreport(o)}}},[t._v("签字")]),a("i",{on:{click:function(i){return t.btn_yes("0")}}},[t._v("接受")]),a("i",{staticClass:" rm_mg",on:{click:function(i){return t.btn_yes("1")}}},[t._v("拒绝")])])])}),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.model,expression:"model"}],staticClass:"model"},[a("div",{staticClass:"bg"}),t.bool?a("div",{staticClass:"queding"},[a("i"),a("p",[t._v("是否确认接收工单")]),a("ul",[a("li",{staticClass:"roder01 ac",on:{click:t.quxiao}},[t._v("确定")]),a("li",{staticClass:"roder02",on:{click:t.quxiao}},[t._v("取消")])])]):a("div",{staticClass:"queding"},[a("h3",{on:{click:function(i){return t.xuanzhe(0)}}},[t._v("原因"),a("span",[t._v(t._s(t.title))]),a("u")]),a("textarea",{attrs:{maxlength:"75",placeholder:"备注"}}),a("ul",[a("li",{staticClass:"roder01 ac",on:{click:t.quxiao}},[t._v("确定")]),a("li",{staticClass:"roder02",on:{click:t.quxiao}},[t._v("取消")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.bool_tankuang,expression:"bool_tankuang"}],staticClass:"model_tankuang"},[a("div",{staticClass:"bg_yanse"}),a("div",{staticClass:"slots_list",class:{demo_transform3:!t.bool_tankuang,demo_transform4:t.bool_tankuang}},[a("h2",[t._v("拒绝原因")]),a("span",{on:{click:t.queding}},[t._v("确定")]),a("mt-picker",{attrs:{slots:t.slots},on:{change:t.onValuesChange}})],1)])])},s=[],e=(a("ac6a"),a("06db"),a("76a0"),{name:"position",data:function(){return{src1:"../../assets/code.png",model:"false",bool:"true",bool_tankuang:!1,title:"",list1:["行程不匹配","技能不匹配","时间不匹配"],slots:[{flex:1,values:[],className:"slots",textAlign:"center"}],orderList:[{zhuangtai:"0",img:"",orderNo:"20190329001",orderProduct:{leixing:"维修",No:"0"},time:"2019-03-05",chulizhuangtai:"待接单"},{zhuangtai:"1",img:"",orderNo:"20190329001",orderProduct:{leixing:"安装",No:"1"},time:"2019-03-05",chulizhuangtai:"维修中"},{zhuangtai:"2",img:"",orderNo:"20190329001",orderProduct:{leixing:"培训",No:"2"},time:"2019-03-05",chulizhuangtai:"已拒绝"},{zhuangtai:"3",img:"",orderNo:"20190329001",orderProduct:{leixing:"专项服务",No:"3"},time:"2019-03-05",chulizhuangtai:"已完成"},{zhuangtai:"3",img:"",orderNo:"20190329001",orderProduct:{leixing:"呼吸机",No:"4"},time:"2019-03-05",chulizhuangtai:"维修中"},{zhuangtai:"3",img:"",orderNo:"20190329001",orderProduct:{leixing:"麻醉机",No:"5"},time:"2019-03-05",chulizhuangtai:"维修中"},{zhuangtai:"3",img:"",orderNo:"20190329001",orderProduct:{leixing:"手术床",No:"6"},time:"2019-03-05",chulizhuangtai:"维修中"},{zhuangtai:"3",img:"",orderNo:"20190329001",orderProduct:{leixing:"无影灯",No:"7"},time:"2019-03-05",chulizhuangtai:"维修中"}]}},created:function(){this.model=!1},methods:{toback:function(){this.$router.go(-1)},toorderdetail:function(){this.$router.push({path:"/orderdetail"})},toreport:function(t){0==t?this.$router.push({path:"/toreport"}):1==t?this.$router.push({path:"/installation"}):2==t?this.$router.push({path:"/TrainingRecord"}):3==t?this.$router.push({path:"/SpecialReport"}):4==t?this.$router.push({path:"/Breathingmachine"}):5==t?this.$router.push({path:"/Anesthesiamachine"}):6==t?this.$router.push({path:"/Surgicalbed"}):7==t&&this.$router.push({path:"/Astrallamp"})},btn_yes:function(t){this.model=!0,"0"==t?this.bool=!0:"1"==t&&(this.bool=!1)},btn_no:function(){},quxiao:function(){this.model=!1},onValuesChange:function(t,i){this.values=i[0],console.log(this.values)},xuanzhe:function(t){this.slots[0].values=this.list1,this.bool_tankuang=!this.bool_tankuang},queding:function(){this.title=this.values,this.bool_tankuang=!this.bool_tankuang}}}),n=e,r=(a("740d"),a("2877")),l=Object(r["a"])(n,o,s,!1,null,"45680acd",null);i["default"]=l.exports},5070:function(t,i,a){},"740d":function(t,i,a){"use strict";var o=a("5070"),s=a.n(o);s.a},ac6a:function(t,i,a){for(var o=a("cadf"),s=a("0d58"),e=a("2aba"),n=a("7726"),r=a("32e9"),l=a("84f2"),u=a("2b4c"),c=u("iterator"),h=u("toStringTag"),d=l.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(g),_=0;_<m.length;_++){var v,p=m[_],f=g[p],b=n[p],k=b&&b.prototype;if(k&&(k[c]||r(k,c,d),k[h]||r(k,h,p),l[p]=d,f))for(v in o)k[v]||e(k,v,o[v],!0)}}}]);