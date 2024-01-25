var div1 = document.getElementById("div1");

function updateResult(clickedElement) {
    document.getElementById("Instruction").style.marginTop = "2rem";
    document.getElementById("Instruction").style.display = "block";
    div1.style.display = "block";
    var value = clickedElement.innerText;
    document.getElementById('result').innerText = `${value}`;
}

function addGame() {
    if (document.getElementById('input_game').value != ""){

    document.getElementById("Instruction").style.display = "block";
    document.getElementById("Instruction").style.marginTop = "2rem";
    div1.style.display = "block";
    var inputValue = document.getElementById('input_game').value;
    document.getElementById('result').innerText = `${inputValue}`;
}
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));
    draggedElement.style.color = getRandomColor();

    // Set dynamic width and height
    div1.style.width = draggedElement.offsetWidth + "px";
    div1.style.height = draggedElement.offsetHeight + "px";

    // Show the div1
    div1.appendChild(draggedElement);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
