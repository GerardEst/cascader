var r=0,i=null;function _(o,e){r=e,i=o,i.id||console.error("Cascader: Container needs an id");let t=document.querySelectorAll(`#${i.id} > *`);i.style.position="relative",h(t),b(t),u()}function h(o){for(let e of o)new ResizeObserver(()=>{b(o),u()}).observe(e)}function b(o){for(let e=0;e<o.length;e++){let t=o[e],l=Math.floor(e/r),s=100/r,n=e%r,c=0;t.style.position="absolute",t.setAttribute("row",l),t.setAttribute("col",n),t.style.width=s+"%",t.style.left=s*n+"%";let a=i.querySelectorAll(`[col='${n}']`);for(let f of a)f.getAttribute("row")>=l||(c=c+f.offsetHeight,t.style.top=c+"px")}}function u(){let o=0;for(let e=0;e<r;e++){let t=i.querySelectorAll(`[col='${e}']`),l=0;for(let s of t)l=l+s.offsetHeight;l>o&&(o=l)}i.style.height=o+"px"}export{_ as default};
//# sourceMappingURL=cascader-min.js.map
