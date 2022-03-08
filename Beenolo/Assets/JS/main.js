var button = document.getElementsByClassName('side');
var div = document.getElementsByClassName('img-unicorn');
var number = document.getElementsByClassName("side-number");
console.log(button);
console.log(div);
var l = 0;
button[0].style.opacity = "0.5";
number[1].style.opacity = "0.5";

button[1].onclick = ()=>{
    button[0].style.opacity = "1";
    button[1].style.opacity = "0.5";
    number[0].style.opacity = "0.5";
    number[1].style.opacity = "1";
    l++;
    for(var i of div){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-300px";}
        if (l>2) {l=2;}
    }
}

button[0].onclick = ()=>{
    button[0].style.opacity = "0.5";
    button[1].style.opacity = "1";
    number[0].style.opacity = "1";
    number[1].style.opacity = "0.5";
    l--;
    for(var i of div){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-300px";}
        if (l<0) {l=0;}
    }
}