let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag); 
}

slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");
    //  console.log(slides);

    for(let y of slides){
        y.style.display = "none";
    }

    if (num == slides.length) {
        num = 0;
        flag = 0;
    }

    if (num < 0) {
        num = slides.length-1;
        flag = slides.length-1;
    }

    slides[num].style.display = "block";
}

// var button = document.getElementsByClassName('side');
// var div = document.getElementsByClassName('left-right-slider');
// var l = 0;

// button[1].onclick = ()=>{
//     l++;
//     for(var i of div){
//         if (l==0) {i.style.left = "0px";}
//         if (l==1) {i.style.left = "-740px";}
//         if (l==2) {i.style.left = "-1480px";}
//         if (l==3) {i.style.left = "-2220px";}
//         if (l==4) {i.style.left = "-2960px";}
//         if (l>4) {l=4;}
//     }
// }