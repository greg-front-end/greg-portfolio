import{a as k}from"./chunk-52ZAVZ4C.js";import{a as L,b as T}from"./chunk-ETRCICK6.js";import{$ as D,D as _,F as e,J as S,K as P,M as w,Q as t,R as n,S as g,T as M,U as O,V as x,Y as i,Z as p,_ as r,aa as a,ba as o,ia as I,n as u,r as C,va as E,w as f,wa as B,x as h,xa as y}from"./chunk-SW3SOJQC.js";function j(l,d){if(l&1){let b=M();t(0,"div",2)(1,"h1"),i(2),a(3,"translate"),t(4,"span"),i(5),a(6,"translate"),n()()(),t(7,"div",3)(8,"div",4)(9,"section",5)(10,"p"),i(11),a(12,"translate"),n(),t(13,"button",6),O("click",function(){f(b);let c=x();return h(c.downloadCV())}),i(14),a(15,"translate"),g(16,"svg-icon",7),n()(),t(17,"section",8)(18,"h2",9),i(19),a(20,"translate"),n(),t(21,"div",10)(22,"span",11),i(23),a(24,"translate"),n(),t(25,"span",12),i(26),a(27,"translate"),n(),t(28,"p",13),i(29),a(30,"translate"),n()(),t(31,"div",10)(32,"span",11),i(33),a(34,"translate"),n(),t(35,"span",12),i(36),a(37,"translate"),n(),t(38,"p",13),i(39),a(40,"translate"),n()()(),t(41,"section",14)(42,"h2",9),i(43),a(44,"translate"),n(),t(45,"div",15)(46,"span",11),i(47),a(48,"translate"),n(),t(49,"span",13),i(50),a(51,"translate"),n()(),t(52,"div",15)(53,"span",11),i(54),a(55,"translate"),n(),t(56,"span",13),i(57),a(58,"translate"),n()(),t(59,"div",15)(60,"span",11),i(61),a(62,"translate"),n(),t(63,"span",13),i(64),a(65,"translate"),n()(),t(66,"div",15)(67,"span",11),i(68),a(69,"translate"),n(),t(70,"span",13),i(71),a(72,"translate"),n()()(),t(73,"section",14)(74,"h2",9),i(75),a(76,"translate"),n(),t(77,"div",15)(78,"span",16),i(79),a(80,"translate"),n(),t(81,"span",16),i(82),a(83,"translate"),n(),t(84,"span",16),i(85),a(86,"translate"),n(),t(87,"span",16),i(88),a(89,"translate"),n()()()(),t(90,"div",17),g(91,"img",18),n()()}if(l&2){let b=x();e(2),r(" ",o(3,26,"about.pageSectionName")," "),e(3),r(" ",o(6,28,"about.pageSectionName")," "),e(6),r(" ",o(12,30,"about.aboutMe")," "),e(3),r(" ",o(15,32,"about.downloadSv")," "),e(5),r(" ",o(20,34,"about.experienceTitle")," "),e(4),r(" ",o(24,36,"about.workData.gcore.experiencePosition")," "),e(3),p(o(27,38,"about.workData.gcore.experienceCompany")),e(3),r(" ",o(30,40,"about.workData.gcore.experienceDescr")," "),e(4),r(" ",o(34,42,"about.workData.freelance.experiencePosition")," "),e(3),p(o(37,44,"about.workData.freelance.experienceCompany")),e(3),r(" ",o(40,46,"about.workData.freelance.experienceDescr")," "),e(4),r(" ",o(44,48,"about.educationTitle")," "),e(4),p(o(48,50,"about.educationData.fitness.educationPosition")),e(3),p(o(51,52,"about.educationData.fitness.educationDescr")),e(4),p(o(55,54,"about.educationData.freeCode.educationPosition")),e(3),p(o(58,56,"about.educationData.freeCode.educationDescr")),e(4),p(o(62,58,"about.educationData.rssSchool.educationPosition")),e(3),p(o(65,60,"about.educationData.rssSchool.educationDescr")),e(4),p(o(69,62,"about.educationData.college.educationPosition")),e(3),p(o(72,64,"about.educationData.college.educationDescr")),e(4),r(" ",o(76,66,"about.languageTitle")," "),e(4),r("",o(80,68,"about.languageData.en")," | "),e(3),r("",o(83,70,"about.languageData.es")," | "),e(3),r("",o(86,72,"about.languageData.arm")," | "),e(3),r(" ",o(89,74,"about.languageData.ru"),""),e(3),P("src","./assets/pages/about/about-me-"+b.currentLang+".gif",_)}}function U(l,d){l&1&&g(0,"app-loader")}var K=(()=>{let d=class d{constructor(){this.translateService=u(E),this.http=u(I),this.currentLang="en",this.isContentLoadedService=u(L)}ngOnInit(){this.currentLang=this.translateService.currentLang||"en",this.onLanguageChangeSubscription=this.translateService.onLangChange.subscribe(s=>{this.currentLang=s.lang})}downloadCV(){let s=`./assets/pages/about/cv/resume-${this.currentLang}.pdf`;this.http.get(s,{responseType:"blob"}).subscribe(c=>{let m=document.createElement("a"),v=URL.createObjectURL(c);m.href=v,m.download="Grachia_Martirosian_CV.pdf",m.click(),URL.revokeObjectURL(v)},c=>{console.error("Download error:",c)})}ngOnDestroy(){this.onLanguageChangeSubscription.unsubscribe()}};d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=C({type:d,selectors:[["app-about"]],standalone:!0,features:[D],decls:4,vars:1,consts:[[1,"about"],[1,"wrapper"],[1,"page-section-name"],[1,"about-wrapper"],[1,"about-content"],[1,"about-me"],["title","Download cv",1,"about-button","button",3,"click"],["src","./assets/icons/download.svg",1,"about-download-icon"],[1,"about-works","section"],[1,"section-title"],[1,"work"],[1,"position"],[1,"company"],[1,"descr"],[1,"about-education","section"],[1,"education"],[1,"position","lang"],[1,"about-image"],[3,"src"]],template:function(c,m){c&1&&(t(0,"div",0)(1,"div",1),S(2,j,92,76)(3,U,1,0),n()()),c&2&&(e(2),w(2,m.isContentLoadedService.isTranslationLoaded()?2:3))},dependencies:[y,B,k,T],styles:[".about[_ngcontent-%COMP%]{height:100%}.about[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{max-width:118.75rem}.about-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:3rem}.about-image[_ngcontent-%COMP%]{max-width:800px;position:sticky;top:calc(100vh - 600px);height:70vh}.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;object-fit:contain}.about-download-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem}.about-download-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:#fff}.about-me[_ngcontent-%COMP%]{max-width:37.5rem;margin-bottom:2rem}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#5e6572;margin-bottom:1rem}.about-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem;max-width:max-content;padding:.5rem .75rem .25rem;text-decoration:none;color:#fff;background-color:#7d98a1;border-radius:6px}.about[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{padding:0;max-width:37.5rem}.about[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{display:block}.about[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]{color:#7d98a1;font-weight:500}.about[_ngcontent-%COMP%]   .position.lang[_ngcontent-%COMP%]{display:inline}.about[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{margin-bottom:1rem;width:fit-content;color:#5e6572;font-weight:500;font-size:.875rem;border-radius:.375rem}.about[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]{display:block;color:#1c2321;font-weight:300;font-size:.875rem;margin-bottom:1rem}@media (max-width: 90rem){.about-wrapper[_ngcontent-%COMP%]{flex-direction:column-reverse}.about-image[_ngcontent-%COMP%]{position:static;height:auto}}"]});let l=d;return l})();export{K as AboutComponent};