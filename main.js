canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
console.log(ctx);
var mouseEvent = "";

color = "red";
radius = 30;
width_of_line = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup() {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function canvasClear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
