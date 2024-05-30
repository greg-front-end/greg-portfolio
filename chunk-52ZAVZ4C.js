import{$ as O,A as V,C as g,G as h,H as L,W as M,X as N,b as u,c as v,ca as x,d as C,da as F,f as b,fa as m,g as A,ga as T,h as S,i as w,ia as R,j as y,k,l as B,m as o,o as f,p as E,q as I,r as U,s as D,v as j}from"./chunk-SW3SOJQC.js";var G=["*"],a=class{},P=(()=>{let s=class s extends a{constructor(e){super(),this.http=e}getSvg(e){return this.http.get(e,{responseType:"text"})}};s.\u0275fac=function(t){return new(t||s)(o(R))},s.\u0275prov=y({token:s,factory:s.\u0275fac});let l=s;return l})(),$=new B("SERVER_URL"),d=(()=>{let s=class s{constructor(e,t,i,r){this.loader=e,this.platformId=t,this.serverUrl=i,this._document=r,this.iconsByUrl=new Map,this.iconsLoadingByUrl=new Map,this.document=this._document}addSvg(e,t){if(!this.iconsByUrl.has(e)){let i=this.document.createElement("DIV");i.innerHTML=t;let r=i.querySelector("svg");this.iconsByUrl.set(e,r)}}loadSvg(e,t=e){if(this.serverUrl&&e.match(/^(http(s)?):/)===null&&(e=this.serverUrl+e,t=e),this.iconsByUrl.has(t))return u(this.iconsByUrl.get(t));if(this.iconsLoadingByUrl.has(t))return this.iconsLoadingByUrl.get(t);let i=this.loader.getSvg(e).pipe(C(r=>{let n=this.document.createElement("DIV");return n.innerHTML=r,n.querySelector("svg")}),w(r=>this.iconsByUrl.set(t,r)),b(r=>(console.error(r),v(r))),A(()=>this.iconsLoadingByUrl.delete(t)),S());return this.iconsLoadingByUrl.set(t,i),i}getSvgByName(e){return this.iconsByUrl.has(e)?u(this.iconsByUrl.get(e)):this.iconsLoadingByUrl.has(e)?this.iconsLoadingByUrl.get(e):v(`No svg with name '${e}' has been loaded`)}unloadSvg(e){this.iconsByUrl.has(e)&&this.iconsByUrl.delete(e)}};s.\u0275fac=function(t){return new(t||s)(o(a),o(g),o($,8),o(m,8))},s.\u0275prov=y({token:s,factory:s.\u0275fac});let l=s;return l})();function _(l,s,z,e,t){return l||new d(s,z,e,t)}var H={provide:d,deps:[[new f,new E,d],a,[g],[new f,$],[new f,m]],useFactory:_},p=class{constructor(){this.loaded=!1}},Y=(()=>{let s=class s{set svgStyle(e){this._svgStyle=e,!this.helper.differ&&e&&(this.helper.differ=this.differs.find(e).create())}constructor(e,t,i,r,n){this.element=e,this.differs=t,this.renderer=i,this.iconReg=r,this.cdr=n,this.stretch=!1,this.applyClass=!1,this.applyCss=!1,this.helper=new p,this._svgStyle=null}ngOnInit(){this.init()}ngOnDestroy(){this.destroy()}ngOnChanges(e){let t=this.element.nativeElement.firstChild;if((e.src||e.name)&&(this.helper.loaded&&this.destroy(),this.init()),e.stretch&&this.stylize(),e.applyClass&&(this.applyClass?this.setClass(t,null,this.klass):this.setClass(t,this.klass,null)),e.svgClass&&this.setClass(t,e.svgClass.previousValue,e.svgClass.currentValue),e.klass){let i=this.element.nativeElement;this.setClass(i,e.klass.previousValue,e.klass.currentValue),this.applyClass?this.setClass(t,e.klass.previousValue,e.klass.currentValue):this.setClass(t,e.klass.previousValue,null)}e.viewBox&&(this.helper.loaded&&this.destroy(),this.init()),e.applyCss&&(console.warn("applyCss deprecated since 9.1.0, will be removed in 10.0.0"),console.warn("use applyClass instead")),e.svgAriaLabel&&this.doAria(e.svgAriaLabel.currentValue)}ngDoCheck(){if(this.helper.svg&&this.helper.differ){let e=this.helper.differ.diff(this._svgStyle);e&&this.applyChanges(e)}}init(){if(this.name){let e=this.iconReg.getSvgByName(this.name);e&&(this.helper.icnSub=e.subscribe(t=>this.initSvg(t)))}else if(this.src){let e=this.iconReg.loadSvg(this.src);e&&(this.helper.icnSub=e.subscribe(t=>this.initSvg(t)))}else{let e=this.element.nativeElement;e.innerHTML="",this.cdr.markForCheck()}}initSvg(e){!this.helper.loaded&&e&&(this.setSvg(e),this.resetDiffer())}destroy(){this.helper.icnSub&&this.helper.icnSub.unsubscribe(),this.helper=new p}resetDiffer(){this._svgStyle&&!this.helper.differ&&(this.helper.differ=this.differs.find(this._svgStyle).create())}setSvg(e){if(!this.helper.loaded&&e){this.helper.svg=e;let t=e.cloneNode(!0),i=this.element.nativeElement;if(i.innerHTML="",this.renderer.appendChild(i,t),this.helper.loaded=!0,this.copyNgContentAttribute(i,t),this.klass&&this.applyClass&&this.setClass(i.firstChild,null,this.klass),this.svgClass&&this.setClass(i.firstChild,null,this.svgClass),this.viewBox)if(this.viewBox==="auto"){let r=t.getAttribute("width"),n=t.getAttribute("height");if(n&&r){let c=`0 0 ${r} ${n}`;this.renderer.setAttribute(t,"viewBox",c),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height")}}else this.viewBox!==""&&(this.renderer.setAttribute(t,"viewBox",this.viewBox),this.renderer.removeAttribute(t,"width"),this.renderer.removeAttribute(t,"height"));this.stylize(),this.svgAriaLabel===void 0&&i.firstChild.hasAttribute("aria-label")||this.doAria(this.svgAriaLabel||""),this.cdr.markForCheck()}}copyNgContentAttribute(e,t){let i=e.attributes,r=i.length;for(let n=0;n<r;n+=1){let c=i.item(n);if(c&&c.name.startsWith("_ngcontent")){this.setNgContentAttribute(t,c.name);break}}}setNgContentAttribute(e,t){this.renderer.setAttribute(e,t,"");let i=e.childNodes.length;for(let r=0;r<i;r+=1){let n=e.childNodes[r];n instanceof Element&&this.setNgContentAttribute(n,t)}}stylize(){if(this.helper.svg){let e=this.element.nativeElement.firstChild;this.stretch===!0?this.renderer.setAttribute(e,"preserveAspectRatio","none"):this.stretch===!1&&this.renderer.removeAttribute(e,"preserveAspectRatio")}}applyChanges(e){e.forEachRemovedItem(t=>this.setStyle(t.key,null)),e.forEachAddedItem(t=>this.setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this.setStyle(t.key,t.currentValue))}setStyle(e,t){let[i,r]=e.split(".");t=t!==null&&r?`${t}${r}`:t;let n=this.element.nativeElement.firstChild;t!==null?this.renderer.setStyle(n,i,t):this.renderer.removeStyle(n,i)}setClass(e,t,i){if(e){if(t){let r=(Array.isArray(t)?t:t.split(" ")).filter(n=>n);for(let n of r)this.renderer.removeClass(e,n)}if(i){let r=(Array.isArray(i)?i:i.split(" ")).filter(n=>n);for(let n of r)this.renderer.addClass(e,n)}}}doAria(e){let t=this.element.nativeElement.firstChild;t&&(e===""?(this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.removeAttribute(t,"aria-label")):(this.renderer.removeAttribute(t,"aria-hidden"),this.renderer.setAttribute(t,"aria-label",e)))}};s.\u0275fac=function(t){return new(t||s)(h(V),h(F),h(L),h(d),h(x))},s.\u0275cmp=U({type:s,selectors:[["svg-icon"]],inputs:{src:"src",name:"name",stretch:"stretch",applyClass:"applyClass",applyCss:"applyCss",svgClass:"svgClass",klass:[I.None,"class","klass"],viewBox:"viewBox",svgAriaLabel:"svgAriaLabel",svgStyle:"svgStyle"},standalone:!0,features:[j,O],ngContentSelectors:G,decls:1,vars:0,template:function(t,i){t&1&&(M(),N(0))},dependencies:[T],encapsulation:2});let l=s;return l})();var ne=(()=>{let s=class s{static forRoot(e={}){return{ngModule:s,providers:[H,e.loader||{provide:a,useClass:P}]}}};s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=D({type:s}),s.\u0275inj=k({imports:[Y]});let l=s;return l})();export{Y as a,ne as b};
