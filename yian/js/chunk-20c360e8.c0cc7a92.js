(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c360e8"],{"06db":function(t,e,i){"use strict";var s=i("23c6"),l={};l[i("2b4c")("toStringTag")]="z",l+""!="[object z]"&&i("2aba")(Object.prototype,"toString",function(){return"[object "+s(this)+"]"},!0)},"8cfc":function(t,e,i){"use strict";var s=i("8d53"),l=i.n(s);l.a},"8d53":function(t,e,i){},ac6a:function(t,e,i){for(var s=i("cadf"),l=i("0d58"),n=i("2aba"),o=i("7726"),a=i("32e9"),c=i("84f2"),r=i("2b4c"),u=r("iterator"),h=r("toStringTag"),m=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},_=l(v),d=0;d<_.length;d++){var f,p=_[d],b=v[p],g=o[p],x=g&&g.prototype;if(x&&(x[u]||a(x,u,m),x[h]||a(x,h,p),c[p]=m,b))for(f in s)x[f]||n(x,f,s[f],!0)}},fe90:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"header"},[i("i",{staticClass:"icon",on:{click:t.toback}}),i("p",{staticClass:"title"},[t._v("提报工单")])]),i("ul",{staticClass:"main"},[i("li",{on:{click:function(e){return t.xuanzhe(0)}}},[i("p",[t._v("请输入申请类型")]),i("i")]),i("li",{on:{click:function(e){return t.Time_xuanzhe()}}},[i("p",[t._v("请输入时间")]),i("i")]),t._m(0),i("li",{on:{click:function(e){return t.xuanzhe(1)}}},[i("p",[t._v("请选择级别")]),i("i")]),i("li",{on:{click:t.toproductline}},[i("p",[t._v("请输入产品线")]),i("i")]),t._m(1),t._m(2),t._m(3),i("li",{on:{click:function(e){return t.xuanzhe(3)}}},[i("p",[t._v("是否需要更改配件")]),i("i")]),i("li",{directives:[{name:"show",rawName:"v-show",value:t.bool01,expression:"bool01"}]},[i("input",{attrs:{type:"text",placeholder:"请输入物料编号"}})]),t._m(4),t._m(5),t._m(6)]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"baoxiuyuanyin",attrs:{placeholder:"请输入报修原因",maxlength:"130"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),i("div",{staticClass:"sendbtn"},[t._v("提交")]),i("div",{staticClass:"mb"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bool,expression:"bool"}],staticClass:"model"},[i("div",{staticClass:"bg_yanse"}),i("div",{staticClass:"slots_list",class:{demo_transform3:!t.bool,demo_transform4:t.bool}},[i("h2",[t._v(t._s(t.title))]),i("span",{on:{click:t.queding}},[t._v("确定")]),i("mt-picker",{attrs:{slots:t.slots},on:{change:t.onValuesChange}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.time_bool,expression:"time_bool"}],staticClass:"model"},[i("div",{staticClass:"bg_yanse"}),i("div",{staticClass:"slots_list",class:{demo_transform3:!t.time_bool,demo_transform4:t.time_bool}},[i("h2",[t._v("选择筛选时间")]),i("span",{on:{click:t.Time_queding}},[t._v("确定")]),i("mt-picker",{attrs:{slots:t.time_slots},on:{change:t.onTime_ValuesChange}})],1)])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("请选择医院")]),i("i")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("input",{attrs:{type:"text",placeholder:"请输入联系人"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("input",{attrs:{type:"text",placeholder:"请输入电话"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("input",{attrs:{type:"text",placeholder:"请输入解决方法"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("input",{attrs:{type:"text",placeholder:"请输入员工编号"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("input",{attrs:{type:"text",placeholder:"请输入员工名称"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("textarea",{attrs:{type:"text",placeholder:"请输入服务内容"}})])}],n=(i("ac6a"),i("06db"),{name:"repairorder",data:function(){return{time_bool:!1,time_tree:["2015","2016","2017","2018","2019","2020"],msg:"12323122333",content:"",bool:!1,bool01:!1,title_num01:"",title:"",list1:["安装","维修","回访","专项","培训"],list2:["一级甲等","一级乙等","一级丙等","二级甲等","二级乙等","二级丙等","三级甲等","三级乙等","三级丙等","无"],list3:["办公室主任","处长","党委书记","副经理","副科长","护士","护士长","护理员","经理","技术员"],list4:["是","否"],slots:[{flex:1,values:[],className:"slots",textAlign:"center"}],time_slots:[{flex:1,values:["2015","2016","2017","2018","2019","2020"],className:"slot1",textAlign:"center"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:["01","02","03","04","05","06"],className:"slot3",textAlign:"center"},{divider:!0,content:"-",className:"slot4"},{flex:1,values:["01","02","03","04","05","06"],className:"slot5",textAlign:"center"}]}},created:function(){},methods:{toback:function(){this.$router.go(-1)},toproductline:function(){this.$router.push({path:"/productline"})},onTime_ValuesChange:function(t,e){console.log(e),this.values=e[0],console.log(this.values)},Time_xuanzhe:function(){this.time_slots[0].values=this.time_tree,this.time_bool=!this.time_bool},Time_queding:function(){this.time=this.values,this.time_bool=!this.time_bool},onValuesChange:function(t,e){this.values=e[0],console.log(this.values)},xuanzhe:function(t){0==t?(this.title="申报类型",this.slots[0].values=this.list1):1==t?(this.title="选择外科",this.slots[0].values=this.list2):2==t?(this.title="选择职务",this.slots[0].values=this.list3):3==t&&(this.slots[0].values=this.list4),this.bool=!this.bool,this.title_num01=t},queding:function(){console.log(this.title_num01),0==this.title_num01?this.title=this.values:1==this.title_num01?this.title=this.values:2==this.title_num01?this.title=this.values:3==this.title_num01&&("是"==this.values?this.bool01=!0:"否"==this.values&&(this.bool01=!1)),this.bool=!this.bool}}}),o=n,a=(i("8cfc"),i("2877")),c=Object(a["a"])(o,s,l,!1,null,"9a47ec88",null);e["default"]=c.exports}}]);