import{W as x,j as e,Y as p}from"./app-BRtK-Pim.js";import{A as h}from"./AuthenticatedLayout-CTplFj26.js";import{I as r}from"./InputLabel-Da9_w0or.js";import{T as l,I as n}from"./TextInput-DIzHH3_G.js";import{P as j}from"./PrimaryButton-_yfw9C0b.js";import{S as b}from"./Spinner-tmusMVsw.js";import"./ApplicationLogo-DLtXPY1M.js";import"./transition-r7iQzgOY.js";function k({auth:o}){const{data:s,setData:t,post:u,processing:i,errors:m,reset:g}=x({name:"",number:null,email:"",address:""}),d=a=>{a.preventDefault();const c={...s,number:parseInt(s.number,10)};u(route("contact.store"),{data:c})};return e.jsxs(h,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Contact Create"}),children:[e.jsx(p,{title:"Contact Create"}),e.jsx("section",{className:"max-w-2xl px-6 py-10 mx-auto",children:e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"name",value:"Name"}),e.jsx(l,{id:"name",type:"text",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,placeholder:"John",onChange:a=>t("name",a.target.value)}),e.jsx(n,{message:m.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"number",value:"Number"}),e.jsx(l,{id:"number",type:"number",name:"number",value:s.number,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,placeholder:"+880",onChange:a=>t("number",a.target.value)}),e.jsx(n,{message:m.number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,placeholder:"example@gmail.com",onChange:a=>t("email",a.target.value)}),e.jsx(n,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"address",value:"Address"}),e.jsx(l,{id:"address",type:"text",name:"address",value:s.address,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,placeholder:"Street / City / Country",onChange:a=>t("address",a.target.value)}),e.jsx(n,{message:m.address,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(j,{children:[i?e.jsx(b,{className:"w-4 h-4 mr-2"}):"","Create Contact"]})})]})})]})}export{k as default};