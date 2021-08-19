canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;
radius=document.getElementById("radius").value;
 canvas.addEventListener("mousedown",myMouseDown);
 function myMouseDown(e){
  color=document.getElementById("color").value; 
  width_of_line=document.getElementById("width").value;
  mouse_event="mousedown";
 }

 canvas.addEventListener("mousemove",myMouseMove);
 function myMouseMove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
 }
 