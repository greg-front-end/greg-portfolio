import"./chunk-4BRJR7SL.js";import{c as b,e as M}from"./chunk-4DWNO6FM.js";import{$a as o,Ba as S,Eb as k,Fb as O,Gb as B,Ia as u,Ka as x,La as j,Ma as v,Na as t,Oa as i,Pa as C,Q as f,V as P,Xa as r,Ya as s,Za as d,_a as w,a as h,ab as p,ra as _,va as e}from"./chunk-H35Q2IFY.js";var L=(n,a)=>a.label;function E(n,a){if(n&1&&(t(0,"li",11)(1,"span"),r(2),o(3,"translate"),i(),t(4,"span"),r(5),o(6,"translate"),i()()),n&2){let c=a.$implicit;e(2),d(" ",p(3,2,c.label),": "),e(3),s(p(6,4,c.description))}}function I(n,a){if(n&1&&(t(0,"li",11)(1,"span"),r(2),o(3,"translate"),i(),t(4,"span"),r(5),o(6,"translate"),i()()),n&2){let c=a.$implicit;e(2),d(" ",p(3,2,c.label),": "),e(3),s(p(6,4,c.description))}}function y(n,a){if(n&1&&(t(0,"li",18),r(1),o(2,"translate"),i()),n&2){let c=a.$implicit;e(),s(p(2,1,c))}}function T(n,a){if(n&1&&(t(0,"li",16),r(1),o(2,"translate"),i(),t(3,"ul",17),j(4,y,3,3,"li",18,x),i()),n&2){let c=a.$implicit;e(),s(p(2,1,c.label)),e(3),v(c.list)}}var G=(()=>{let a=class a{constructor(){this.route=f(b),this.translateService=f(k),this.card=S({workTitle:""}),this.projectLinkLabels={goBack:"",seeProject:""}}ngOnInit(){let g=this.route.snapshot.paramMap.get("id");console.log(g),this.card.set(this.translateService.translations[this.translateService.currentLang].portfolio[g]),this.projectLinkLabels=h({},this.translateService.translations[this.translateService.currentLang].portfolio.projectLinksLabels),this.translateService.onLangChange.subscribe(m=>{this.card.set(m.translations.portfolio[g]),this.projectLinkLabels=h({},this.translateService.translations[this.translateService.currentLang].portfolio.projectLinksLabels)})}};a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=P({type:a,selectors:[["app-project-page"]],standalone:!0,features:[w],decls:49,vars:30,consts:[[1,"project"],[1,"wrapper"],[1,"page-section-name"],[1,"project-content-wrapper"],[1,"project-content"],[1,"project-links-wrapper"],["routerLink","../"],["target","_blank",3,"href"],[1,"project-elements"],[1,"project-title"],[1,"project-list"],[1,"project-list-item"],[1,"project-problemSolved-wrapper"],[1,"project-detail"],[1,"project-image-wrapper"],[3,"src","alt"],[1,"project-detail-title"],[1,"project-detail-list"],[1,"project-detail-list-item"]],template:function(m,l){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),r(4),o(5,"translate"),t(6,"span"),r(7),o(8,"translate"),i()()(),t(9,"div",3)(10,"div",4)(11,"div",5)(12,"a",6),r(13),o(14,"translate"),i(),t(15,"a",7),r(16),o(17,"translate"),i()(),t(18,"div",8)(19,"h2",9),r(20),o(21,"translate"),i(),t(22,"ul",10),j(23,E,7,6,"li",11,L),i()(),t(25,"div",12)(26,"h2",9),r(27),o(28,"translate"),i(),t(29,"p",11),r(30),o(31,"translate"),i()(),C(32,"p"),t(33,"div",8)(34,"h2",9),r(35),o(36,"translate"),i(),t(37,"ul",10),j(38,I,7,6,"li",11,L),i()(),t(40,"div",8)(41,"h2",9),r(42),o(43,"translate"),i(),t(44,"ol",13),j(45,T,6,3,null,null,x),i()()(),t(47,"div",14),C(48,"img",15),i()()()()),m&2&&(e(4),d("",p(5,12,l.card().workTitle)," "),e(3),s(p(8,14,l.card().workTitle)),e(6),s(p(14,16,l.projectLinkLabels.goBack)),e(2),u("href",l.card().url,_),e(),s(p(17,18,l.projectLinkLabels.seeProject)),e(4),d(" ",p(21,20,l.card().technologyStackTitle||"")," "),e(3),v(l.card().technologyStack),e(4),d(" ",p(28,22,l.card().problemSolvedTitle||"")," "),e(3),d(" ",p(31,24,l.card().problemSolved||"")," "),e(5),d(" ",p(36,26,l.card().featuresTitle||"")," "),e(3),v(l.card().features),e(4),d(" ",p(43,28,l.card().implementationDetailsTitle||"")," "),e(3),v(l.card().implementationDetails),e(3),u("src",l.card().img,_)("alt",l.card().img))},dependencies:[B,O,M],styles:[".project[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{max-width:100%;overflow:auto;height:calc(100vh - 64px)}.project-content-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:3rem}.project-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;max-width:50%;padding-bottom:1rem}.project-links-wrapper[_ngcontent-%COMP%]{box-shadow:0 2px #0000004d;padding-bottom:1rem;margin-bottom:1rem}.project-links-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding-inline:1rem;border:1px solid #A9B4C2;border-radius:.25rem}.project-title[_ngcontent-%COMP%]{font-size:1.25rem;color:#7d98a1;margin-bottom:1rem}.project-list-item[_ngcontent-%COMP%]{color:#5e6572}.project-list-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}.project-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{font-weight:600}.project-detail[_ngcontent-%COMP%]{color:#5e6572;list-style:none;padding-left:1.5rem}.project-detail-title[_ngcontent-%COMP%]{font-weight:600}.project-detail-list[_ngcontent-%COMP%]{list-style:disc}.project-image-wrapper[_ngcontent-%COMP%]{max-width:600px;width:100%;height:80vh;margin-inline:auto;position:sticky;top:0;border-radius:.5rem}.project-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;object-fit:contain;border-radius:.5rem}@media (max-width: 1440px){.project-content-wrapper[_ngcontent-%COMP%]{flex-direction:column}.project-content[_ngcontent-%COMP%]{max-width:70%}.project-image-wrapper[_ngcontent-%COMP%]{height:auto;padding-bottom:calc(1rem + 64px)}.project-list[_ngcontent-%COMP%]{padding-left:1.5rem}.project-detail[_ngcontent-%COMP%]{padding-left:.5rem}.project-detail-list[_ngcontent-%COMP%]{padding-left:1.5rem}}@media (max-width: 48rem){.project-content[_ngcontent-%COMP%]{max-width:100%}}"]});let n=a;return n})();export{G as ProjectPageComponent};