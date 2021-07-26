/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    
    // const btn_pass_toggle = document.body.querySelector('.btn_pass_toggle');
    /*
    var btn_passClicked = function(){
        const btn_pass_toggle = document.body.querySelector('.btn_pass_toggle');
        if(btn_pass_toggle.clicked == true){
            btn_pass_toggle.classList.add('active')
            console.log('hello')
        }
    };
    */

    var popupClicked = function(){
        const btn_table = document.body.querySelector('.button-timetable');
        const layer_wrap = document.body.querySelector('.layer_wrap');
        const timetablePopup = document.body.querySelector('#timetablePopup');
        btn_table.addEventListener('click', function(event){
            if(event!=null){event.preventDefault()};
            layer_wrap.style.display = "block";
            timetablePopup.style.display = "block";
        })
    }

    popupClicked()

    var closeBtnClicked = function(){
        const btn_close = document.body.querySelector('.btn_close');
        btn_close.addEventListener('click', function(event){
            if(event!=null){event.preventDefault()};
            closePopup();
        })
    }

    function closePopup(){
        const layer_wrap = document.body.querySelector('.layer_wrap');
        const layer_container = document.body.querySelector('.layer_container');
        layer_wrap.style.display = "none";
        layer_container.style.display = "none";
    }

    closeBtnClicked();

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };


    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

/*
$(document).ready(function(){
    $(".btn_pass_toggle").on('click', function(event){
        alert('hello')
        if(event != null){event.preventDefault();}
        $(this).toggleClass('active')
    });
})
*/