import{a as r}from"./axios-4a70c6fc.js";const n=r.create({baseURL:"http://tailieubtp.com"}),c={"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},i=async(s,e={},a={})=>{try{return(await n.get(s,e,{...c,...a}).catch(o=>{throw o})).data}catch(t){return{...t.response.data,status:t.response.status}}};export{c as H,i as g,n as r};
