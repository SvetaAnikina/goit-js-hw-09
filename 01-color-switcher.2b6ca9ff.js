const t={buttonStartEl:document.querySelector("button[data-start]"),buttonStopEl:document.querySelector("button[data-stop]")};let e=null;t.buttonStartEl.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.buttonStartEl.setAttribute("disabled","true")})),t.buttonStopEl.addEventListener("click",(()=>{clearInterval(e),t.buttonStartEl.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.2b6ca9ff.js.map