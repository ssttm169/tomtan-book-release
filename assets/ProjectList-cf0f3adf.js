import{_ as u,o as t,c as s,F as _,n as h,f,b as e,t as i}from"./app-b28ea471.js";const m={name:"Version",computed:{sidebar(){const r=this.$theme.sidebar;let n=[];return Object.keys(r).forEach(c=>{const a=r[c][0];n.push({name:a.text.trim(),status:"持续更新中...",url:a.children[0].link})}),n}}},b={style:{width:"100%"}},p=e("thead",null,[e("tr",null,[e("th",null,"项目"),e("th",{style:{"text-align":"center"}},"状态")])],-1),y={key:0},k=["href"],x={style:{"text-align":"center"}};function g(r,n,c,a,j,l){return t(),s("table",b,[p,l.sidebar.length?(t(),s("tbody",y,[(t(!0),s(_,null,h(l.sidebar,(o,d)=>(t(),s("tr",{key:d},[e("td",null,[e("a",{href:o.url},i(o.name),9,k)]),e("td",x,i(o.status),1)]))),128))])):f("v-if",!0)])}const L=u(m,[["render",g],["__file","ProjectList.vue"]]);export{L as default};