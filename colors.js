var box = document.getElementById('box');

box.addEventListener('mousemove' , runEvent);

function runEvent(e){
 console.log('EVENT TYPE: '+e.type);

output.innerHTML = '<h3>mouseX'+e.offsetX+'</h3><h3>mouseY: '+e.offsetY + '</h3>';

box.style.backgroundColor = "rgb("+e.offsetX +", "+e.offsetY+",50)" 
}