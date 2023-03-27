import{r as U,l as $}from"./@floating-ui.core-614032f8.js";function g(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function x(t){return g(t).getComputedStyle(t)}function j(t){return t instanceof g(t).Node}function R(t){return j(t)?(t.nodeName||"").toLowerCase():""}let H;function z(){if(H)return H;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(H=t.brands.map(e=>e.brand+"/"+e.version).join(" "),H):navigator.userAgent}function m(t){return t instanceof g(t).HTMLElement}function L(t){return t instanceof g(t).Element}function N(t){return typeof ShadowRoot>"u"?!1:t instanceof g(t).ShadowRoot||t instanceof ShadowRoot}function S(t){const{overflow:e,overflowX:n,overflowY:o,display:c}=x(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(c)}function Z(t){return["table","td","th"].includes(R(t))}function O(t){const e=/firefox/i.test(z()),n=x(t),o=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!o&&o!=="none"||e&&n.willChange==="filter"||e&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(c=>n.willChange.includes(c))||["paint","layout","strict","content"].some(c=>{const l=n.contain;return l!=null&&l.includes(c)})}function k(){return/^((?!chrome|android).)*safari/i.test(z())}function B(t){return["html","body","#document"].includes(R(t))}const P=Math.min,W=Math.max,V=Math.round;function q(t){const e=x(t);let n=parseFloat(e.width),o=parseFloat(e.height);const c=m(t),l=c?t.offsetWidth:n,i=c?t.offsetHeight:o,r=V(n)!==l||V(o)!==i;return r&&(n=l,o=i),{width:n,height:o,fallback:r}}function G(t){return L(t)?t:t.contextElement}const I={x:1,y:1};function C(t){const e=G(t);if(!m(e))return I;const n=e.getBoundingClientRect(),{width:o,height:c,fallback:l}=q(e);let i=(l?V(n.width):n.width)/o,r=(l?V(n.height):n.height)/c;return i&&Number.isFinite(i)||(i=1),r&&Number.isFinite(r)||(r=1),{x:i,y:r}}function D(t,e,n,o){var c,l;e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=G(t);let f=I;e&&(o?L(o)&&(f=C(o)):f=C(t));const s=r?g(r):window,a=k()&&n;let u=(i.left+(a&&((c=s.visualViewport)==null?void 0:c.offsetLeft)||0))/f.x,d=(i.top+(a&&((l=s.visualViewport)==null?void 0:l.offsetTop)||0))/f.y,h=i.width/f.x,w=i.height/f.y;if(r){const p=g(r),v=o&&L(o)?g(o):o;let y=p.frameElement;for(;y&&o&&v!==p;){const b=C(y),F=y.getBoundingClientRect(),M=getComputedStyle(y);F.x+=(y.clientLeft+parseFloat(M.paddingLeft))*b.x,F.y+=(y.clientTop+parseFloat(M.paddingTop))*b.y,u*=b.x,d*=b.y,h*=b.x,w*=b.y,u+=F.x,d+=F.y,y=g(y).frameElement}}return $({width:h,height:w,x:u,y:d})}function T(t){return((j(t)?t.ownerDocument:t.document)||window.document).documentElement}function A(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(t){return D(T(t)).left+A(t).scrollLeft}function E(t){if(R(t)==="html")return t;const e=t.assignedSlot||t.parentNode||N(t)&&t.host||T(t);return N(e)?e.host:e}function K(t){const e=E(t);return B(e)?e.ownerDocument.body:m(e)&&S(e)?e:K(e)}function Q(t,e){var n;e===void 0&&(e=[]);const o=K(t),c=o===((n=t.ownerDocument)==null?void 0:n.body),l=g(o);return c?e.concat(l,l.visualViewport||[],S(o)?o:[]):e.concat(o,Q(o))}function X(t,e,n){let o;if(e==="viewport")o=function(i,r){const f=g(i),s=T(i),a=f.visualViewport;let u=s.clientWidth,d=s.clientHeight,h=0,w=0;if(a){u=a.width,d=a.height;const p=k();(!p||p&&r==="fixed")&&(h=a.offsetLeft,w=a.offsetTop)}return{width:u,height:d,x:h,y:w}}(t,n);else if(e==="document")o=function(i){const r=T(i),f=A(i),s=i.ownerDocument.body,a=W(r.scrollWidth,r.clientWidth,s.scrollWidth,s.clientWidth),u=W(r.scrollHeight,r.clientHeight,s.scrollHeight,s.clientHeight);let d=-f.scrollLeft+J(i);const h=-f.scrollTop;return x(s).direction==="rtl"&&(d+=W(r.clientWidth,s.clientWidth)-a),{width:a,height:u,x:d,y:h}}(T(t));else if(L(e))o=function(i,r){const f=D(i,!0,r==="fixed"),s=f.top+i.clientTop,a=f.left+i.clientLeft,u=m(i)?C(i):{x:1,y:1};return{width:i.clientWidth*u.x,height:i.clientHeight*u.y,x:a*u.x,y:s*u.y}}(e,n);else{const i={...e};if(k()){var c,l;const r=g(t);i.x-=((c=r.visualViewport)==null?void 0:c.offsetLeft)||0,i.y-=((l=r.visualViewport)==null?void 0:l.offsetTop)||0}o=i}return $(o)}function Y(t,e){return m(t)&&x(t).position!=="fixed"?e?e(t):t.offsetParent:null}function _(t,e){const n=g(t);if(!m(t))return n;let o=Y(t,e);for(;o&&Z(o)&&x(o).position==="static";)o=Y(o,e);return o&&(R(o)==="html"||R(o)==="body"&&x(o).position==="static"&&!O(o))?n:o||function(c){let l=E(c);for(;m(l)&&!B(l);){if(O(l))return l;l=E(l)}return null}(t)||n}function tt(t,e,n){const o=m(e),c=T(e),l=D(t,!0,n==="fixed",e);let i={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(o||!o&&n!=="fixed")if((R(e)!=="body"||S(c))&&(i=A(e)),m(e)){const f=D(e,!0);r.x=f.x+e.clientLeft,r.y=f.y+e.clientTop}else c&&(r.x=J(c));return{x:l.left+i.scrollLeft-r.x,y:l.top+i.scrollTop-r.y,width:l.width,height:l.height}}const et={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:c}=t;const l=n==="clippingAncestors"?function(s,a){const u=a.get(s);if(u)return u;let d=Q(s).filter(v=>L(v)&&R(v)!=="body"),h=null;const w=x(s).position==="fixed";let p=w?E(s):s;for(;L(p)&&!B(p);){const v=x(p),y=O(p);v.position==="fixed"?h=null:(w?y||h:y||v.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=v:d=d.filter(b=>b!==p),p=E(p)}return a.set(s,d),d}(e,this._c):[].concat(n),i=[...l,o],r=i[0],f=i.reduce((s,a)=>{const u=X(e,a,c);return s.top=W(u.top,s.top),s.right=P(u.right,s.right),s.bottom=P(u.bottom,s.bottom),s.left=W(u.left,s.left),s},X(e,r,c));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const c=m(n),l=T(n);if(n===l)return e;let i={scrollLeft:0,scrollTop:0},r={x:1,y:1};const f={x:0,y:0};if((c||!c&&o!=="fixed")&&((R(n)!=="body"||S(l))&&(i=A(n)),m(n))){const s=D(n);r=C(n),f.x=s.x+n.clientLeft,f.y=s.y+n.clientTop}return{width:e.width*r.x,height:e.height*r.y,x:e.x*r.x-i.scrollLeft*r.x+f.x,y:e.y*r.y-i.scrollTop*r.y+f.y}},isElement:L,getDimensions:function(t){return q(t)},getOffsetParent:_,getDocumentElement:T,getScale:C,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const c=this.getOffsetParent||_,l=this.getDimensions;return{reference:tt(e,await c(n),o),floating:{x:0,y:0,...await l(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>x(t).direction==="rtl"},ot=(t,e,n)=>{const o=new Map,c={platform:et,...n},l={...c.platform,_c:o};return U(t,e,{...c,platform:l})};export{ot as z};
