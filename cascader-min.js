(()=>{function k(o,i){let l=o.querySelectorAll("div");o.style.position="relative";for(let r in l){let t=l[r],s=Math.floor(r/i),n=100/i,c=r%i,e=0;t.setAttribute("row",s),t.setAttribute("col",c),t.style.width=n+"%",t.style.left=n*c+"%";let f=o.querySelectorAll(`[col='${c}']`);for(let b of f)b.getAttribute("row")>=s||(e=e+b.offsetHeight,t.style.top=e+"px")}}})();
//# sourceMappingURL=cascader-min.js.map
