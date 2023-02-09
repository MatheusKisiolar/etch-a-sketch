const container = document.querySelector("#container");

let boxesPerSide = 16;

const totalBoxes = boxesPerSide * boxesPerSide;

for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style = `width: ${512/boxesPerSide}px; height: ${512/boxesPerSide}px;`;
    box.addEventListener("mouseover", paint);
    container.appendChild(box);
}

function paint(e){
    e.target.style.backgroundColor = "black";
}