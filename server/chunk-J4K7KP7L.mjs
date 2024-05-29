import './polyfills.server.mjs';
import{c as ee}from"./chunk-FREOLYB5.mjs";import{a as ae,b as ce}from"./chunk-AEXA5ZFY.mjs";import{e as X,f as Z,h as te,k as ne,l as ie}from"./chunk-U6ECWDZW.mjs";import{a as re,b as L,d as oe}from"./chunk-SJEFF4WB.mjs";import{$a as $,Aa as p,Ba as f,Db as q,Ha as B,Ia as R,K as E,Mb as y,Oa as P,Pa as l,Q as d,Qa as V,Ra as x,Rb as N,Sa as S,Ta as o,Tb as U,Ua as a,Ub as J,V as m,Va as c,Vb as K,Wa as w,X as F,Xa as h,Ya as C,_ as I,ab as G,bb as b,da as _,db as Q,ea as O,eb as g,fa as j,la as D,ma as H,qa as k,ya as z,yb as Y,zb as W}from"./chunk-DO6WZRPL.mjs";var u=(()=>{let e=class e{constructor(){this.currentMenuValue=B(!1),this.isMenuActive=Y(()=>this.currentMenuValue())}onMenuActive(i){this.currentMenuValue.set(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var se=(()=>{let e=class e{constructor(i){this.elementRef=i,this.clickOutside=new H}onClick(i,n){if(!n)return;this.elementRef.nativeElement.contains(n)||this.ignoreElements?.find(v=>v.contains(n))||this.clickOutside.emit(i)}};e.\u0275fac=function(n){return new(n||e)(f(D))},e.\u0275dir=F({type:e,selectors:[["","appClickOutside",""]],hostBindings:function(n,r){n&1&&h("click",function(A){return r.onClick(A,A.target)},!1,z)},inputs:{ignoreElements:"ignoreElements"},outputs:{clickOutside:"clickOutside"},standalone:!0});let t=e;return t})();var le=(()=>{let e=class e{constructor(){this.isActiveBurger=!1,this.menuToggleService=d(u)}onClickMenu(){this.isActiveBurger=!this.isActiveBurger,this.menuToggleService.onMenuActive(this.isActiveBurger)}onCLickOutSide(){this.isActiveBurger=!1,this.menuToggleService.onMenuActive(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-burger-menu"]],standalone:!0,features:[g],decls:12,vars:2,consts:[["appClickOutside","",1,"header-burger",3,"click","clickOutside"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 512 512",0,"xml","space","preserve",1,"active"],["d",`M50.047,0C22.404,0,0,22.4,0,50.047c0,27.646,22.404,50.046,50.047,50.046c27.642,0,50.046-22.4,50.046-50.046
                C100.093,22.4,77.689,0,50.047,0z`,1,"st0"],["d",`M256,0c-27.642,0-50.047,22.4-50.047,50.047c0,27.646,22.404,50.046,50.047,50.046
                c27.642,0,50.047-22.4,50.047-50.046C306.047,22.4,283.642,0,256,0z`,1,"st0"],["d",`M461.953,100.093c27.638,0,50.047-22.4,50.047-50.046C512,22.4,489.591,0,461.953,0
                s-50.046,22.4-50.046,50.047C411.907,77.693,434.315,100.093,461.953,100.093z`,1,"st0"],["d",`M50.047,205.953C22.404,205.953,0,228.353,0,256s22.404,50.047,50.047,50.047
                c27.642,0,50.046-22.4,50.046-50.047S77.689,205.953,50.047,205.953z`,1,"st0"],["d",`M256,205.953c-27.642,0-50.047,22.4-50.047,50.047s22.404,50.047,50.047,50.047
                c27.642,0,50.047-22.4,50.047-50.047S283.642,205.953,256,205.953z`,1,"st0"],["d",`M461.953,205.953c-27.638,0-50.046,22.4-50.046,50.047s22.408,50.047,50.046,50.047S512,283.647,512,256
                S489.591,205.953,461.953,205.953z`,1,"st0"],["d",`M50.047,411.907C22.404,411.907,0,434.307,0,461.953C0,489.6,22.404,512,50.047,512
                c27.642,0,50.046-22.4,50.046-50.047C100.093,434.307,77.689,411.907,50.047,411.907z`,1,"st0"],["d",`M256,411.907c-27.642,0-50.047,22.4-50.047,50.046C205.953,489.6,228.358,512,256,512
                c27.642,0,50.047-22.4,50.047-50.047C306.047,434.307,283.642,411.907,256,411.907z`,1,"st0"],["d",`M461.953,411.907c-27.638,0-50.046,22.4-50.046,50.046c0,27.647,22.408,50.047,50.046,50.047
                S512,489.6,512,461.953C512,434.307,489.591,411.907,461.953,411.907z`,1,"st0"]],template:function(n,r){n&1&&(o(0,"div",0),h("click",function(){return r.onClickMenu()})("clickOutside",function(){return r.onCLickOutSide()}),j(),o(1,"svg",1)(2,"g"),c(3,"path",2)(4,"path",3)(5,"path",4)(6,"path",5)(7,"path",6)(8,"path",7)(9,"path",8)(10,"path",9)(11,"path",10),a()()()),n&2&&l("active",r.menuToggleService.isMenuActive())},dependencies:[se],styles:[".header-burger[_ngcontent-%COMP%]{padding:1rem;cursor:pointer}.header-burger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;margin-top:.5rem;max-width:100%}.header-burger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#7d98a1;transition:all .2s}.header-burger.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(0), .header-burger.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7), .header-burger.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){transform:scale(0)}@media (max-width: 48rem){.header-burger[_ngcontent-%COMP%]{height:2rem;padding:0}.header-burger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{max-width:initial;width:2rem;height:2rem;margin-top:0}}"]});let t=e;return t})();var de=[{path:"/",label:"Home",title:"Home"},{path:"about",label:"About",title:"About"},{path:"skills",label:"Skills",title:"Skills"},{path:"portfolio",label:"Portfolio",title:"Portfolio"}],me=["en","es"];var Me=(t,e)=>e.label;function _e(t,e){if(t&1){let s=w();o(0,"a",1),h("click",function(){_(s);let n=C();return O(n.onClickMenuItem())}),b(1),a()}if(t&2){let s=e.$implicit,i=C();l("isShowLinks",i.menuToggleService.isMenuActive()),P("routerLink",s.path),p(),Q(" ",s.label," ")}}var ge=(()=>{let e=class e{constructor(){this.dataRouters=de,this.menuToggleService=d(u)}onClickMenuItem(){this.menuToggleService.onMenuActive(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-menu-link"]],standalone:!0,features:[g],decls:2,vars:0,consts:[[1,"header-item","button",3,"isShowLinks","routerLink"],[1,"header-item","button",3,"click","routerLink"]],template:function(n,r){n&1&&x(0,_e,2,4,"a",0,Me),n&2&&S(r.dataRouters)},dependencies:[ne],styles:['.header-item[_ngcontent-%COMP%]{color:#7d98a1;transition:all .3s;text-decoration:none;position:relative;transform:rotate(180deg) scale(0)}.header-item[_ngcontent-%COMP%]:before{content:"";position:absolute;left:1.25rem;height:0;width:.125rem;background-color:#7d98a1;transition:all .3s}.header-item[_ngcontent-%COMP%]:hover{text-decoration:none}.header-item[_ngcontent-%COMP%]:hover:before{height:69%}.header-item.isShowLinks[_ngcontent-%COMP%]{transform:rotate(0) scale(1)}@media (max-width: 48rem){.header-item[_ngcontent-%COMP%]{padding:.5rem}.header-item[_ngcontent-%COMP%]:before{content:"";position:absolute;left:.5rem;bottom:0;height:.125rem;width:0;background-color:#7d98a1;transition:all .3s}.header-item[_ngcontent-%COMP%]:hover{text-decoration:none}.header-item[_ngcontent-%COMP%]:hover:before{height:.125rem;width:calc(100% - 1.5rem)}}']});let t=e;return t})();var Oe=["headerLangItems"];function Pe(t,e){if(t&1){let s=w();o(0,"button",9),h("click",function(){let n=_(s).$implicit,r=C();return O(r.onClickedLang(n))}),c(1,"svg-icon",6),a()}if(t&2){let s=e.$implicit,i=C();l("activeLang",i.selectedLang===s),p(),P("src","../../../assets/icons/flags/"+s+".svg")}}var pe=(()=>{let e=class e{constructor(i,n){this.platformId=i,this.document=n,this.translateService=d(L),this.headerLangItems=R("headerLangItems"),this.menuToggleService=d(u),this.selectedLang="",this.langs=me}ngOnInit(){this.selectedLang=this.translateService.currentLang||"en",this.document.documentElement.lang=this.selectedLang}onSwitchLang(){this.menuToggleService.onMenuActive(!1),this.headerLangItems()?.nativeElement.classList.toggle("active")}onClickedLang(i){this.selectedLang=i,this.menuToggleService.onMenuActive(!1),this.headerLangItems()?.nativeElement.classList.remove("active"),this.document.documentElement.lang=i,y(this.platformId)&&(localStorage.setItem("lang",i.toLowerCase()),this.translateService.use(i.toLowerCase()))}};e.\u0275fac=function(n){return new(n||e)(f(k),f(q))},e.\u0275cmp=m({type:e,selectors:[["app-header"]],viewQuery:function(n,r){n&1&&$(r.headerLangItems,Oe,5),n&2&&G()},standalone:!0,features:[g],decls:12,vars:5,consts:[["headerLangItems",""],[1,"header"],[1,"header-wrapper"],[1,"header-list"],[1,"header-lang-switcher-wrapper"],[1,"header-lang-switcher","button",3,"click"],[3,"src"],[1,"header-lang-switcher-items"],[1,"header-lang-switcher","header-lang-switcher-item","button",3,"activeLang"],[1,"header-lang-switcher","header-lang-switcher-item","button",3,"click"]],template:function(n,r){if(n&1){let v=w();o(0,"header",1)(1,"div",2),c(2,"app-burger-menu"),o(3,"div",3),c(4,"app-menu-link"),a()(),o(5,"div",4)(6,"button",5),h("click",function(){return _(v),O(r.onSwitchLang())}),c(7,"svg-icon",6),a(),o(8,"div",7,0),x(10,Pe,2,3,"button",8,V),a()()()}n&2&&(l("isMenuActive",r.menuToggleService.isMenuActive()),p(3),l("isMenuActive",r.menuToggleService.isMenuActive()),p(4),P("src","../../../assets/icons/flags/"+r.selectedLang+".svg"),p(3),S(r.langs))},dependencies:[le,ge,ae],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;background-color:#1c2321;height:100%;position:sticky;z-index:10;transition:all .2s}.header.isMenuActive[_ngcontent-%COMP%]{box-shadow:10px 0 40px #fff}.header-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.header[_ngcontent-%COMP%]   app-burger-menu[_ngcontent-%COMP%]{background-color:#1c2321;position:relative;z-index:4}.header-list[_ngcontent-%COMP%]{display:flex;writing-mode:vertical-rl;gap:1rem;transition:all .3s;transform:translateY(-120%)}.header-list.isMenuActive[_ngcontent-%COMP%]{transform:translateY(0)}.header-lang-switcher[_ngcontent-%COMP%]{padding:0;color:#eef1ef;background-color:inherit}.header-lang-switcher-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;padding:1rem}.header-lang-switcher-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:2rem;height:2rem;border-radius:50%}.header-lang-switcher-items[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;position:absolute;top:-40%;opacity:0;visibility:hidden;transition:all .2s;overflow:hidden}.header-lang-switcher-items.active[_ngcontent-%COMP%]{top:-100%;opacity:1;visibility:visible}.header-lang-switcher-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.125rem 0;font-size:0;background-color:#5e6572;transition:all .2s;transform:scale(1)}.header-lang-switcher-item.activeLang[_ngcontent-%COMP%]{background-color:#7d98a1;pointer-events:none}.header-lang-switcher-item[_ngcontent-%COMP%]:not(.activeLang):hover{background-color:#a9b4c2}.header-burger[_ngcontent-%COMP%]{padding:1rem;cursor:pointer}.header-burger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;margin-top:.5rem;max-width:100%}.header-burger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#0f0;transition:all .2s}.header-burger[_ngcontent-%COMP%]:not(.active)   hover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6), .header-burger[_ngcontent-%COMP%]:not(.active)   hover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8), .header-burger[_ngcontent-%COMP%]:not(.active)   hover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){transform:scale(0)}.header-burger.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(0), .header-burger.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7), .header-burger.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){transform:scale(0)}@media (max-width: 48rem){.header[_ngcontent-%COMP%]{flex-direction:row;padding-top:1rem;padding-inline:1.5rem;overflow:hidden}.header-wrapper[_ngcontent-%COMP%]{flex-direction:row;height:2rem}.header-list[_ngcontent-%COMP%]{position:absolute;left:1rem;bottom:1rem;writing-mode:horizontal-tb;transform:translateY(170%)}.header-lang-switcher[_ngcontent-%COMP%]{font-size:0}.header-lang-switcher-wrapper[_ngcontent-%COMP%]{flex-direction:row-reverse;gap:.25rem;height:2rem;padding:0}.header-lang-switcher-items[_ngcontent-%COMP%]{flex-direction:row;gap:.25rem;position:static;transition:all .2s}.header-lang-switcher-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:100%;padding:0}}"]});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[g],decls:15,vars:0,consts:[[1,"footer"],[1,"wrapper"],[1,"footer-copyright"],["id","copyright"],[1,"footer-social"],["href","https://github.com/greg-front-end",1,"footer-link","button"],["src","./assets/icons/github.svg","alt","GitHub"],["href","https://www.linkedin.com/in/greg-martinos/",1,"footer-link","button"],["src","./assets/icons/linkedin.svg","alt","LinkedIn"],["href","mailto:greg.martinez.dev@gmail.com","title","Email",1,"footer-link","button"],["src","./assets/icons/email.svg","alt","Email"],["href","https://www.codewars.com/users/greg-front-end","title","My CodeWars",1,"footer-link","button"],["src","./assets/icons/codewars.svg","alt","CodeWars"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),b(3," \xA9 "),c(4,"span",3),b(5," by Greg Martirosian "),a(),o(6,"div",4)(7,"a",5),c(8,"img",6),a(),o(9,"a",7),c(10,"img",8),a(),o(11,"a",9),c(12,"img",10),a(),o(13,"a",11),c(14,"img",12),a()()()())},dependencies:[K],styles:[".footer[_ngcontent-%COMP%]{background-color:#fff;overflow:hidden;height:100%}.footer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;padding-bottom:0}.footer-copyright[_ngcontent-%COMP%]{font-size:.875rem;font-weight:300;color:#7d98a1;margin-right:.5rem}.footer-social[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1rem}.footer-link[_ngcontent-%COMP%]{text-decoration:none;color:#5e6572;padding:0;height:1.5rem}.footer-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}@media (max-width: 48rem){.footer[_ngcontent-%COMP%]{background-color:#5e6572}.footer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:column-reverse;justify-content:center;gap:.5rem}.footer-copyright[_ngcontent-%COMP%]{margin-right:0}}"]});let t=e;return t})();var ue=(()=>{let e=class e{constructor(i){if(this.platformId=i,this.translateService=d(L),this.menuToggleService=d(u),this.title="greg-portfolio",y(this.platformId)){let n=localStorage.getItem("lang")||"en";this.translateService.setDefaultLang(n),this.translateService.use(n)}}};e.\u0275fac=function(n){return new(n||e)(f(k))},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:7,vars:4,consts:[[1,"app"],[1,"main"],[1,"underlay"],[1,"page-wrapper"]],template:function(n,r){n&1&&(o(0,"div",0),c(1,"app-header"),o(2,"div",1),c(3,"div",2),o(4,"div",3),c(5,"router-outlet"),a()(),c(6,"app-footer"),a()),n&2&&(l("isMenuActive",r.menuToggleService.isMenuActive()),p(2),l("isMenuActive",r.menuToggleService.isMenuActive()))},dependencies:[te,pe,he],styles:[".app[_ngcontent-%COMP%]{display:grid;grid-template-columns:4rem 1fr;grid-template-rows:1fr 4rem;height:100vh;height:100svh}.app[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3}.app[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;background-color:gray}.app[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%]{grid-row-start:2;grid-row-end:3}@media (max-width: 48rem){.app[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:4rem 1fr 4.5rem;transition:all .2s}.app.isMenuActive[_ngcontent-%COMP%]{grid-template-rows:8rem 1fr 4.5rem}.app[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2;grid-column-start:1;grid-column-end:3}.app[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3;grid-row-start:2;grid-row-end:3}.app[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%]{grid-row-start:3;grid-column-start:1;grid-column-end:3}}"]});let t=e;return t})();var fe=[{path:"",loadComponent:()=>import("./chunk-J6SCMYWW.mjs").then(t=>t.HomeComponent)},{path:"about",loadComponent:()=>import("./chunk-6TNSE6JQ.mjs").then(t=>t.AboutComponent)},{path:"skills",loadComponent:()=>import("./chunk-SPFOYDS6.mjs").then(t=>t.SkillsComponent)},{path:"portfolio",loadComponent:()=>import("./chunk-MYLMDHPW.mjs").then(t=>t.PortfolioComponent)},{path:"portfolio/:id",loadComponent:()=>import("./chunk-POTL37AM.mjs").then(t=>t.ProjectPageComponent)}];var T=class{http;prefix;suffix;constructor(e,s="/assets/i18n/",i=".json"){this.http=e,this.prefix=s,this.suffix=i}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}};function we(t){return new T(t,"./assets/i18n/",".json")}var ve={providers:[ie(fe),Z(),U(J()),I(ce.forRoot()),I(oe.forRoot({loader:{provide:re,useFactory:we,deps:[N]}}))]};var be={providers:[ee()]},Ce=W(ve,be);var ke=()=>X(ue,Ce),Ft=ke;export{Ft as a};
