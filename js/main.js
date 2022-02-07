'use strict';


$(function () {
    $('.sp_btn, .sp_menu li').click(function () {
        $('.sp_menu').fadeToggle();
        $('.sp_btn').toggleClass('open');
    });


});