import{$ as m,I as l,Q as d,R as p,S as f,e as a,j as s,m as o,oa as u,r as c,ra as h,va as g}from"./chunk-SW3SOJQC.js";var O=(()=>{let t=class t{constructor(i,e){this.router=i,this.translateService=e,this.isTranslationLoaded=l(!1),this.routerSubscription=this.router.events.pipe(a(r=>r instanceof u)).subscribe(()=>{this.checkTranslation()})}ngOnDestroy(){this.routerSubscription.unsubscribe()}checkTranslation(){let i=this.router.url==="/"?["home"]:this.router.url.split("/"),r=`${this.router.url==="/"?i[0]:i.slice(1).join(".")}.pageSectionName`;this.translateService.instant(r)!==r?this.isTranslationLoaded.set(!0):this.isTranslationLoaded.set(!1)}};t.\u0275fac=function(e){return new(e||t)(o(h),o(g))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var x=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-loader"]],standalone:!0,features:[m],decls:2,vars:0,consts:[[1,"wrapper"],[1,"loader"]],template:function(e,r){e&1&&(d(0,"div",0),f(1,"div",1),p())},styles:['.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;height:70vh;margin-inline:auto}.loader[_ngcontent-%COMP%]{display:inline-grid;align-items:center;font-weight:700;font-size:2rem;overflow:hidden}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{content:"Loading...";grid-area:1/1;clip-path:inset(0 -200% 50%);text-shadow:-10ch 0 0;animation:_ngcontent-%COMP%_loading 2s infinite}.loader[_ngcontent-%COMP%]:after{clip-path:inset(50% -200% 0%);text-shadow:10ch 0 0;--s:-1;animation-delay:1s}@keyframes _ngcontent-%COMP%_loading{25%,to{transform:translate(calc(var(--s, 1) * 100%))}}']});let n=t;return n})();export{O as a,x as b};
