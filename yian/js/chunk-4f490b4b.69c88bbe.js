(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f490b4b"],{"06db":function(t,e,i){"use strict";var s=i("23c6"),n={};n[i("2b4c")("toStringTag")]="z",n+""!="[object z]"&&i("2aba")(Object.prototype,"toString",function(){return"[object "+s(this)+"]"},!0)},"2c08":function(t,e,i){"use strict";var s=i("3f76"),n=i.n(s);n.a},"3f76":function(t,e,i){},"545e":function(t,e,i){"use strict";var s=i("ed44"),n=i.n(s);n.a},ac6a:function(t,e,i){for(var s=i("cadf"),n=i("0d58"),a=i("2aba"),l=i("7726"),c=i("32e9"),r=i("84f2"),o=i("2b4c"),_=o("iterator"),u=o("toStringTag"),h=r.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=n(m),f=0;f<v.length;f++){var g,p=v[f],b=m[p],d=l[p],$=d&&d.prototype;if($&&($[_]||c($,_,h),$[u]||c($,u,p),r[p]=h,b))for(g in s)$[g]||a($,g,s[g],!0)}},e103:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"header"},[i("i",{staticClass:"icon",on:{click:t.toback}}),i("p",{staticClass:"title"},[t._v("上门回访维护记录单-手术床")])]),i("div",{staticClass:"main"},[i("h3",{on:{click:function(e){return t.showhide(0)}}},[t._v("\n      一、产品使用维护基本信息\n      "),i("i")]),i("ul",{class:{hg_ac:"hg_ac00"==t.hg_ac_bool}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)]),i("h3",{on:{click:function(e){return t.showhide(1)}}},[t._v("\n      二、产品参数检测（运行检查）\n      "),i("i")]),i("ul",{class:{hg_ac:"hg_ac01"==t.hg_ac_bool}},[t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29)]),i("h3",{on:{click:function(e){return t.showhide(2)}}},[t._v("\n      三、进行项目单\n      "),i("i")]),i("ul",{class:{hg_ac:"hg_ac02"==t.hg_ac_bool}},[i("li",{on:{click:function(e){return t.showhide01(0)}}},[i("p",[t._v("产品维护保养逐项进行项目单")]),i("span"),i("i",{staticClass:"ac"}),i("ol",{class:{hg_ac:"hg_ac00"==t.hg_ac_bool01}},[i("mt-checklist",{attrs:{options:["设备清洁擦拭 ","液压油渗漏情况检查","熔断器检查 ","电源线检查","蓄电池状态检查","附件检查"]},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]),i("li",{on:{click:function(e){return t.showhide01(1)}}},[i("p",[t._v("维护保养结果确认")]),i("i",{staticClass:"ac"}),i("ol",{class:{hg_ac:"hg_ac01"==t.hg_ac_bool01}},[i("mt-checklist",{attrs:{options:["状态良好","部分部件老化，建议更换","停止使用，更换老化部件"]},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)])]),i("h3",{on:{click:function(e){return t.showhide(3)}}},[t._v("\n      四、工程师建议\n      "),i("i")]),i("ul",{class:{hg_ac:"hg_ac03"==t.hg_ac_bool}},[t._m(30),t._m(31),t._m(32),i("li",{on:{click:t.signature}},[i("p",[t._v("服务人员签名")]),i("img",{directives:[{name:"show",rawName:"v-show",value:t.clientSignature,expression:"clientSignature"}],staticClass:"magin_t",attrs:{src:t.clientSignature,alt:""}}),i("i",{staticClass:"ac"})]),t._m(33)]),i("h3",{on:{click:function(e){return t.showhide(4)}}},[t._v("\n      五、客户确认及建议\n      "),i("i")]),i("ul",{class:{hg_ac:"hg_ac04"==t.hg_ac_bool}},[t._m(34),t._m(35),t._m(36),t._m(37),i("li",{on:{click:t.signature}},[i("p",[t._v("客户签名")]),i("img",{directives:[{name:"show",rawName:"v-show",value:t.clientSignature,expression:"clientSignature"}],staticClass:"magin_t",attrs:{src:t.clientSignature,alt:""}}),i("i",{staticClass:"ac"})]),t._m(38)])]),i("div",{staticClass:"sendbtn mt",on:{click:t.yulan}},[t._v("预览")]),i("div",{staticClass:"sendbtn mt",on:{click:t.tijiao}},[t._v("提交")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bool,expression:"bool"}],staticClass:"model"},[i("div",{staticClass:"bg_yanse"}),i("div",{staticClass:"slots_list",class:{demo_transform3:!t.bool,demo_transform4:t.bool}},[i("h2",[t._v(t._s(t.title))]),i("span",{on:{click:t.queding}},[t._v("确定")]),i("mt-picker",{attrs:{slots:t.slots},on:{change:t.onValuesChange}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.time_bool,expression:"time_bool"}],staticClass:"model"},[i("div",{staticClass:"bg_yanse"}),i("div",{staticClass:"slots_list",class:{demo_transform3:!t.time_bool,demo_transform4:t.time_bool}},[i("h2",[t._v("选择筛选时间")]),i("span",{on:{click:t.Time_queding}},[t._v("确定")]),i("mt-picker",{attrs:{slots:t.time_slots},on:{change:t.onTime_ValuesChange}})],1)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("医院名称")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("使用科室")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("产品型号")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("机器编号")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("安装时间")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("使用频率 -小时/周")]),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("维护频率 -次/周")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("维护科室")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("基础设定")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("基础项目")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床体升降")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("腰桥抬升")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("背板上折")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床体前倾")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("头板上折")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("背板下折")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床体后倾")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("头板下折")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("台面凹凸情况")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床体左倾")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("腿板分叉")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床垫状况")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床体右倾")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("腿板下折")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("手持控制器")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("床体锁死")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("头腿板互换")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("辅助控制器")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("textarea",{attrs:{placeholder:"情况说明",maxlength:"110"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("检测结论")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("textarea",{attrs:{placeholder:"产品维护情况",maxlength:"110"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("textarea",{attrs:{placeholder:"建议更换部件",maxlength:"110"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("textarea",{attrs:{placeholder:"其他",maxlength:"110"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("服务人员签字日期")]),i("i",{staticClass:"ac"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("工程师对规定项目栏内项目是否逐一检查确认")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("工程师的服务水平是否满意")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("产品质量综合评价是否满意")]),i("span"),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("textarea",{attrs:{placeholder:"客户建议",maxlength:"110"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("联系电话")]),i("input",{attrs:{type:"text"}}),i("i")])}],a=(i("ac6a"),i("06db"),i("76a0")),l={name:"maintain",data:function(){return{hg_ac_bool:"hg_ac00",hg_ac_bool01:"hg_ac00",clientSignature:this.$route.query.src,tree_ac:1,bool:!1,title_num01:"",title:"",list1:["安装","维修","回访","专项","培训"],list2:["超声科","多功能科","儿科","放射科","风湿科","骨科","肝胆外科","肛肠科","呼吸科","化疗科"],list3:["办公室主任","处长","党委书记","副经理","副科长","护士","护士长","护理员","经理","技术员"],list4:[],list5:["组件、配件介绍","组件附件连接演示","功能介绍","操作指导讲解","清洁和消毒","维护保养及常见故障处理","产品使用注意事项"],list6:["外观完好","配件齐全","调试良好","工作正常","随机文件齐套"],time:"",slots:[{flex:1,values:[],className:"slots",textAlign:"center"}],value1:[],value2:[],value3:[],value4:[],time_bool:!1,time_tree:["2015","2016","2017","2018","2019","2020"],time_slots:[{flex:1,values:["2015","2016","2017","2018","2019","2020"],className:"slot1",textAlign:"center"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:["01","02","03","04","05","06"],className:"slot3",textAlign:"center"},{divider:!0,content:"-",className:"slot4"},{flex:1,values:["01","02","03","04","05","06"],className:"slot5",textAlign:"center"}]}},created:function(){},methods:{toback:function(){this.$router.go(-1)},showhide:function(t){0==t?this.hg_ac_bool="hg_ac00":1==t?this.hg_ac_bool="hg_ac01":2==t?this.hg_ac_bool="hg_ac02":3==t?this.hg_ac_bool="hg_ac03":4==t?this.hg_ac_bool="hg_ac04":5==t?this.hg_ac_bool="hg_ac05":6==t&&(this.hg_ac_bool="hg_ac06")},signature:function(){this.$router.push({path:"/signature"})},yulan:function(){Object(a["Toast"])({message:"请稍后...",duration:1e3})},tijiao:function(){Object(a["Toast"])({message:"提交中...",duration:1e3})},onValuesChange:function(t,e){this.values=e[0],console.log(this.values)},xuanzhe:function(t){0==t?(this.title="申报类型",this.slots[0].values=this.list1):1==t?(this.title="选择外科",this.slots[0].values=this.list2):2==t&&(this.title="选择职务",this.slots[0].values=this.list3),this.bool=!this.bool,this.title_num01=t},queding:function(){console.log(this.title_num01),0==this.title_num01?this.title=this.values:1==this.title_num01?this.title=this.values:2==this.title_num01&&(this.title=this.values),this.bool=!this.bool},showhide01:function(t){0==t?this.hg_ac_bool01="hg_ac00":1==t?this.hg_ac_bool01="hg_ac01":2==t?this.hg_ac_bool01="hg_ac02":3==t?this.hg_ac_bool01="hg_ac03":4==t?this.hg_ac_bool01="hg_ac04":5==t?this.hg_ac_bool01="hg_ac05":6==t&&(this.hg_ac_bool01="hg_ac06")},onTime_ValuesChange:function(t,e){console.log(e),this.values=e[0],console.log(this.values)},Time_xuanzhe:function(){this.time_slots[0].values=this.time_tree,this.time_bool=!this.time_bool},Time_queding:function(){this.time=this.values,this.time_bool=!this.time_bool}}},c=l,r=(i("545e"),i("2c08"),i("2877")),o=Object(r["a"])(c,s,n,!1,null,"0df9908e",null);e["default"]=o.exports},ed44:function(t,e,i){}}]);