const container = document.querySelector("#container");

let boxesPerSide = 32;

const totalBoxes = boxesPerSide * boxesPerSide;

for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style = `width: ${512/boxesPerSide}px; height: ${512/boxesPerSide}px;`;
    box.addEventListener("mouseover", paint);
    box.addEventListener("click", paintOne);
    container.appendChild(box);
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function paint(e){
    if (mouseDown){
        e.target.style.backgroundColor = "black";
    }  
}

function paintOne(e){
    e.target.style.backgroundColor = "black";
}