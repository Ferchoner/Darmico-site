import{_ as x,a as y,b as w}from"./Footer.2241c196.js";import{_ as d,o as u,c as p,a as e,n as h,t as C,f as c,v as l,b as r,g as S,p as v,e as b,d as k,u as $}from"./entry.87ec3587.js";import{_ as E}from"./loading_icon.40b007c8.js";import"./nuxt-link.af7069ef.js";const R={name:"FormComponent",data(){return{loading:!1,form:{_token:"",fullname:" ",email:" ",phone:" ",message:" "},submitResults:{}}},methods:{formSubmit(s){this.loading||(this.loading=!0,this.sendData(this.form).then(o=>this.showSuccessMessage(o)).catch(o=>this.showErrorMessage(o)))},async sendData(s){const o=document.getElementsByName("csrf-token")[0].content;return s._token=o,await $fetch("/send-pricing",{headers:{"X-CSRF-TOKEN":o},method:"POST",body:s})},showSuccessMessage(s){s.status==="Done"?(this.submitResults={done:!0,message:"¡Tus datos han sido registrados! En breve te contactaremos"},this.form={email:" ",fullname:" ",phone:" ",message:" "},setTimeout(()=>this.submitResults={},5e3)):this.submitResults={done:!1,message:"Lo sentimos, ha ocurrido un error inesperado durante el registro de su información"},this.loading=!1},showErrorMessage(s){var o;this.loading=!1,this.submitResults={done:!1,message:((o=s.data)==null?void 0:o.message)||"Lo sentimos, ha ocurrido un error desconocido"}}}},i=s=>(v("data-v-50cf9f18"),s=s(),b(),s),z={class:"contact-form-container"},I=i(()=>e("img",{src:E,alt:"Cargando..."},null,-1)),M=[I],T={class:"form-group",role:"group"},V=i(()=>e("label",{for:"fullname"},"Nombre Completo",-1)),D={class:"form-group",role:"group"},N=i(()=>e("label",{for:"email"},"E-mail",-1)),B={class:"form-group",role:"group"},q=i(()=>e("label",{for:"phone"},"Teléfono",-1)),F={class:"form-group",role:"group"},L=i(()=>e("label",{for:"message"},"Mensaje",-1)),P={class:"form-group"};function U(s,o,g,_,t,a){const m=x;return u(),p("div",z,[e("div",{class:h("loader-bg "+(t.loading?"show":""))},M,2),e("label",{for:"results",class:h(t.submitResults.done?"success":"error")},C(t.submitResults.message),3),e("form",{action:"/save-info",class:"text-white text-seravek-regular contact-form",validate:"",onSubmit:o[4]||(o[4]=S((...n)=>a.formSubmit&&a.formSubmit(...n),["stop","prevent"]))},[e("div",T,[V,c(e("input",{name:"fullname",type:"text",id:"fullname",required:"",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=n=>t.form.fullname=n)},null,512),[[l,t.form.fullname]])]),e("div",D,[N,c(e("input",{name:"email",type:"text",id:"email",required:"",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=n=>t.form.email=n)},null,512),[[l,t.form.email]])]),e("div",B,[q,c(e("input",{name:"phone",type:"text",id:"phone",required:"",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=n=>t.form.phone=n)},null,512),[[l,t.form.phone]])]),e("div",F,[L,c(e("textarea",{name:"message",wrap:"soft",type:"text",id:"message",required:"",class:"form-control",style:{resize:"none",height:"100px"},"onUpdate:modelValue":o[3]||(o[3]=n=>t.form.message=n)},`
          `,512),[[l,t.form.message]])]),e("fieldset",P,[r(m,{"class-list":"btn btn-send red",href:"#send",text:"Enviar"})])],32)])}const O=d(R,[["render",U],["__scopeId","data-v-50cf9f18"]]);const j={name:"ContactPage"},f=s=>(v("data-v-72cd8533"),s=s(),b(),s),H={class:"contact-page container-fluid"},K={class:"row align-items-center"},X=f(()=>e("div",{class:"col-12 col-lg-1"},null,-1)),A=f(()=>e("div",{class:"col-12 col-lg-6 text-seravek-light page-title"},[k(" Contáctanos y "),e("br"),e("span",{class:"text-seravek-bold bigger"},"cotiza tu proyecto")],-1)),G={class:"col-12 col-lg-4 page-form"},J=f(()=>e("div",{class:"col-12 col-lg-1"},null,-1));function Q(s,o,g,_,t,a){const m=O;return u(),p("div",H,[e("div",K,[X,A,e("div",G,[r(m)]),J])])}const W=d(j,[["render",Q],["__scopeId","data-v-72cd8533"]]);const Y={class:"the-container"},Z={name:"CotizarPage"},ee=Object.assign(Z,{setup(s){return $({title:"Darmico | Cotizar"}),(o,g)=>{const _=y,t=W,a=w;return u(),p("div",Y,[r(_),r(t),r(a)])}}}),ae=d(ee,[["__scopeId","data-v-2ba7c843"]]);export{ae as default};
