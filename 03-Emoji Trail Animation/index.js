const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const Xpos = event.clientX
    const Ypos = event.clientY

    const spanEl = document.createElement("span")
    bodyEl.appendChild(spanEl)
    spanEl.style.left = Xpos + "px";
    spanEl.style.top = Ypos + "px";
    const size = Math.floor(Math.random() * 100);
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
});

