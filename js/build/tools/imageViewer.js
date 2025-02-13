export default function imageViewer(){let e=!1,t=1,n=!1,r=!1,i=0,o=0,s=0,a=0,c=0;const l=document.querySelector(".image-viewer-container");if(!l)return void console.warn("Image viewer container not found. Exiting imageViewer function.");const d=l.querySelector("img");if(!d)return void console.warn("Target image not found in image viewer container. Exiting imageViewer function.");const u=e=>{document.body.style.overflow=e?"hidden":"auto",e?l.classList.add("active"):l.classList.remove("active")};let m=0;const v=e=>{n&&e.stopPropagation(),n=!1,d.style.cursor="grab"};d.addEventListener("wheel",(e=>{e.preventDefault();const n=d.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,o=r-n.width/2,s=i-n.height/2,l=t;t+=-.001*e.deltaY,t=Math.min(Math.max(.8,t),4),l<t?(a-=o*(t-l),c-=s*(t-l)):(a=0,c=0),d.style.transform=`translate(${a}px, ${c}px) scale(${t})`}),{passive:!1}),d.addEventListener("mousedown",(e=>{e.preventDefault(),n=!0,o=e.clientX,s=e.clientY,d.style.cursor="grabbing"}),{passive:!1}),d.addEventListener("mousemove",(e=>{if(n){const n=(new Date).getTime();if(n-m<100)return;m=n;const i=e.clientX-o,l=e.clientY-s;a+=i,c+=l,o=e.clientX,s=e.clientY,d.style.transform=`translate(${a}px, ${c}px) scale(${t})`,r=!0}}),{passive:!1}),d.addEventListener("mouseup",v,{passive:!1}),d.addEventListener("mouseleave",v,{passive:!1}),l.addEventListener("click",(n=>{r||(e=!1,u(e),t=1,a=0,c=0,d.style.transform=`translate(${a}px, ${c}px) scale(${t})`),r=!1}));const g=document.querySelectorAll(".markdown-body img, .masonry-item img, #shuoshuo-content img"),f=n=>{"Escape"===n.key&&e&&(e=!1,u(e),t=1,a=0,c=0,d.style.transform=`translate(${a}px, ${c}px) scale(${t})`,document.removeEventListener("keydown",f))};if(g.length>0){g.forEach(((t,n)=>{t.addEventListener("click",(()=>{i=n,e=!0,u(e),d.src=t.src,document.addEventListener("keydown",f)}))}));const t=t=>{if(!e)return;if("ArrowUp"===t.key||"ArrowLeft"===t.key)i=(i-1+g.length)%g.length;else{if("ArrowDown"!==t.key&&"ArrowRight"!==t.key)return;i=(i+1)%g.length}const n=g[i];let r=n.src;n.hasAttribute("lazyload")&&(r=n.getAttribute("data-src"),n.src=r,n.removeAttribute("lazyload")),d.src=r};document.addEventListener("keydown",t)}}