import{a8 as P,a as D,b as k,r as d,j as a,a9 as U,I as r,H as i,i as A,a4 as L,a5 as W,a6 as I,e as R,K as B,n as O,k as T,F as V,d as z,m as G,aa as H}from"./index-DqQFnovo.js";import{A as K,u as M}from"./Avatar-DCfUZXPv.js";import{B as Y,C as _}from"./buttons-aEM2KyOV.js";import{C as $}from"./container-6bLkjHYI.js";import{f as q}from"./formValidation-CwRn66Cy.js";import{S as x}from"./select-BwQcsRO_.js";import{S as J,a as Q}from"./SelectCountry-CTss1tv1.js";const oe=()=>{const{id:v}=P(),m=D(),g=k(),{loginData:u}=B,y=[{type:"Yes"},{type:"No"}],[f,w]=d.useState(!1),[N,j]=d.useState(!1),[l,t]=d.useState({name:"",password:"",profile:"",email:"",phoneNumber:"",countryCode:"",country:"",age:"",status:{},gender:"",login:"",allowFollowUp:{},company:"",officeWebsite:"",officePhone:"",address:"",city:"",state:"",postalCode:"",note:""}),[E,b]=d.useState(!1),[p,h]=d.useState({name:"",password:"",email:"",officeWebsite:""}),o=e=>{const{name:s,value:c}=e.target;t(n=>({...n,[s]:c})),h(n=>({...n,[s]:""}))},S=async e=>{e.preventDefault();const s=q(l);if(Object.keys(s).length===0){b(!0);try{await O.promise(m(T(l)),{loading:"Updating client...",success:"Updated successfully",error:`Failed to update client: ${s.message}`}),g(-1,{replace:!0}),b(!1)}catch(n){console.log(n)}}else h(n=>({...n,...s}))},C=e=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:e==null?void 0:e.color}}),a.jsx("span",{children:e==null?void 0:e.name})]}),F=()=>a.jsxs("div",{className:"flex w-full h-full text-slate-600",children:[a.jsx("div",{className:"px-2 h-full border-r border-slate-300 flex items-center justify-center hover:bg-slate-200",onClick:()=>{w(e=>!e)},children:f?a.jsx(V,{size:18}):a.jsx(z,{size:18})}),a.jsx("div",{className:"px-2 h-full flex items-center justify-center hover:bg-slate-200",onClick:()=>{const e=M(10);t(s=>({...s,password:e})),h(s=>({...s,password:""}))},children:a.jsx(G,{})})]});return d.useEffect(()=>{(async()=>{j(!0);const c=(await m(H(v))).payload;c&&t(n=>({...n,...c})),j(!1)})()},[m]),a.jsx("div",{className:"p-6",children:a.jsxs($,{className:"w-full h-full",children:[a.jsx("div",{className:"border-b border-slate-300 p-4",children:a.jsx("h2",{className:"text-xl font-bold",children:"Update Client"})}),N&&a.jsx(U,{}),a.jsxs("form",{onSubmit:S,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"p-4 grid gap-6",children:[a.jsxs("div",{className:"grid lg:grid-cols-[1fr_180px] lg:gap-6 gap-4",children:[a.jsxs("div",{className:"grid sm:grid-cols-3 grid-cols-1 gap-6",children:[a.jsx(r,{label:"Name",name:"name",important:!0,error:p.name,value:l.name,placeholder:"Enter a name",onChange:e=>{o(e)}}),a.jsx(r,{label:"Email",name:"email",type:"text",important:!0,error:p.email,value:l.email,placeholder:"Enter a email",onChange:e=>{o(e)}}),a.jsx(r,{label:"Password",name:"password",important:!0,type:f?"text":"password",error:p.password,value:l.password,placeholder:"Enter a password",onChange:e=>{o(e)},button:a.jsx(F,{})}),a.jsx(i,{label:"Gender",children:a.jsx(x,{options:A,value:l.gender,onChange:e=>{t(s=>({...s,gender:e}))},fields:e=>e})}),a.jsx(i,{label:"Country",children:a.jsx(J,{value:l.country,onChange:e=>{t(s=>({...s,country:e,countryCode:e}))}})}),a.jsx(i,{label:"Phone no",htmlFor:"phone",children:a.jsxs("div",{className:"flex",children:[a.jsx(Q,{value:l.countryCode,onChange:e=>{t(s=>({...s,countryCode:e}))}}),a.jsx(r,{type:"tel",name:"phone",value:l.phoneNumber,onChange:e=>{t(s=>({...s,phoneNumber:e.target.value}))}})]})})]}),a.jsx(i,{label:"Profile Picture",children:a.jsx(K,{value:l.profile,onChange:e=>{t(s=>({...s,profile:e}))}})})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-8",children:[a.jsx(r,{type:"number",label:"Age",value:l.age,name:"age",onChange:e=>{o(e)}}),a.jsx(i,{label:"Status",children:a.jsx(x,{options:l.statusMenu,value:l.status,onChange:e=>{t(s=>({...s,status:e}))},optiontemplete:C,valuetemplete:C,fields:e=>e.name})}),a.jsx(i,{label:"Follow up",children:a.jsx(x,{options:y,value:l.allowFollowUp,onChange:e=>{t(s=>({...s,allowFollowUp:e}))},fields:e=>e.type})})]}),a.jsx(i,{label:"Login Allowed",children:a.jsx("div",{className:"flex gap-6 items-center",children:u==null?void 0:u.map((e,s)=>a.jsx(L,{id:e,name:"login",label:e,value:e,checked:l.login===e,onChange:c=>{t(n=>({...n,login:c}))}},s))})})]}),a.jsxs("div",{children:[a.jsx("div",{className:"border-t border-slate-300 p-4",children:a.jsx("h2",{className:"text-xl",children:"Company Details"})}),a.jsxs("div",{className:"p-4 grid gap-6",children:[a.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[a.jsx(r,{label:"Company Name",name:"company",placeholder:"Enter a company name",value:l.company,onChange:e=>{o(e)}}),a.jsx(r,{type:"tel",label:"Office Phone No",name:"officePhone",placeholder:"Enter a phone no",value:l.officePhone,onChange:e=>{o(e)}}),a.jsx(r,{label:"Office Website",name:"officeWebsite",placeholder:"Enter a website url",error:p.officeWebsite,value:l.officeWebsite,onChange:e=>{o(e)}}),a.jsx(r,{label:"City",name:"city",placeholder:"Enter a city name",value:l.city,onChange:e=>{o(e)}}),a.jsx(r,{label:"State",name:"state",placeholder:"Enter a state",value:l.state,onChange:e=>{o(e)}}),a.jsx(r,{label:"Postal Code",name:"postalCode",placeholder:"Enter a postalCode",value:l.postalCode,onChange:e=>{o(e)}})]}),a.jsx(W,{type:"text",label:"Address",placeholder:"Enter a address",name:"address",value:l.address,onChange:e=>{o(e)}}),a.jsx(i,{label:"Note",children:a.jsx(I,{value:l.note,onChange:e=>{t(s=>({...s,note:e}))}})})]})]})]}),a.jsxs("div",{className:"border-t border-slate-300 p-4 flex gap-4",children:[a.jsx(Y,{text:"Submit",icon:a.jsx(R,{}),type:"submit",loading:E}),a.jsx(_,{type:"button",text:"Cancel",onClick:()=>g(-1,{replace:!0})})]})]})]})})};export{oe as default};