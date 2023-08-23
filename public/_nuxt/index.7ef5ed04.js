import{_ as b,a as f,b as x}from"./Footer.2241c196.js";import{_ as v,o as r,c as p,a as e,b as n,F as y,r as w,k as V,l as S,i as h,p as C,e as I,j as g}from"./entry.87ec3587.js";import{a as P,_ as E}from"./experiencia_DARMICO.75edb85d.js";import"./nuxt-link.af7069ef.js";const L=h(()=>g(()=>import("./ProjectSection.3ebe494a.js"),["./ProjectSection.3ebe494a.js","./entry.87ec3587.js","./entry.864fe712.css","./ProjectSection.db6a511d.css"],import.meta.url).then(t=>t.default||t)),D=h(()=>g(()=>import("./VideoPlayer.3cc42df1.js"),["./VideoPlayer.3cc42df1.js","./spot_DARMICO.18b74f02.js","./entry.87ec3587.js","./entry.864fe712.css","./spot_DARMICO.82937812.css","./1-1_DARMICO.41503a7c.js","./1-1slider_DARMICO.bf21090b.js","./1-2_DARMICO.43adfcb3.js","./1-2slider_DARMICO.db261201.js","./1-3_DARMICO.92ffffda.js","./1-3slider_DARMICO.a4dc401a.js","./1-4_DARMICO.23303d17.js","./1-4slider_DARMICO.c701a3fe.js","./2-1_DARMICO.c679ac95.js","./2-1slider_DARMICO.488e4c41.js","./2-2_DARMICO.487cc92f.js","./2-2slider_DARMICO.d138173a.js","./2-3_DARMICO.b1c09732.js","./2-3slider_DARMICO.842b46d4.js","./2-4_DARMICO.e720730c.js","./2-4slider_DARMICO.d4bbce70.js","./3-1_DARMICO.0fcc95fc.js","./4-1_DARMICO.dcfdfff1.js","./4-1slider_DARMICO.5ea16ba5.js","./4-2_DARMICO.0a842ace.js","./4-2slider_DARMICO.b2c41496.js","./4-3_DARMICO.2a20bc38.js","./4-3slider_DARMICO.59f56079.js","./4-4_DARMICO.2e16c72e.js","./4-4slider_DARMICO.191a6c98.js","./Footer.2241c196.js","./nuxt-link.af7069ef.js","./Footer.d7d54109.css","./analisis_DARMICO.2f77e801.js","./arquitectonico_DARMICO.d6c0edda.js","./desarrollos_DARMICO.87fcd775.js","./electrico_DARMICO.bb576129.js","./experiencia_DARMICO.75edb85d.js","./loading_icon.40b007c8.js","./obra_DARMICO.e2de9a31.js","./previo-video_DARMICO.c47446fc.js","./remodelacion_DARMICO.33bf67a4.js","./restauracion_DARMICO.48b1d23e.js","./text_DARMICO.d1454524.js","./VideoPlayer.a069c671.css"],import.meta.url).then(t=>t.default||t)),M={name:"HomePage",data(){return{sections:[{id:"restauracion",url:"restauracion_DARMICO",classes:"right",title:"Restauración"},{id:"remodelacion",url:"remodelacion_DARMICO",classes:"left",title:"Remodelación"},{id:"analisis",url:"analisis_DARMICO",classes:"right",title:"Análisis y Precios Unitarios"},{id:"arqui",url:"arquitectonico_DARMICO",classes:"left",title:"Proyecto Arquitectónico"},{id:"electrico",url:"electrico_DARMICO",classes:"right",title:"Proyecto Eléctrico"},{id:"ejecucion",url:"obra_DARMICO",classes:"left",title:"Ejecución de Obra"}]}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{getProjectSectionHeight(){const t=document.querySelector(".project-section");return t?t.clientHeight:0},handleScroll(t){this.sections.forEach(o=>{const s=document.querySelector(`#${o.id}`);let d=!1;s&&(d=s.getBoundingClientRect()),this.isInViewport(d)?s.classList.add("active"):s.classList.remove("active")})},isInViewport(t){const o=(window.innerHeight||document.documentElement.clientHeight)/2-this.getProjectSectionHeight()/2-90,s=(window.innerHeight||document.documentElement.clientHeight)/2+this.getProjectSectionHeight()/2+90;return t.top>=o&&t.bottom<=s},toDevelopments(){this.$router.push("desarrollos")},toTeam(){this.$router.push("equipo")},openVideoModal(t){const o=document.querySelector(".video-modal-pop"),s=document.querySelector(".video-modal-pop video");o&&(o.classList.add("visible"),s.play())},closeVideoModal(t){const o=document.querySelector(".video-modal-pop"),s=document.querySelector(".video-modal-pop video");o&&(o.classList.remove("visible"),s.pause())}}},c=t=>(C("data-v-680307bd"),t=t(),I(),t),H={class:"home-page container-fluid mx-0 p-0"},q={class:"row m-0 px-0 main-content"},A={class:"col bg-area"},R={class:"row"},j=V('<div class="col-12 col-md-7 d-flex align-content-center align-items-lg-end title-container" data-v-680307bd><div class="w-100" data-v-680307bd><span class="title-2" data-v-680307bd>Profesionales de la</span> <br data-v-680307bd><span class="title-1" data-v-680307bd>Construcción</span><span class="title-description" data-v-680307bd> Dedicados al diseño y desarrollo de inmuebles, especializados en la edificación de casas habitación con los máximos estándares de calidad </span></div></div>',1),k={class:"col-12 col-md-5 video-btn-cont d-flex align-items-center align-items-lg-end justify-content-end"},O={class:"row m-0 px-0 developments"},$={class:"col bg-area"},z={class:"row h-100"},B={class:"col h-100 title-container text-right"},T={class:"w-100"},F=c(()=>e("span",{class:"title-1 text-center"},"Desarrollos",-1)),N=c(()=>e("span",{class:"title-description text-center"}," Edificación y construcción, diseño arquitectónico y mantenimiento inmobiliario ",-1)),U={class:"row m-0 px-0 sections"},G={class:"row m-0 px-0 experience"},J={class:"col bg-area"},K={class:"row h-100"},Q={class:"col-12 col-lg-6 title-container"},W={class:"w-100 label-cont"},X=c(()=>e("span",{class:"title-2 text-seravek-light"},"Profesionalismo y",-1)),Y=c(()=>e("span",{class:"title-1 text-seravek-bold"},"Experiencia",-1)),Z=c(()=>e("div",{class:"col-12 col-lg-6 d-none d-lg-flex video-btn-cont align-items-center justify-content-center"},[e("img",{src:P,alt:"Experiencia",class:"img-fluid img-exp"})],-1)),ee={class:"video-modal-pop"},te=c(()=>e("div",{class:"bg-modal-background"},null,-1)),oe=c(()=>e("img",{src:E,class:"img-fluid",alt:"Cerrar",title:"Cerrar"},null,-1)),se=[oe],ie={class:"modal-container"};function ne(t,o,s,d,u,a){const l=b,_=L,m=D;return r(),p("div",H,[e("div",q,[e("div",A,[e("div",R,[j,e("div",k,[n(l,{"class-list":"btn btn-video blue",href:"#cotizar",text:"Ver video","el-name":"ver-video",onVerVideo:a.openVideoModal},null,8,["onVerVideo"])])])])]),e("div",O,[e("div",$,[e("div",z,[e("div",B,[e("div",T,[F,N,n(l,{"class-list":"btn btn-ver blue",text:"Ver todos","el-name":"to-developments",onToDevelopments:a.toDevelopments},null,8,["onToDevelopments"])])])])])]),e("div",U,[(r(!0),p(y,null,w(u.sections,i=>(r(),S(_,{id:i.id,key:i.id,"section-id":i.id,classes:i.title+" "+i.classes,title:i.title,image:i.url},null,8,["id","section-id","classes","title","image"]))),128))]),e("div",G,[e("div",J,[e("div",K,[e("div",Q,[e("div",W,[X,Y,n(l,{"class-list":"btn btn-conoce-mas",href:"#conoce-mas",text:"Conoce Más","el-name":"conoce-mas",onConoceMas:a.toTeam},null,8,["onConoceMas"])])]),Z])])]),e("div",ee,[te,e("div",{class:"close-icon",onClick:o[0]||(o[0]=(...i)=>a.closeVideoModal&&a.closeVideoModal(...i))},se),e("div",ie,[n(m)])])])}const ce=v(M,[["render",ne],["__scopeId","data-v-680307bd"]]);const ae={name:"IndexPage"},le={class:"the-container"};function de(t,o,s,d,u,a){const l=f,_=ce,m=x;return r(),p("div",le,[n(l),n(_),n(m)])}const ue=v(ae,[["render",de],["__scopeId","data-v-0f3e99b4"]]);export{ue as default};