$(document).ready(function () {
    $('#lemur').on('mousemove', function (event) {
        TweenMax.set($('.image__lemur'), {
            x: -event.offsetX * -0.03,
            y: -event.offsetY * -0.03
        })

        TweenMax.set($('.image__hexa'), {
            x: -event.offsetX * 0.02,
            y: -event.offsetY * 0.02
        })


    });


    $('#lemur').on('mouseleave', function (event) {
        TweenMax.to($('.image__lemur'), 1.2, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        })

        TweenMax.to($('.image__hexa'), 1.2, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        })
    });
})


var myNav = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        alert('cambioo');
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


//////   Mouse pointer

var $hexa = $('.hexa');

function moveHexa(e) {
	TweenLite.to($hexa, 0.35, {
    css: {
      left: e.pageX,
      top: e.pageY,
    ease: Elastic.easeInOut
    }
  });
}

$(window).on('mousemove', moveHexa);
