import g from"./Badge.bf9c11ef.js";import x from"./ProseH2.fabfb97b.js";import h from"./ContentRenderer.cb0a0d87.js";import{u as D}from"./useGithub.ad28d676.js";import{d as B,Z as w,$ as L,b as o,c as n,F as v,a0 as C,K as c,g as a,w as i,E as _,t as p}from"./entry.ddeac67e.js";import"./slot.17978de5.js";import"./node.14a0209c.js";import"./ContentRendererMarkdown.vue.93cc2828.js";import"./index.44051479.js";const b=(r,t={year:"numeric",month:"long",day:"numeric"})=>new Date(r).toLocaleDateString("en",t),k={style:{"margin-top":"50px"}},K=B({__name:"Releases",async setup(r){let t,s;const{fetchReleases:l}=D(),{data:u}=([t,s]=w(()=>L("releases",()=>l({}))),t=await t,s(),t);return(m,R)=>{const d=g,f=x,y=h;return o(),n("div",k,[(o(!0),n(v,null,C(c(u),e=>(o(),n("div",{key:e.name,style:{"margin-bottom":"50px"}},[a(f,{id:e.name},{default:i(()=>[_(p(e.name)+" ",1),a(d,{style:{"margin-left":"10px"}},{default:i(()=>[_(p(("formatDateByLocale"in m?m.formatDateByLocale:c(b))(e.date)),1)]),_:2},1024)]),_:2},1032,["id"]),a(y,{value:e},null,8,["value"])]))),128))])}}});export{K as default};
