import{u as C,a as N,b as y,r as o,j as e,I as d,i as S,M as E,e as F,n as k,k as P,l as U,F as R,d as _,m as A}from"./index-D-m5xOMZ.js";import{A as B,u as I}from"./Avatar-DqB796q_.js";import{B as M,C as V}from"./buttons-Df5y7yiQ.js";import{f as z}from"./formValidation-CwRn66Cy.js";import{S as h}from"./select-GtRqJf2v.js";const q=()=>{const{user:n}=C(s=>s.auth),m=N(),g=y(),[u,j]=o.useState(!1),[t,l]=o.useState({name:"",password:"",profile:"",email:"",gender:"",marital_status:""}),[v,x]=o.useState(!1),[i,p]=o.useState({name:"",password:"",email:""}),c=s=>{const{name:a,value:f}=s.target;l(r=>({...r,[a]:f})),p(r=>({...r,[a]:""}))},b=async s=>{s.preventDefault();const a=z(t);if(Object.keys(a).length===0){x(!0);try{await k.promise(m(P(t)),{loading:"Updating User...",success:e.jsx("span",{children:"User Updated Successfully"}),error:e.jsx("span",{children:"Failed to updated a user"})}),m(U(t)),x(!1)}catch(r){console.log(r)}}else p(r=>({...r,...a}))},w=()=>e.jsxs("div",{className:"flex w-full h-full text-slate-600",children:[e.jsx("div",{className:"px-2 h-full border-r border-slate-300 flex items-center justify-center hover:bg-slate-200",onClick:()=>{j(s=>!s)},children:u?e.jsx(R,{size:18}):e.jsx(_,{size:18})}),e.jsx("div",{className:"px-2 h-full flex items-center justify-center hover:bg-slate-200",onClick:()=>{const s=I(10);l(a=>({...a,password:s}))},children:e.jsx(A,{})})]});return o.useEffect(()=>{n&&l(n)},[n]),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"p-6 grid gap-4",children:[e.jsxs("div",{className:"flex gap-2 flex-col",children:[e.jsx("label",{className:"text-base text-slate-600",children:"Profile Picture"}),e.jsx(B,{value:t.profile,onChange:s=>{l(a=>({...a,profile:s}))}})]}),e.jsxs("div",{className:"grid lg:grid-cols-3 grid-cols-1 gap-6",children:[e.jsx(d,{label:"Name",name:"name",important:!0,error:i.name,value:t.name,placeholder:"Enter a name",onChange:s=>{c(s)}}),e.jsx(d,{label:"Email",name:"email",type:"text",important:!0,error:i.email,value:t.email,placeholder:"Enter a email",onChange:s=>{c(s)}}),e.jsx(d,{label:"Password",name:"password",important:!0,type:u?"text":"password",error:i.password,value:t.password,placeholder:"Enter a password",onChange:s=>{c(s)},button:e.jsx(w,{})}),e.jsxs("div",{className:"flex gap-2 flex-col",children:[e.jsx("label",{className:"text-base text-slate-600",children:"Gender"}),e.jsx(h,{options:S,value:t.gender,onChange:s=>{l(a=>({...a,gender:s}))},fields:s=>s})]}),e.jsxs("div",{className:"flex gap-2 flex-col",children:[e.jsx("label",{className:"text-base text-slate-600",children:"Marital status"}),e.jsx(h,{options:E,value:t==null?void 0:t.marital_status,onChange:s=>{l(a=>({...a,marital_status:s}))},emptylist:!0,search:!0,fields:s=>s.name})]})]})]}),e.jsxs("div",{className:"border-t border-slate-300 p-4 flex gap-4",children:[e.jsx(M,{text:"Save",icon:e.jsx(F,{}),type:"submit",loading:v}),e.jsx(V,{type:"button",text:"Cancel",onClick:()=>g(-1,{replace:!0})})]})]})};export{q as default};