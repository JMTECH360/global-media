window.onload= function(){
    document.getElementById("loader").style.display = "none";
}



// Scroll to top button****************

window.addEventListener("scroll",function(){
    var sbtn = document.getElementById("s-btn");
    if(window.pageYOffset >1500){
        sbtn.style.display = "block";
    }else{
        sbtn.style.display = "none";
    }
});

document.getElementById("s-btn").onclick = function(){
    window.scrollTo(0, 0);
};
// **********************************

// floating navbar
window.onscroll = function(){
    var navbar = document.getElementById("navbar");
    if(window.pageYOffset > 1){
        navbar.classList.add("scroll");
    }else{
        navbar.classList.remove("scroll");
    }
};

// *******************************
