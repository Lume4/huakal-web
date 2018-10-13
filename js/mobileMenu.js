//retrieve menu button and menu list
var mobileBtn, menuUl;

mobileBtn = document.querySelector(".mobileButton");
menuUl = document.querySelector(".menu");

//add event listener to mobile btn
mobileBtn.addEventListener('click', function(){
    //when the button is clicked toggle the class 'clicked'
    menuUl.classList.toggle('clicked');
});