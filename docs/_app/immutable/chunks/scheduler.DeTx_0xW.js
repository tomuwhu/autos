function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(w)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(E(n,e))}function A(t,n,e,o){if(t){const r=g(t,n,e,o);return t[0](r)}}function g(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let s=0;s<f;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,a){if(r){const f=g(n,e,o,a);t.p(f,r)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){return t??""}let i;function _(t){i=t}function y(){if(!i)throw new Error("Function called outside component initialization");return i}function H(t){y().$$.on_mount.push(t)}function I(t){y().$$.after_update.push(t)}const l=[],p=[];let u=[];const b=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function J(){return v(),m}function O(t){u.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<l.length;){const n=l[c];c++,_(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(_(null),l.length=0,c=0;p.length;)p.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;b.length;)b.pop()();h=!1,d.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function K(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{A as a,B as b,U as c,E as d,G as e,I as f,D as g,p as h,z as i,q as j,F as k,S as l,O as m,x as n,H as o,K as p,i as q,j as r,P as s,J as t,C as u,_ as v,w,l as x,v as y};
