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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
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
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
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
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
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
    document.addEventListener('DOMContentLoaded', function () {
        // Combine both selectors
        const items = document.querySelectorAll('.service-item, .dropdown-toggle');

        items.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                items.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });


    document.querySelectorAll('.dropdown-toggle').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all content divs
            document.querySelectorAll('.content').forEach(function (div) {
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


    document.querySelectorAll('.service-item').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all content divs
            document.querySelectorAll('.content').forEach(function (div) {
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

    document.querySelectorAll('.dropdown-toggle').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target submenu
            var targetSubmenu = document.querySelector(this.getAttribute('href'));

            // Close any open submenus except the one that's being clicked
            document.querySelectorAll('.submenu.show').forEach(function (submenu) {
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

    document.addEventListener('DOMContentLoaded', function () {
        // Select all menu and submenu items
        var serviceItems = document.querySelectorAll('.service-item');

        // Add click event listener to each item
        serviceItems.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default anchor behavior

                // Scroll to the div with id="modules"
                document.querySelector('#modules').scrollIntoView({
                    behavior: 'smooth' // Smooth scroll
                });
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Select all menu and submenu items
        var serviceItems = document.querySelectorAll('.dropdown-toggle');

        // Add click event listener to each item
        serviceItems.forEach(function (item) {
            item.addEventListener('click', function (e) {
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



// 
const text = "Simplify your school management operations with the best School ERP software!";
const speed = 60;       // typing speed (ms)
const delay = 1500;     // pause after complete text
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            document.getElementById("typeText").innerHTML = "";
            i = 0;
            typeWriter();
        }, delay);
    }
}

typeWriter();



// const cards = document.querySelectorAll(".module-card");
// const panels = document.querySelectorAll(".erp-panel");

// cards.forEach(card => {
//     card.addEventListener("click", () => {

//         // card active state
//         cards.forEach(c => c.classList.remove("change-ylw", "active", "text-white"));
//         card.classList.add("change-ylw", "active", "text-white");

//         // show correct panel
//         panels.forEach(p => p.classList.add("d-none"));
//         document.getElementById(card.dataset.panel).classList.remove("d-none");
//     });
// });

// document.querySelectorAll(".erp-panel").forEach(panel => {

//     const buttons = panel.querySelectorAll("[data-box]");
//     const boxes = panel.querySelectorAll(".content-box");

//     buttons.forEach(btn => {
//         btn.addEventListener("click", () => {

//             buttons.forEach(b => b.classList.remove("active"));
//             boxes.forEach(box => box.classList.add("d-none"));

//             btn.classList.add("active");
//             panel.querySelector("#" + btn.dataset.box).classList.remove("d-none");
//         });
//     });

// });
/* ---------------------------------------------------------
   ERP MODULES SECTION LOGIC
--------------------------------------------------------- */
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const erpContainer = document.getElementById("erpModules");
        const erpDetailsContainer = document.getElementById("erpDetails");
        const navbar = document.querySelector(".navbar");

        if (!erpContainer) return;

        const cards = erpContainer.querySelectorAll(".module-card");
        const panels = erpDetailsContainer
            ? erpDetailsContainer.querySelectorAll(".erp-panel")
            : [];

        let interval = null;
        let index = 0;
        let autoSwitch = true;
        let wasDesktop = window.innerWidth >= 992;

        /* -------------------------
           SMART SCROLL
        --------------------------*/
        function smartScrollTo(element) {
            if (!element) return;

            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const rect = element.getBoundingClientRect();
            const absoluteTop = rect.top + window.pageYOffset;

            window.scrollTo({
                top: Math.max(absoluteTop - navbarHeight - 16, 0),
                behavior: "smooth"
            });
        }

        /* -------------------------
           PANEL AUTO SWITCH
        --------------------------*/
        function startAutoSwitch(panel) {
            clearInterval(interval);
            index = 0;
            autoSwitch = true;

            const buttons = panel.querySelectorAll("[data-box]");
            const boxes = panel.querySelectorAll(".content-box");
            if (!buttons.length) return;

            function activate(i) {
                buttons.forEach(btn =>
                    btn.classList.remove("bg-primary", "text-white", "active")
                );
                boxes.forEach(box => box.classList.add("d-none"));

                const btn = buttons[i];
                if (!btn) return;

                btn.classList.add("bg-primary", "text-white", "active");
                const target = panel.querySelector("#" + btn.dataset.box);
                if (target) target.classList.remove("d-none");
            }

            activate(0);

            interval = setInterval(() => {
                if (!autoSwitch) return;
                index = (index + 1) % buttons.length;
                activate(index);
            }, 3000);

            buttons.forEach((btn, i) => {
                btn.onclick = () => {
                    autoSwitch = false;
                    clearInterval(interval);
                    activate(i);
                };
            });
        }

        /* -------------------------
           RESET
        --------------------------*/
        function clearActive() {
            cards.forEach(c =>
                c.classList.remove("change-ylw", "active", "text-white")
            );

            panels.forEach(p => p.classList.add("d-none"));

            erpContainer
                .querySelectorAll(".mobile-detail")
                .forEach(d => d.remove());

            clearInterval(interval);
        }

        /* -------------------------
           DESKTOP VIEW
        --------------------------*/
        function showDesktop(card) {
            clearActive();
            card.classList.add("change-ylw", "active", "text-white");

            const panel = document.getElementById(card.dataset.panel);
            if (panel) {
                panel.classList.remove("d-none");
                startAutoSwitch(panel);
            }
        }

        /* -------------------------
           FIND LAST CARD IN SAME ROW (🔥 KEY FIX)
        --------------------------*/
        function getLastCardInRow(card) {
            const col = card.closest("[class*='col']");
            if (!col) return card;

            const row = col.parentElement;
            const cols = Array.from(row.children);

            const top = col.offsetTop;

            return cols
                .filter(c => c.offsetTop === top)
                .slice(-1)[0] || col;
        }

        /* -------------------------
           MOBILE VIEW (DYNAMIC)
        --------------------------*/
        function showMobile(card, isAuto = false) {
            clearActive();
            card.classList.add("change-ylw", "active", "text-white");

            const panel = document.getElementById(card.dataset.panel);
            if (!panel) return;

            const clone = panel.cloneNode(true);
            clone.classList.remove("d-none");
            clone.classList.add("mobile-detail");
            clone.removeAttribute("id");

            const insertAfter = getLastCardInRow(card);
            insertAfter.after(clone);

            startAutoSwitch(clone);

            if (!isAuto) {
                smartScrollTo(card);
            }
        }

        /* -------------------------
           CLICK EVENTS
        --------------------------*/
        cards.forEach(card => {
            card.addEventListener("click", () => {
                if (window.innerWidth >= 992) {
                    showDesktop(card);
                } else {
                    showMobile(card, false);
                }
            });
        });

        /* -------------------------
           AUTO OPEN FIRST
        --------------------------*/
        function autoOpenFirstCard() {
            if (!cards.length) return;
            if (erpContainer.querySelector(".module-card.active")) return;

            setTimeout(() => {
                if (window.innerWidth >= 992) {
                    showDesktop(cards[0]);
                } else {
                    showMobile(cards[0], true);
                }
            }, 100);
        }

        /* -------------------------
           RESIZE HANDLING
        --------------------------*/
        function handleResize() {
            const isDesktop = window.innerWidth >= 992;
            if (isDesktop === wasDesktop) return;

            wasDesktop = isDesktop;
            const activeCard = erpContainer.querySelector(".module-card.active");

            if (activeCard) {
                isDesktop
                    ? showDesktop(activeCard)
                    : showMobile(activeCard, true);
            } else {
                autoOpenFirstCard();
            }
        }

        /* -------------------------
           INIT
        --------------------------*/
        autoOpenFirstCard();
        window.addEventListener("resize", handleResize);
    });
})();






// Mobile App Section
// Carousel Logic
// Scope everything inside a DOMContentLoaded wrapper or a block
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileSection = document.getElementById('mobile-section');
        if (!mobileSection) return;

        let currIdx = 0;
        let autoScrollInterval;
        let isAutoOpening = false;
        let wasMobile = window.innerWidth < 768;

        const items3d = mobileSection.querySelectorAll('.carousel-3d-item');
        const mobileCards = mobileSection.querySelectorAll('.module-card');
        const masterDetail = mobileSection.querySelector('#master-detail');
        const dynamicContent = mobileSection.querySelector('#dynamic-content');
        const navbar = document.querySelector('.navbar');

        /* -------------------------
           SMART SCROLL
        --------------------------*/
        function smartScrollTo(element) {
            if (!element) return;

            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const rect = element.getBoundingClientRect();
            const absoluteTop = rect.top + window.pageYOffset;
            const safePadding = 16;

            window.scrollTo({
                top: Math.max(absoluteTop - navbarHeight - safePadding, 0),
                behavior: 'smooth'
            });
        }

        /* -------------------------
           3D CAROUSEL
        --------------------------*/
        function move3D(dir) {
            currIdx = (currIdx + dir + items3d.length) % items3d.length;
            update3D();
        }

        function update3D() {
            items3d.forEach((item, i) => {
                item.classList.remove('active', 'prev', 'next');

                if (i === currIdx) item.classList.add('active');
                else if (i === (currIdx - 1 + items3d.length) % items3d.length)
                    item.classList.add('prev');
                else if (i === (currIdx + 1) % items3d.length)
                    item.classList.add('next');
            });
        }

        function startAutoScroll() {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => move3D(1), 3000);
        }

        window.manualMove = (dir) => {
            clearInterval(autoScrollInterval);
            move3D(dir);
            startAutoScroll();
        };

        /* -------------------------
           TOUCH / SWIPE
        --------------------------*/
        let startX = 0;
        let endX = 0;
        const swipeThreshold = 50;

        function handleSwipe() {
            const diff = endX - startX;
            if (Math.abs(diff) < swipeThreshold) return;

            clearInterval(autoScrollInterval);
            diff < 0 ? move3D(1) : move3D(-1);
            startAutoScroll();
        }

        mobileSection.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        mobileSection.addEventListener('touchend', e => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        mobileSection.addEventListener('mousedown', e => startX = e.clientX);
        mobileSection.addEventListener('mouseup', e => {
            endX = e.clientX;
            handleSwipe();
        });

        /* -------------------------
           CONTENT RENDER
        --------------------------*/
        function renderCard(card, shouldScroll) {
            const isMobile = window.innerWidth < 768;
            const slotId = card.dataset.smSlot;
            const lgSlotId = card.dataset.lgSlot;
            const panelId = card.dataset.panel;

            const sourceElement = mobileSection.querySelector(
                `#panel-source #${panelId}`
            );

            const content = sourceElement
                ? sourceElement.innerHTML
                : 'Details coming soon...';

            const targetSlot = mobileSection.querySelector(
                `#${isMobile ? slotId : lgSlotId}`
            );

            mobileCards.forEach(c =>
                c.classList.remove('active', 'change-ylw', 'text-white')
            );

            card.classList.add('active', 'change-ylw', 'text-white');

            if (!targetSlot) return;

            targetSlot.appendChild(masterDetail);
            dynamicContent.innerHTML = content;
            masterDetail.style.display = 'block';

            if (isMobile && shouldScroll) {
                smartScrollTo(card);
            }
        }

        /* -------------------------
           CARD CLICK
        --------------------------*/
        mobileCards.forEach(card => {
            card.addEventListener('click', () => {
                renderCard(card, !isAutoOpening);
            });
        });

        /* -------------------------
           AUTO OPEN FIRST
        --------------------------*/
        function autoOpenFirstApp() {
            if (!mobileCards.length) return;
            if (mobileSection.querySelector('.module-card.active')) return;

            isAutoOpening = true;
            setTimeout(() => {
                renderCard(mobileCards[0], false);
                isAutoOpening = false;
            }, 100);
        }

        /* -------------------------
           RESIZE FIX (KEY PART)
        --------------------------*/
        function handleResize() {
            const isMobile = window.innerWidth < 768;

            if (isMobile !== wasMobile) {
                wasMobile = isMobile;

                const activeCard = mobileSection.querySelector('.module-card.active');
                if (activeCard) {
                    renderCard(activeCard, false);
                }
            }
        }

        /* -------------------------
           INIT
        --------------------------*/
        update3D();
        startAutoScroll();
        autoOpenFirstApp();

        window.addEventListener('resize', handleResize);
    });
})();





/* ---------------------------------------------------------
   GLOBAL INTERSECTION OBSERVER LAZY LOAD
--------------------------------------------------------- */
(function () {
    let observer;

    function initObserver() {
        if (!("IntersectionObserver" in window)) return;

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const el = entry.target;

                // IMG lazy load
                if (el.tagName === "IMG") {
                    el.src = el.dataset.src;
                    el.classList.add("loaded");
                }

                observer.unobserve(el);
            });
        }, {
            rootMargin: "150px",
            threshold: 0.1
        });
    }

    function observeLazyElements(root = document) {
        if (!observer) initObserver();

        const lazyEls = root.querySelectorAll("img.lazy:not(.loaded)");
        lazyEls.forEach(el => observer.observe(el));
    }

    // Initial page load
    document.addEventListener("DOMContentLoaded", () => {
        observeLazyElements();
    });

    // Observe dynamically added content
    const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                observeLazyElements(node);
            });
        });
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
})();


















