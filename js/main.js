$(function () {
    'use strict';
    //adjustslider height
     var winH = $(window).height(),
        ipperH = $('.upper-bar').innerHeight(),  
          navH = $('.navbar').innerHeight();
     $('.one-time').innerHeight(winH-(ipperH + navH));
    });
