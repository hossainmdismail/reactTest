import{m,r as s,c as nt,e as oe,j as D}from"./app-BRtK-Pim.js";import{l as Z,s as B,a as A,u as N,b as de,o as v,U as T,C as x,t as fe,y as L,p as rt,f as xe,T as ot,c as Se,O as ye,d as lt,e as K,q as te}from"./transition-r7iQzgOY.js";var be;let O=(be=m.useId)!=null?be:function(){let e=Z(),[t,n]=m.useState(e?()=>B.nextId():null);return A(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Le(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(M||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),at=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(at||{});function it(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function ut(e,t=0){var n;return e===((n=Le(e))==null?void 0:n.body)?!1:N(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var st=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(st||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function R(e){e==null||e.focus({preventScroll:!0})}let ct=["textarea","input"].join(",");function dt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ct))!=null?n:!1}function ft(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?ft(e):e:it(e);o.length>0&&l.length>1&&(l=l.filter(g=>!o.includes(g))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=l.length,E;do{if(c>=d||c+d<=0)return 0;let g=u+c;if(t&16)g=(g+d)%d;else{if(g<0)return 3;if(g>=d)return 1}E=l[g],E==null||E.focus(f),c+=i}while(E!==a.activeElement);return t&6&&dt(E)&&E.select(),2}function Fe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function mt(){return/Android/gi.test(window.navigator.userAgent)}function pt(){return Fe()||mt()}function X(e,t,n){let r=de(t);s.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Me(e,t,n){let r=de(t);s.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function gt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let u=i(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(u)||l.composed&&l.composedPath().includes(d))return}return!ut(u,De.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let a=s.useRef(null);X("pointerdown",l=>{var i,u;r.current&&(a.current=((u=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:u[0])||l.target)},!0),X("mousedown",l=>{var i,u;r.current&&(a.current=((u=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:u[0])||l.target)},!0),X("click",l=>{pt()||a.current&&(o(l,()=>a.current),a.current=null)},!0),X("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Me("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>Le(...e),[...e])}function me(e,t){let n=s.useRef([]),r=v(e);s.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}let vt="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function ht(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return x({ourProps:a,theirProps:o,slot:{},defaultTag:vt,name:"Hidden"})}let ae=T(ht);function Et(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let F=[];Et(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function wt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&yt(n)?!1:r}function yt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Ce=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ce||{});function Re(e,t,n,r){let o=de(n);s.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Ae(e){let t=v(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}var j=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(j||{});function bt(){let e=s.useRef(0);return Me("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ke(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let $t="div";var Ne=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ne||{});function Tt(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;Z()||(l=1);let u=U(n);Lt({ownerDocument:u},!!(l&16));let f=Pt({ownerDocument:u,container:n,initialFocus:o},!!(l&2));Dt({ownerDocument:u,container:n,containers:a,previousActiveElement:f},!!(l&8));let c=bt(),d=v(b=>{let h=n.current;h&&(P=>P())(()=>{N(c.current,{[j.Forwards]:()=>{z(h,M.First,{skipElements:[b.relatedTarget]})},[j.Backwards]:()=>{z(h,M.Last,{skipElements:[b.relatedTarget]})}})})}),E=rt(),g=s.useRef(!1),$={ref:r,onKeyDown(b){b.key=="Tab"&&(g.current=!0,E.requestAnimationFrame(()=>{g.current=!1}))},onBlur(b){let h=ke(a);n.current instanceof HTMLElement&&h.add(n.current);let P=b.relatedTarget;P instanceof HTMLElement&&P.dataset.headlessuiFocusGuard!=="true"&&(Oe(h,P)||(g.current?z(n.current,N(c.current,{[j.Forwards]:()=>M.Next,[j.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:b.target}):b.target instanceof HTMLElement&&R(b.target)))}};return m.createElement(m.Fragment,null,!!(l&4)&&m.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}),x({ourProps:$,theirProps:i,defaultTag:$t,name:"FocusTrap"}),!!(l&4)&&m.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}))}let xt=T(Tt),H=Object.assign(xt,{features:Ne});function St(e=!0){let t=s.useRef(F.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),v(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Lt({ownerDocument:e},t){let n=St(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&R(n())},[t]),Ae(()=>{t&&R(n())})}function Pt({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),a=xe();return me(()=>{if(!r)return;let l=t.current;l&&fe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?R(n.current):z(l,M.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Dt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=xe();Re(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=ke(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let f=l.target;f&&f instanceof HTMLElement?Oe(i,f)?(r.current=f,R(f)):(l.preventDefault(),l.stopPropagation(),R(u)):R(r.current)},!0)}function Oe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let He=s.createContext(!1);function Ft(){return s.useContext(He)}function ie(e){return m.createElement(He.Provider,{value:e.force},e.children)}function Mt(e){let t=Ft(),n=s.useContext(Ie),r=U(e),[o,a]=s.useState(()=>{if(!t&&n!==null||B.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let Ct=s.Fragment;function Rt(e,t){let n=e,r=s.useRef(null),o=L(ot(c=>{r.current=c}),t),a=U(r),l=Mt(r),[i]=s.useState(()=>{var c;return B.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=s.useContext(ue),f=Z();return A(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),A(()=>{if(i&&u)return u.register(i)},[u,i]),Ae(()=>{var c;!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),f?!l||!i?null:nt.createPortal(x({ourProps:{ref:o},theirProps:n,defaultTag:Ct,name:"Portal"}),i):null}let At=s.Fragment,Ie=s.createContext(null);function kt(e,t){let{target:n,...r}=e,o={ref:L(t)};return m.createElement(Ie.Provider,{value:n},x({ourProps:o,theirProps:r,defaultTag:At,name:"Popover.Group"}))}let ue=s.createContext(null);function Nt(){let e=s.useContext(ue),t=s.useRef([]),n=v(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=v(a=>{let l=t.current.indexOf(a);l!==-1&&t.current.splice(l,1),e&&e.unregister(a)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return m.createElement(ue.Provider,{value:o},a)},[o])]}let Ot=T(Rt),Ht=T(kt),se=Object.assign(Ot,{Group:Ht});function It(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const jt=typeof Object.is=="function"?Object.is:It,{useState:Bt,useEffect:Ut,useLayoutEffect:Wt,useDebugValue:_t}=oe;function Yt(e,t,n){const r=t(),[{inst:o},a]=Bt({inst:{value:r,getSnapshot:t}});return Wt(()=>{o.value=r,o.getSnapshot=t,ne(o)&&a({inst:o})},[e,r,t]),Ut(()=>(ne(o)&&a({inst:o}),e(()=>{ne(o)&&a({inst:o})})),[e]),_t(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!jt(n,r)}catch{return!0}}function Vt(e,t,n){return t()}const qt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gt=!qt,Kt=Gt?Vt:Yt,Xt="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):Kt;function zt(e){return Xt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Jt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(i=>i()))}}}function Qt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function Zt(){return Fe()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=Se();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:f}=new URL(u.href),c=e.querySelector(f);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;a!==u&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function en(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function tn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Jt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Se(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:tn(n)},o=[Zt(),Qt(),en()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function nn(e,t,n){let r=zt(C),o=e?r.get(e):void 0,a=o?o.count>0:!1;return A(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),a}let re=new Map,I=new Map;function $e(e,t=!0){A(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=I.get(r))!=null?l:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let u=re.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,re.delete(r))}let a=(n=I.get(r))!=null?n:0;return I.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function rn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(o),l=v(()=>{var i,u,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((f=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:f.host)||c.some(E=>d.contains(E))||c.push(d));return c});return{resolveContainers:l,contains:v(i=>l().some(u=>u.contains(i))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:m.createElement(ae,{features:J.Hidden,ref:o})},[o,n])}}let pe=s.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function on(){return s.useContext(pe)}function ln({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=on(),l=v((...i)=>{t==null||t(...i),a(...i)});return A(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),m.createElement(pe.Provider,{value:l},e)}let je=s.createContext(null);function Be(){let e=s.useContext(je);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Be),t}return e}function an(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=v(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),u=i.indexOf(a);return u!==-1&&i.splice(u,1),i}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(je.Provider,{value:o},n.children)},[t])]}let un="p";function sn(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...o}=e,a=Be(),l=L(t);A(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return x({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:un,name:a.name||"Description"})}let cn=T(sn),dn=Object.assign(cn,{});var fn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(fn||{}),mn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(mn||{});let pn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Q=s.createContext(null);Q.displayName="DialogContext";function W(e){let t=s.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function gn(e,t,n=()=>[document.body]){nn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function vn(e,t){return N(t.type,pn,e,t)}let hn="div",En=ye.RenderStrategy|ye.Static;function wn(e,t){let n=O(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,role:i="dialog",__demoMode:u=!1,...f}=e,[c,d]=s.useState(0),E=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(E.current||(E.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let g=lt();o===void 0&&g!==null&&(o=(g&K.Open)===K.Open);let $=s.useRef(null),b=L($,t),h=U($),P=e.hasOwnProperty("open")||g!==null,ge=e.hasOwnProperty("onClose");if(!P&&!ge)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ge)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let w=o?0:1,[_,Ue]=s.useReducer(vn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),k=v(()=>a(!1)),ve=v(p=>Ue({type:0,id:p})),Y=Z()?u?!1:w===0:!1,V=c>1,he=s.useContext(Q)!==null,[We,_e]=Nt(),Ye={get current(){var p;return(p=_.panelRef.current)!=null?p:$.current}},{resolveContainers:ee,mainTreeNodeRef:q,MainTreeNode:Ve}=rn({portals:We,defaultContainers:[Ye]}),qe=V?"parent":"leaf",Ee=g!==null?(g&K.Closing)===K.Closing:!1,Ge=he||Ee?!1:Y,Ke=s.useCallback(()=>{var p,S;return(S=Array.from((p=h==null?void 0:h.querySelectorAll("body > *"))!=null?p:[]).find(y=>y.id==="headlessui-portal-root"?!1:y.contains(q.current)&&y instanceof HTMLElement))!=null?S:null},[q]);$e(Ke,Ge);let Xe=V?!0:Y,ze=s.useCallback(()=>{var p,S;return(S=Array.from((p=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find(y=>y.contains(q.current)&&y instanceof HTMLElement))!=null?S:null},[q]);$e(ze,Xe),gt(ee,p=>{p.preventDefault(),k()},!(!Y||V));let Je=!(V||w!==0);Re(h==null?void 0:h.defaultView,"keydown",p=>{Je&&(p.defaultPrevented||p.key===Ce.Escape&&(p.preventDefault(),p.stopPropagation(),k()))}),gn(h,!(Ee||w!==0||he),ee),s.useEffect(()=>{if(w!==0||!$.current)return;let p=new ResizeObserver(S=>{for(let y of S){let G=y.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&k()}});return p.observe($.current),()=>p.disconnect()},[w,$,k]);let[Qe,Ze]=an(),et=s.useMemo(()=>[{dialogState:w,close:k,setTitleId:ve},_],[w,_,k,ve]),we=s.useMemo(()=>({open:w===0}),[w]),tt={ref:b,id:r,role:i,"aria-modal":w===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Qe};return m.createElement(ln,{type:"Dialog",enabled:w===0,element:$,onUpdate:v((p,S)=>{S==="Dialog"&&N(p,{[ce.Add]:()=>d(y=>y+1),[ce.Remove]:()=>d(y=>y-1)})})},m.createElement(ie,{force:!0},m.createElement(se,null,m.createElement(Q.Provider,{value:et},m.createElement(se.Group,{target:$},m.createElement(ie,{force:!1},m.createElement(Ze,{slot:we,name:"Dialog.Description"},m.createElement(H,{initialFocus:l,containers:ee,features:Y?N(qe,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},m.createElement(_e,null,x({ourProps:tt,theirProps:f,slot:we,defaultTag:hn,features:En,visible:w===0,name:"Dialog"}))))))))),m.createElement(Ve,null))}let yn="div";function bn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=W("Dialog.Overlay"),i=L(t),u=v(c=>{if(c.target===c.currentTarget){if(wt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),f=s.useMemo(()=>({open:a===0}),[a]);return x({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:f,defaultTag:yn,name:"Dialog.Overlay"})}let $n="div";function Tn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=W("Dialog.Backdrop"),i=L(t);s.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=s.useMemo(()=>({open:a===0}),[a]);return m.createElement(ie,{force:!0},m.createElement(se,null,x({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:$n,name:"Dialog.Backdrop"})))}let xn="div";function Sn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=W("Dialog.Panel"),i=L(t,l.panelRef),u=s.useMemo(()=>({open:a===0}),[a]),f=v(c=>{c.stopPropagation()});return x({ourProps:{ref:i,id:r,onClick:f},theirProps:o,slot:u,defaultTag:xn,name:"Dialog.Panel"})}let Ln="h2";function Pn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=W("Dialog.Title"),i=L(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let u=s.useMemo(()=>({open:a===0}),[a]);return x({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:Ln,name:"Dialog.Title"})}let Dn=T(wn),Fn=T(Tn),Mn=T(Sn),Cn=T(bn),Rn=T(Pn),Te=Object.assign(Dn,{Backdrop:Fn,Panel:Mn,Overlay:Cn,Title:Rn,Description:dn});function Hn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return D.jsx(te,{show:t,as:s.Fragment,leave:"duration-200",children:D.jsxs(Te,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[D.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:D.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),D.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:D.jsx(Te.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function In({className:e="",disabled:t,children:n,...r}){return D.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function jn({type:e="button",className:t="",disabled:n,children:r,...o}){return D.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}export{In as D,Hn as M,jn as S};
