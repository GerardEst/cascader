var s,f,o,a,h,m,i,u,g=new ResizeObserver(()=>{y()});function k(t,e){h=e.horizontalGap||e.gap||20,a=e.verticalGap||e.gap||20,m=e.minWidth||200,i=typeof t=="string"?document.querySelector(t):t,s=i.offsetWidth,o=Math.floor(s/m),u=i.children,i.style.position="relative",y()}function y(){_(),w()}function v(){g.disconnect(),i.removeAttribute("style");for(let t of u)t.removeAttribute("style")}function _(){for(let t=0;t<u.length;t++){s=i.offsetWidth,o=Math.floor(s/m);let e=u[t],l=Math.floor(t/o),r=t%o,n=100/o,p=h*(o-1)/o;l>f&&(f=l),e.style.position="absolute",e.setAttribute("row",`${l}`),e.setAttribute("col",`${r}`),e.style.width=`calc(${n}% - ${p}px)`,e.style.left=`calc(${n*r}% + ${h/o*r}px`;let b=i.querySelectorAll(`[col='${r}']`),c=0;for(let d of b)Number(d.getAttribute("row"))>l||(c=c+d.offsetHeight+a);c=c-e.offsetHeight-a,e.style.top=c+"px",g.observe(e)}}function w(){let t=0;for(let e=0;e<o;e++){let l=i.querySelectorAll(`[col='${e}']`),r=0;for(let n of l){let b=n.getAttribute("row")<f?a:0;r=r+n.offsetHeight+b}r>t&&(t=r)}i.style.height=t+"px"}export{k as cascade,v as removeCascade};
//# sourceMappingURL=cascader-min.js.map
