var n=0,u=0,l=0,f=0,b=0,g=0,i=null,a=null,_=new ResizeObserver(e=>{y()});function v(e,t){b=t?.horizontalGap||t?.gap||20,f=t?.verticalGap||t?.gap||20,g=t?.minWidth||200,i=typeof e=="string"?document.querySelector(e):e,n=i.offsetWidth,l=Math.floor(n/g),a=i.children,i.style.position="relative",y()}function y(){w(),k()}function A(){_.disconnect(),i.removeAttribute("style");for(let e of a)e.removeAttribute("style")}function w(){for(let e=0;e<a.length;e++){n=i.offsetWidth,l=Math.floor(n/g);let t=a[e],r=Math.floor(e/l),o=e%l,c=100/l,d=b*(l-1)/l;r>u&&(u=r),t.style.position="absolute",t.setAttribute("row",r),t.setAttribute("col",o),t.style.width=`calc(${c}% - ${d}px)`,t.style.left=`calc(${c*o}% + ${b/l*o}px`;let h=i.querySelectorAll(`[col='${o}']`),s=0;for(let p of h)p.getAttribute("row")>r||(s=s+p.offsetHeight+f);s=s-t.offsetHeight-f,t.style.top=s+"px",_.observe(t)}}function k(){let e=0;for(let t=0;t<l;t++){let r=i.querySelectorAll(`[col='${t}']`),o=0;for(let c of r){let h=c.getAttribute("row")<u?f:0;o=o+c.offsetHeight+h}o>e&&(e=o)}i.style.height=e+"px"}export{v as cascade,A as removeCascade};
//# sourceMappingURL=cascader-min.js.map
