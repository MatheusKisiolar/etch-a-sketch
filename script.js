const container = document.querySelector("#container");
const currentSize = document.querySelector("#current-size");
const decreaseSizeButton = document.querySelector("#decrease-size-button");
const increaseSizeButton = document.querySelector("#increase-size-button");
const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", buildBoxes);
increaseSizeButton.addEventListener("click", increaseSize);
decreaseSizeButton.addEventListener("click", decreaseSize);


let boxesPerSide = 16;
buildBoxes();

function buildBoxes() {
    document.querySelector("#container").innerHTML = "";

    const totalBoxes = boxesPerSide * boxesPerSide;

    currentSize.textContent = `${boxesPerSide} x ${boxesPerSide}`;

    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style = `width: ${512/boxesPerSide}px; height: ${512/boxesPerSide}px;`;
        box.addEventListener("mouseover", paint);
        box.addEventListener("mousedown", paint);
        container.appendChild(box);
    }
}

function paint(e){
    if (e.type === "mouseover" && e.buttons === 1 || e.type === "mousedown" && e.buttons === 1){
        e.target.style.backgroundColor = "black";
    } else if (e.type === "mouseover" && e.buttons == 2 || e.type === "mousedown" && e.buttons === 2){
        e.target.style.backgroundColor = "rgb(240, 240, 240)";
    }  
}

function increaseSize() {
    if (boxesPerSide < 128) {
        boxesPerSide *= 2;
        buildBoxes()
    }
}

function decreaseSize() {
    if (boxesPerSide > 8) {
        boxesPerSide /= 2;
        buildBoxes()
    }
}