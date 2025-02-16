import{main as e}from"../main.js";const t=".mermaid";export const ModeToggle={modeToggleButton_dom:null,iconDom:null,mermaidLightTheme:null,mermaidDarkTheme:null,async mermaidInit(e){window.mermaid&&(await new Promise((i,e)=>{try{var o=document.querySelectorAll(t),a=o.length;o.forEach(e=>{null!=e.getAttribute("data-original-code")&&(e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-original-code")),0==--a&&i()})}catch(i){e(i)}}),mermaid.initialize({theme:e}),mermaid.init({theme:e},document.querySelectorAll(t)))},enableLightMode(){document.body.classList.remove("dark-mode"),document.documentElement.classList.remove("dark"),document.body.classList.add("light-mode"),document.documentElement.classList.add("light"),this.iconDom.className="fa-regular fa-moon",e.styleStatus.isDark=!1,e.setStyleStatus(),this.mermaidInit(this.mermaidLightTheme),this.setGiscusTheme()},enableDarkMode(){document.body.classList.remove("light-mode"),document.documentElement.classList.remove("light"),document.body.classList.add("dark-mode"),document.documentElement.classList.add("dark"),this.iconDom.className="fa-regular fa-brightness",e.styleStatus.isDark=!0,e.setStyleStatus(),this.mermaidInit(this.mermaidDarkTheme),this.setGiscusTheme()},async setGiscusTheme(i){if(document.querySelector("#giscus-container")){let t=document.querySelector("iframe.giscus-frame");for(;!t;)await new Promise(e=>setTimeout(e,1e3)),t=document.querySelector("iframe.giscus-frame");for(;t.classList.contains("giscus-frame--loading");)await new Promise(e=>setTimeout(e,1e3));i??=e.styleStatus.isDark?"dark":"light",t.contentWindow.postMessage({giscus:{setConfig:{theme:i}}},"https://giscus.app")}},isDarkPrefersColorScheme:()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"),initModeStatus(){const t=e.getStyleStatus();t?t.isDark?this.enableDarkMode():this.enableLightMode():this.isDarkPrefersColorScheme().matches?this.enableDarkMode():this.enableLightMode()},initModeToggleButton(){this.modeToggleButton_dom.addEventListener("click",()=>{document.body.classList.contains("dark-mode")?this.enableLightMode():this.enableDarkMode()})},initModeAutoTrigger(){this.isDarkPrefersColorScheme().addEventListener("change",e=>{e.matches?this.enableDarkMode():this.enableLightMode()})},async init(){this.modeToggleButton_dom=document.querySelector(".tool-dark-light-toggle"),this.iconDom=document.querySelector(".tool-dark-light-toggle i"),this.mermaidLightTheme=void 0!==theme.mermaid&&void 0!==theme.mermaid.style&&void 0!==theme.mermaid.style.light?theme.mermaid.style.light:"default",this.mermaidDarkTheme=void 0!==theme.mermaid&&void 0!==theme.mermaid.style&&void 0!==theme.mermaid.style.dark?theme.mermaid.style.dark:"dark",this.initModeStatus(),this.initModeToggleButton(),this.initModeAutoTrigger();try{await new Promise((i,e)=>{try{var o=document.querySelectorAll(t),a=o.length;o.forEach(e=>{e.setAttribute("data-original-code",e.innerHTML),0==--a&&i()})}catch(i){e(i)}}).catch(console.error)}catch(e){}}};export default function initModeToggle(){ModeToggle.init()}