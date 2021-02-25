$(function () {
    'use strict';
    //adjustslider height
     var   winH = $(window).height(),
        ipperH = $('.upper-bar').innerHeight(),  
          navH = $('.navbar').innerHeight();
     $('.slider').height(winH-(ipperH+navH));
    });