"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[573],{60573:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("exception-page",{attrs:{type:"404"}})},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exception"},[n("a-result",{attrs:{status:t.type,subTitle:t.config[t.type].desc,title:t.type},scopedSlots:t._u([{key:"extra",fn:function(){return[n("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回仪表盘")])]},proxy:!0}])})],1)},s=[],u={404:{desc:"抱歉，你访问的页面不存在"},500:{desc:"抱歉，服务器出错了"}},l=u,c={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:l}},methods:{handleToHome:function(){this.$router.push({name:"Dashboard"})}}},i=c,p=n(42177),f=(0,p.Z)(i,r,s,!1,null,null,null),d=f.exports,h={components:{ExceptionPage:d}},m=h,y=(0,p.Z)(m,a,o,!1,null,null,null),x=y.exports}}]);