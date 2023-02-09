const container = document.querySelector("#container");

let boxesPerSide = 128;

const totalBoxes = boxesPerSide * boxesPerSide;

for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style = `width: ${512/boxesPerSide}px; height: ${512/boxesPerSide}px;`;
    box.addEventListener("mouseover", paint);
    box.addEventListener("mousedown", paint);
    container.appendChild(box);
}

function paint(e){
    if (e.type === "mouseover" && e.buttons === 1 || e.type === "mousedown" && e.buttons === 1){
        e.target.style.backgroundColor = "black";
    } else if (e.type === "mouseover" && e.buttons == 2 || e.type === "mousedown" && e.buttons === 2){
        e.target.style.backgroundColor = "rgb(240, 240, 240)";
    }  
}