import{S as t,i as n,s as e,e as o,c as r,a,d as i,b as l,f as s,x as c,t as d,k as p,g as u,n as h,F as f,h as g,H as b,I as x,w as m,u as y,J as v,j as w,m as k,o as E,K as L,v as T,L as j,M as I,N as $,O as S,r as z,P as D,Q as N,R as P}from"../chunks/vendor-558e3855.js";import V from"./duration.svelte-f15a3bde.js";function A(t,n,e){const o=t.slice();return o[11]=n[e].id,o[12]=n[e].duration,o}function C(t,n,e){const o=t.slice();return o[15]=n[e],o}function U(t){let n,e,d,p=t[3],u=[];for(let o=0;o<p.length;o+=1)u[o]=O(C(t,p,o));const h=t=>y(u[t],1,1,(()=>{u[t]=null}));return{c(){n=o("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){n=r(t,"DIV",{class:!0});var e=a(n);for(let n=0;n<u.length;n+=1)u[n].l(e);e.forEach(i),this.h()},h(){l(n,"class","error")},m(t,e){s(t,n,e);for(let o=0;o<u.length;o+=1)u[o].m(n,null);d=!0},p(t,e){if(8&e){let o;for(p=t[3],o=0;o<p.length;o+=1){const r=C(t,p,o);u[o]?(u[o].p(r,e),c(u[o],1)):(u[o]=O(r),u[o].c(),c(u[o],1),u[o].m(n,null))}for(z(),o=p.length;o<u.length;o+=1)h(o);m()}},i(t){if(!d){for(let t=0;t<p.length;t+=1)c(u[t]);b((()=>{e||(e=x(n,D,{},!0)),e.run(1)})),d=!0}},o(t){u=u.filter(Boolean);for(let n=0;n<u.length;n+=1)y(u[n]);e||(e=x(n,D,{},!1)),e.run(0),d=!1},d(t){t&&i(n),v(u,t),t&&e&&e.end()}}}function O(t){let n,e,c,m,y,v=t[15]+"";return{c(){n=o("div"),e=d(v),c=p(),this.h()},l(t){n=r(t,"DIV",{class:!0});var o=a(n);e=u(o,v),c=h(o),o.forEach(i),this.h()},h(){l(n,"class","item")},m(t,o){s(t,n,o),f(n,e),f(n,c),y=!0},p(n,o){t=n,(!y||8&o)&&v!==(v=t[15]+"")&&g(e,v)},i(t){y||(b((()=>{m||(m=x(n,P,{delay:250,duration:300,easing:N},!0)),m.run(1)})),y=!0)},o(t){m||(m=x(n,P,{delay:250,duration:300,easing:N},!1)),m.run(0),y=!1},d(t){t&&i(n),t&&m&&m.end()}}}function _(t){let n,e,d,p=t[2],u=[];for(let o=0;o<p.length;o+=1)u[o]=B(A(t,p,o));const h=t=>y(u[t],1,1,(()=>{u[t]=null}));return{c(){n=o("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){n=r(t,"DIV",{id:!0});var e=a(n);for(let n=0;n<u.length;n+=1)u[n].l(e);e.forEach(i),this.h()},h(){l(n,"id","menu")},m(t,e){s(t,n,e);for(let o=0;o<u.length;o+=1)u[o].m(n,null);d=!0},p(t,e){if(52&e){let o;for(p=t[2],o=0;o<p.length;o+=1){const r=A(t,p,o);u[o]?(u[o].p(r,e),c(u[o],1)):(u[o]=B(r),u[o].c(),c(u[o],1),u[o].m(n,null))}for(z(),o=p.length;o<u.length;o+=1)h(o);m()}},i(t){if(!d){for(let t=0;t<p.length;t+=1)c(u[t]);b((()=>{e||(e=x(n,D,{},!0)),e.run(1)})),d=!0}},o(t){u=u.filter(Boolean);for(let n=0;n<u.length;n+=1)y(u[n]);e||(e=x(n,D,{},!1)),e.run(0),d=!1},d(t){t&&i(n),v(u,t),t&&e&&e.end()}}}function B(t){let n,e,m,v,j,I,$,S,z,D,A,C,U,O,_,B=t[11]+"";return I=new V({props:{duration:t[12]}}),{c(){n=o("div"),e=o("a"),m=d(B),j=p(),w(I.$$.fragment),$=p(),S=o("span"),z=d("Copy"),A=p(),this.h()},l(t){n=r(t,"DIV",{class:!0});var o=a(n);e=r(o,"A",{href:!0,target:!0});var l=a(e);m=u(l,B),l.forEach(i),j=h(o),k(I.$$.fragment,o),$=h(o),S=r(o,"SPAN",{id:!0,class:!0});var s=a(S);z=u(s,"Copy"),s.forEach(i),A=h(o),o.forEach(i),this.h()},h(){l(e,"href",v=t[4]+t[11]),l(e,"target","_blank"),l(S,"id",D=t[11]),l(S,"class","copy"),l(n,"class","item")},m(o,r){s(o,n,r),f(n,e),f(e,m),f(n,j),E(I,n,null),f(n,$),f(n,S),f(S,z),f(n,A),U=!0,O||(_=L(S,"click",t[5]),O=!0)},p(n,o){t=n,(!U||4&o)&&B!==(B=t[11]+"")&&g(m,B),(!U||4&o&&v!==(v=t[4]+t[11]))&&l(e,"href",v);const r={};4&o&&(r.duration=t[12]),I.$set(r),(!U||4&o&&D!==(D=t[11]))&&l(S,"id",D)},i(t){U||(c(I.$$.fragment,t),b((()=>{C||(C=x(n,P,{delay:250,duration:300,easing:N},!0)),C.run(1)})),U=!0)},o(t){y(I.$$.fragment,t),C||(C=x(n,P,{delay:250,duration:300,easing:N},!1)),C.run(0),U=!1},d(t){t&&i(n),T(I),t&&C&&C.end(),O=!1,_()}}}function F(t){let n,e,g,b,x,v,w,k,E,T,D,N,P,V,A,C,O,B,F,G,q,H,J,M=t[3].length&&U(t),R=t[2].length&&_(t);return{c(){n=o("div"),e=o("h1"),g=d("µlink"),b=p(),M&&M.c(),x=p(),v=o("input"),w=p(),k=o("input"),E=p(),T=o("button"),D=d("Shorten"),N=p(),R&&R.c(),P=p(),V=o("div"),A=o("a"),C=d("Github"),O=p(),B=p(),F=o("style"),G=d("@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');\n\n\t\tbody {\n\t\t\ttext-align: center;\n\t\t\tbackground-color: #b7c0ee;\n\n\t\t\tfont-family: 'Lora', serif;\n\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\tinput {\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\tmargin: 8px 0;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: 1px solid;\n\t\t\tpadding: 10px;\n\t\t\tbox-shadow: 5px 10px #050401;\n\t\t\tfont-family: 'Lora', serif;\n\t\t}\n\n\t\tinput::-webkit-outer-spin-button,\n\t\tinput::-webkit-inner-spin-button {\n\t\t\t-webkit-appearance: none;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t/* Firefox */\n\t\tinput[type='number'] {\n\t\t\t-moz-appearance: textfield;\n\t\t}\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\t#footer {\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\n\t\t\tborder: 1px solid black;\n\n\t\t\twidth: 100%;\n\t\t\n\t\t\tbackground-color: #7067cf;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#footer a {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t.icon {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t}\n\n\t\t.error {\n\t\t\tborder: 1px solid;\n\t\t\tpadding: 10px;\n\t\t\tbox-shadow: 5px 10px;\n\t\t\tmargin: 1em;\n\t\t\tbackground-color: #b3001b;\n\t\t}\n\n\t\t.copy {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.btn {\n\t\t\tbackground-color: #7067cf;\n\n\t\t\tfont-family: 'Lora', serif;\n\t\t\tborder: none;\n\t\t\tcolor: white;\n\t\t\tpadding: 15px 32px;\n\t\t\tborder: 1px solid black;\n\n\t\t\tfont-size: 1em;\n\t\t\tmargin: 1em;\n\t\t\tcursor: pointer;\n\n\t\t\tbox-shadow: 5px 8px black;\n\t\t}\n\n\t\t.btn:active {\n\t\t\ttransform: scale(0.98);\n\t\t\tbox-shadow: 3px 6px black;\n\t\t}\n\n\t\t#menu {\n\t\t\tbackground-color: white;\n\n\t\t\tmargin: 1em;\n\n\t\t\tborder: 1px solid;\n\t\t\tpadding: 10px;\n\t\t\tbox-shadow: 5px 10px;\n\t\t}\n\n\t\t.item {\n\t\t\tpadding: 0.5em;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t}\n\n\t\t.item a {\n\t\t\tcolor: #7067cf;\n\t\t}"),this.h()},l(t){n=r(t,"DIV",{id:!0});var o=a(n);e=r(o,"H1",{});var l=a(e);g=u(l,"µlink"),l.forEach(i),b=h(o),M&&M.l(o),x=h(o),v=r(o,"INPUT",{type:!0,placeholder:!0}),w=h(o),k=r(o,"INPUT",{type:!0,placeholder:!0,min:!0}),E=h(o),T=r(o,"BUTTON",{type:!0,class:!0});var s=a(T);D=u(s,"Shorten"),s.forEach(i),N=h(o),R&&R.l(o),o.forEach(i),P=h(t),V=r(t,"DIV",{id:!0});var c=a(V);A=r(c,"A",{href:!0,target:!0});var d=a(A);C=u(d,"Github"),d.forEach(i),c.forEach(i),O=h(t),B=h(t);const p=j('[data-svelte="svelte-17pn1j9"]',document.head);F=r(p,"STYLE",{});var f=a(F);G=u(f,"@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');\n\n\t\tbody {\n\t\t\ttext-align: center;\n\t\t\tbackground-color: #b7c0ee;\n\n\t\t\tfont-family: 'Lora', serif;\n\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\tinput {\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\tmargin: 8px 0;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: 1px solid;\n\t\t\tpadding: 10px;\n\t\t\tbox-shadow: 5px 10px #050401;\n\t\t\tfont-family: 'Lora', serif;\n\t\t}\n\n\t\tinput::-webkit-outer-spin-button,\n\t\tinput::-webkit-inner-spin-button {\n\t\t\t-webkit-appearance: none;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t/* Firefox */\n\t\tinput[type='number'] {\n\t\t\t-moz-appearance: textfield;\n\t\t}\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\t#footer {\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\n\t\t\tborder: 1px solid black;\n\n\t\t\twidth: 100%;\n\t\t\n\t\t\tbackground-color: #7067cf;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#footer a {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t.icon {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t}\n\n\t\t.error {\n\t\t\tborder: 1px solid;\n\t\t\tpadding: 10px;\n\t\t\tbox-shadow: 5px 10px;\n\t\t\tmargin: 1em;\n\t\t\tbackground-color: #b3001b;\n\t\t}\n\n\t\t.copy {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.btn {\n\t\t\tbackground-color: #7067cf;\n\n\t\t\tfont-family: 'Lora', serif;\n\t\t\tborder: none;\n\t\t\tcolor: white;\n\t\t\tpadding: 15px 32px;\n\t\t\tborder: 1px solid black;\n\n\t\t\tfont-size: 1em;\n\t\t\tmargin: 1em;\n\t\t\tcursor: pointer;\n\n\t\t\tbox-shadow: 5px 8px black;\n\t\t}\n\n\t\t.btn:active {\n\t\t\ttransform: scale(0.98);\n\t\t\tbox-shadow: 3px 6px black;\n\t\t}\n\n\t\t#menu {\n\t\t\tbackground-color: white;\n\n\t\t\tmargin: 1em;\n\n\t\t\tborder: 1px solid;\n\t\t\tpadding: 10px;\n\t\t\tbox-shadow: 5px 10px;\n\t\t}\n\n\t\t.item {\n\t\t\tpadding: 0.5em;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t}\n\n\t\t.item a {\n\t\t\tcolor: #7067cf;\n\t\t}"),f.forEach(i),p.forEach(i),this.h()},h(){l(v,"type","text"),l(v,"placeholder","enter your url"),v.required=!0,l(k,"type","number"),l(k,"placeholder","enter seconds duration"),l(k,"min","1"),k.required=!0,l(T,"type","button"),l(T,"class","btn"),l(n,"id","container"),l(A,"href","https://github.com/ImGabe"),l(A,"target","_blank"),l(V,"id","footer")},m(o,r){s(o,n,r),f(n,e),f(e,g),f(n,b),M&&M.m(n,null),f(n,x),f(n,v),I(v,t[0]),f(n,w),f(n,k),I(k,t[1]),f(n,E),f(n,T),f(T,D),f(n,N),R&&R.m(n,null),s(o,P,r),s(o,V,r),f(V,A),f(A,C),s(o,O,r),s(o,B,r),f(document.head,F),f(F,G),q=!0,H||(J=[L(v,"input",t[7]),L(k,"input",t[8]),L(T,"click",t[6])],H=!0)},p(t,[e]){t[3].length?M?(M.p(t,e),8&e&&c(M,1)):(M=U(t),M.c(),c(M,1),M.m(n,x)):M&&(z(),y(M,1,1,(()=>{M=null})),m()),1&e&&v.value!==t[0]&&I(v,t[0]),2&e&&$(k.value)!==t[1]&&I(k,t[1]),t[2].length?R?(R.p(t,e),4&e&&c(R,1)):(R=_(t),R.c(),c(R,1),R.m(n,null)):R&&(z(),y(R,1,1,(()=>{R=null})),m())},i(t){q||(c(M),c(R),q=!0)},o(t){y(M),y(R),q=!1},d(t){t&&i(n),M&&M.d(),R&&R.d(),t&&i(P),t&&i(V),t&&i(O),t&&i(B),i(F),H=!1,S(J)}}}function G(t,n,e){let o;var r=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(r,a){function i(t){try{s(o.next(t))}catch(n){a(n)}}function l(t){try{s(o.throw(t))}catch(n){a(n)}}function s(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,l)}s((o=o.apply(t,n||[])).next())}))};const a="http://localhost:8000/";let i,l,s=[];return e(3,o=[]),[i,l,s,o,a,function(){return r(this,void 0,void 0,(function*(){const t=a+this.id;yield navigator.clipboard.writeText(t).then((()=>console.log("Async: Copying to clipboard was successful!")),(t=>console.error("Async: Could not copy text: ",t)))}))},function(){return r(this,void 0,void 0,(function*(){(e(3,o.length=0,o),i||o.push("The URL field is empty."),l?(!Math.max(0,l)||l!==(0|l))&&o.push("Use only integers and positives."):o.push("The duration field is empty."),setTimeout((()=>e(3,o.length=0,o)),1e4),o).length||(yield fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({url:i,duration:l})}).then((t=>t.json())).then((t=>{e(2,s=s.concat(t))})).catch(console.error))}))},function(){i=this.value,e(0,i)},function(){l=$(this.value),e(1,l)}]}export default class extends t{constructor(t){super(),n(this,t,G,F,e,{})}}