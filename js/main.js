(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // // Fixed Navbar
    // $(window).scroll(function () {
    //     if ($(window).width() < 992) {
    //         if ($(this).scrollTop() > 55) {
    //             $('.fixed-top').addClass('shadow');
    //         } else {
    //             $('.fixed-top').removeClass('shadow');
    //         }
    //     } else {
    //         if ($(this).scrollTop() > 55) {
    //             $('.fixed-top').addClass('shadow').css('top', -25);
    //         } else {
    //             $('.fixed-top').removeClass('shadow').css('top', 0);
    //         }
    //     } 
    // });
$(window).scroll(function () {
    if ($(this).scrollTop() > 55) {
        $('.fixed-top').addClass('scrolled');
    } else {
        $('.fixed-top').removeClass('scrolled');
    }
});
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

  // Active on click
  document.addEventListener('DOMContentLoaded', function() {
    // Combine both selectors
    const items = document.querySelectorAll('.service-item, .dropdown-toggle');

    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            items.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


    document.querySelectorAll('.dropdown-toggle').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Hide all content divs
            document.querySelectorAll('.content').forEach(function(div) {
                div.style.display = 'none';
            });
            
            // Show the target div
            var targetId = this.getAttribute('data-target');
            var targetDiv = document.getElementById(targetId);
            if (targetDiv) {
                targetDiv.style.display = 'block';
            }
        });
    });


    document.querySelectorAll('.service-item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Hide all content divs
            document.querySelectorAll('.content').forEach(function(div) {
                div.style.display = 'none';
            });
            
            // Show the target div
            var targetId = this.getAttribute('data-target');
            var targetDiv = document.getElementById(targetId);
            if (targetDiv) {
                targetDiv.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.dropdown-toggle').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the target submenu
            var targetSubmenu = document.querySelector(this.getAttribute('href'));
    
            // Close any open submenus except the one that's being clicked
            document.querySelectorAll('.submenu.show').forEach(function(submenu) {
                if (submenu !== targetSubmenu) {
                    submenu.classList.remove('show');
                }
            });
    
            // Toggle the target submenu
            if (targetSubmenu) {
                targetSubmenu.classList.toggle('show');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Select all menu and submenu items
        var serviceItems = document.querySelectorAll('.service-item');
    
        // Add click event listener to each item
        serviceItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Scroll to the div with id="modules"
                document.querySelector('#modules').scrollIntoView({
                    behavior: 'smooth' // Smooth scroll
                });
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Select all menu and submenu items
        var serviceItems = document.querySelectorAll('.dropdown-toggle');
    
        // Add click event listener to each item
        serviceItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Scroll to the div with id="modules"
                document.querySelector('#modules').scrollIntoView({
                    behavior: 'smooth' // Smooth scroll
                });
            });
        });
    });

    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);



