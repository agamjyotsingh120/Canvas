var mouseevent = "empty";
var lastx,lasty;
color = "black";
width=1;


canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;


    mouseevent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseuo", my_mouseup);
function my_mouseup(e)
{
    mouseevent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;

    if(mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();

        console.log("lastx and lasty are "+lastx+" & "+lasty);
        console.log("currenty and currentx are "+currentx+" & "+currenty);
    }

    lastx = currentx;
    lasty = currenty;
    
}
function cleararea() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    }