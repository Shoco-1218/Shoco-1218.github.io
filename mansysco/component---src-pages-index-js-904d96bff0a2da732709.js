(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IMjo:function(e,a,t){},LOGX:function(e,a,t){e.exports=t.p+"static/3d_video-ea73e05254331e3a76d2c86f66eb84ec.mp4"},RXBc:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=t("Bl7J"),r=t("vrFN"),m=(t("wsuS"),t("Wbzz")),o=function(){return n.a.createElement("div",{id:"slider"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",null),n.a.createElement("div",{id:"firstText",className:"fontFour"},n.a.createElement("h1",{className:"fontFive"},"ManSysCo Pty Ltd.",n.a.createElement("br",null)),n.a.createElement("p",null,"Delivering outcomes not just outputs"))),n.a.createElement("li",null,n.a.createElement("span",null),n.a.createElement("div",{id:"secondText",className:"fontFour "},n.a.createElement("h1",{className:"fontFive"},"Our capabilities",n.a.createElement("br",null)),n.a.createElement("p",null,"we are uniquely positioned ",n.a.createElement("br",null),"to tackle more complex",n.a.createElement("br",null),"and challenging engineering/R&D projects."))),n.a.createElement("li",null,n.a.createElement("span",null),n.a.createElement("div",{id:"thirdText",className:"fontFour"},n.a.createElement("h1",{className:"fontFive"},"Reliablity",n.a.createElement("br",null)),n.a.createElement("p",null,"We are passionate about our services, ",n.a.createElement("br",null),"and want to utilise them for your benefit."),n.a.createElement("button",{id:"contactBtn",className:"fontFour"},n.a.createElement(m.a,{to:"/#contact"},"Contact us"))))))},i=(t("avuP"),t("glb0"),0),s=function(e){var a=Object(l.useState)(""),t=a[0],c=a[1],r=Object(l.useState)(""),o=r[0],s=r[1],u=e.data_sources,g=function(e){c(u[e].image),s(u[e].category)};Object(l.useEffect)((function(){console.log(e.clicked_index),i=e.clicked_index,g(i)}),[]);var E=function(e){1===e?i===u.length-1?g(i=0):(i++,g(i)):0===e&&(0===i?(i=u.length-1,g(i)):(i--,g(i)))};return n.a.createElement("div",{className:"modal_container"},n.a.createElement("div",{className:"white_box"},n.a.createElement("div",{className:"left_box"},n.a.createElement("button",{className:"left_modal_button",onClick:function(){return E(0)}},n.a.createElement("i",{className:"fas fa-chevron-left fontFour"}))),n.a.createElement("div",{className:"close_box"},n.a.createElement("button",{className:"close_modal_button",onClick:e.close_modal},"×")),n.a.createElement("div",{className:"link_box"},n.a.createElement("button",{className:"link_category_button"},n.a.createElement(m.a,{to:"/"},o))),n.a.createElement("div",{className:"title_box"},n.a.createElement("h2",{className:"modal_title fontTwo"},"Project Title")),n.a.createElement("div",{className:"image_box"},n.a.createElement("img",{src:t,className:"modal_image",alt:"images in modal"})),n.a.createElement("div",{className:"comment_box"},n.a.createElement("h3",{className:"modal_comment fontTwo"},"I am the Goran san ! Bla bla bla bla bla~")),n.a.createElement("div",{className:"right_box"},n.a.createElement("button",{className:"right_modal_button",onClick:function(){return E(1)}},n.a.createElement("i",{className:"fas fa-chevron-right fontFour"})))))},u=t("LOGX"),g=t.n(u),E=[{image:"img/project1.jpg",category:"1"},{image:"img/project2.jpg",category:"2"},{image:"img/project3.jpg",category:"3"},{image:"img/project1.jpg",category:"4"},{image:"img/project2.jpg",category:"5"},{image:"img/project3.jpg",category:"6"},{image:"img/project1.jpg",category:"7"},{image:"img/project2.jpg",category:"8"},{image:"img/project3.jpg",category:"9"},{image:"img/project1.jpg",category:"10"},{image:"img/project2.jpg",category:"11"},{image:"img/project3.jpg",category:"12"},{image:"img/project3.jpg",category:"13"},{image:"img/project3.jpg",category:"14"},{image:"img/project3.jpg",category:"15"},{image:"img/project3.jpg",category:"16"},{image:"img/project3.jpg",category:"17"},{image:"img/project3.jpg",category:"18"},{image:"img/project3.jpg",category:"19"},{image:"img/project3.jpg",category:"20"},{image:"img/project3.jpg",category:"21"},{image:"img/project3.jpg",category:"22"},{image:"img/project3.jpg",category:"23"},{image:"img/project3.jpg",category:"24"}],p=function(){var e=Object(l.useState)(),a=e[0],t=e[1],c=Object(l.useState)(1),r=c[0],m=c[1];return n.a.createElement(n.a.Fragment,null,a,n.a.createElement("div",{className:"garelly_container"},n.a.createElement("div",{className:"inner_container"},n.a.createElement("h1",null,"Our Projects"),n.a.createElement("div",null,Array.from({length:r},(function(e,a){return n.a.createElement("div",{className:"garelly"},E.slice(12*a,12*a+12).map((function(e,a){return n.a.createElement("div",{className:"img_box",key:a,onClick:function(){return e=a,l=n.a.createElement(s,{clicked_index:e,data_sources:E,close_modal:function(){return t(null)}}),void t(l);var e,l}},n.a.createElement("img",{src:e.image,alt:"Project images"}))})))}))),n.a.createElement("button",{className:"show_more fontTwo",onClick:function(){return m(r+1)}},"Show More  ",n.a.createElement("i",{className:"fas fa-caret-down fontTwo"})))))},d=function(){return n.a.createElement("div",{id:"about"},n.a.createElement(p,null),n.a.createElement("div",{className:"aboutContainer"},n.a.createElement("div",{className:"flex_right flexHeight"},n.a.createElement("video",{autoPlay:!0,loop:!0,preload:"auto"},n.a.createElement("source",{src:g.a,type:"video/mp4"}),n.a.createElement("track",{default:!0}))),n.a.createElement("div",{className:"flex_left flexHeight"},n.a.createElement("div",{className:"fontFour textContainer"},n.a.createElement("h2",null,"Our Services"),n.a.createElement("p",null,"Our mission is your wish"),n.a.createElement(m.a,{to:"/service"},n.a.createElement("i",{className:"fas fa-angle-double-left"}),"  Learn more")))))},f=(t("IMjo"),function(){return n.a.createElement("div",{id:"contact"},n.a.createElement("div",{className:"contactItem"},n.a.createElement("div",{className:"fontFour"},n.a.createElement("h3",null,"Contact Information "),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"blue"},"<",n.a.createElement("i",{className:"fas fa-home"}),">"),n.a.createElement("br",null),"ManSysCo Pty Ltd",n.a.createElement("br",null),"52 Lady Game Drive",n.a.createElement("br",null),"Killara, 2071",n.a.createElement("br",null),"New South Wales",n.a.createElement("br",null),"AUSTRALIA",n.a.createElement("br",null)),n.a.createElement("li",null,n.a.createElement("span",{className:"blue"},"<",n.a.createElement("i",{className:"fas fa-phone"}),">"),n.a.createElement("br",null),"+61-(0)415-648-079"),n.a.createElement("li",null,n.a.createElement("span",{className:"blue"},"<",n.a.createElement("i",{className:"fas fa-envelope"}),">"),n.a.createElement("br",null),"info@mansysco.com"),n.a.createElement("li",null,"9am-5pm, Mon-Fri")))))});a.default=function(){return n.a.createElement(c.a,null,n.a.createElement(r.a,{title:"Home"}),n.a.createElement(o,null),n.a.createElement(d,null),n.a.createElement(f,null))}},avuP:function(e,a,t){},glb0:function(e,a,t){},wsuS:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-904d96bff0a2da732709.js.map