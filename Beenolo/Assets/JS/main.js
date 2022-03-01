var button = document.getElementsByClassName('side');
var div = document.getElementsByClassName('img_unicorn');
console.log(button);
console.log(div);
var l = 0;

button[1].onclick = ()=>{
    l++;
    for(var i of div){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-300px";}
        if (l>2) {l=2;}
    }
}

button[0].onclick = ()=>{
    l--;
    for(var i of div){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-300px";}
        if (l<0) {l=0;}
    }
}