import{main as e}from"../main.js";export function initTocToggle(){const t={toggleBar:document.querySelector(".page-aside-toggle"),postPageContainerDom:document.querySelector(".post-page-container"),toggleBarIcon:document.querySelector(".page-aside-toggle i"),articleContentContainerDom:document.querySelector(".article-content-container"),mainContentDom:document.querySelector(".main-content"),isOpenPageAside:!1,initToggleBarButton(){this.toggleBar&&this.toggleBar.addEventListener("click",()=>{this.isOpenPageAside=!this.isOpenPageAside,e.styleStatus.isOpenPageAside=this.isOpenPageAside,e.setStyleStatus(),this.changePageLayoutWhenOpenToggle(this.isOpenPageAside)})},toggleClassName(e,t,o){e&&e.classList.toggle(t,o)},changePageLayoutWhenOpenToggle(e){this.toggleClassName(this.toggleBarIcon,"fas",e),this.toggleClassName(this.toggleBarIcon,"fa-indent",e),this.toggleClassName(this.toggleBarIcon,"fa-outdent",!e),this.toggleClassName(this.postPageContainerDom,"show-toc",e),this.toggleClassName(this.mainContentDom,"has-toc",e)},pageAsideHandleOfTOC(e){this.toggleBar.style.display="flex",this.isOpenPageAside=e,this.changePageLayoutWhenOpenToggle(e)}};return t.initToggleBarButton(),t}try{swup.hooks.on("page:view",()=>{initTocToggle()})}catch(e){}document.addEventListener("DOMContentLoaded",initTocToggle);