import{d as m,aB as d,x,J as c,b as S,c as f,aC as z,K as o,k as I}from"./entry.ddeac67e.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;const s=_;d(n=>({"2174cf9e":o(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const l=c(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=c(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=c(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:z({width:o(a),height:o(a)})},null,4))}});const g=I(y,[["__scopeId","data-v-9ce5484e"]]);export{g as default};