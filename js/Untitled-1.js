/* ---------------------------------------------------------
   ERP MODULES SECTION LOGIC
--------------------------------------------------------- */
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const erpContainer = document.getElementById("erpModules");
        const erpDetailsContainer = document.getElementById("erpDetails");
        const navbar = document.querySelector(".navbar"); // 🔑 your navbar

        if (!erpContainer) return;

        const cards = erpContainer.querySelectorAll(".module-card");
        const panels = erpDetailsContainer
            ? erpDetailsContainer.querySelectorAll(".erp-panel")
            : [];

        let interval = null;
        let index = 0;
        let autoSwitch = true;

        /* -------------------------
           HELPER: SMART SCROLL
        --------------------------*/
        function smartScrollTo(element) {
            if (!element) return;

            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            const rect = element.getBoundingClientRect();
            const absoluteTop = rect.top + window.pageYOffset;

            const safePadding = 16; // adjust if needed

            const target =
                absoluteTop -
                navbarHeight -
                safePadding;

            window.scrollTo({
                top: Math.max(target, 0),
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

                if (buttons[i]) {
                    buttons[i].classList.add("bg-primary", "text-white", "active");
                    const targetBox = panel.querySelector("#" + buttons[i].dataset.box);
                    if (targetBox) targetBox.classList.remove("d-none");
                }
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
            erpContainer.querySelectorAll(".mobile-detail").forEach(d => d.remove());
        }

        /* -------------------------
           DESKTOP
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
           MOBILE
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

            const col = card.closest(".col-6") || card.parentElement;
            const row = col.parentElement;
            const cols = [...row.children];
            const idx = cols.indexOf(col);

            const perRow = 2;
            const insertAfter =
                cols[Math.min(idx - (idx % perRow) + perRow - 1, cols.length - 1)];

            insertAfter.after(clone);
            startAutoSwitch(clone);

            // ✅ SMART SCROLL ONLY ON REAL CLICK
            if (!isAuto) {
                smartScrollTo(card);
            }
        }

        /* -------------------------
           EVENTS
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
           AUTO OPEN FIRST CARD
        --------------------------*/
        function autoOpenFirstCard() {
            if (!cards.length) return;
            if (erpContainer.querySelector(".module-card.active")) return;

            setTimeout(() => {
                if (window.innerWidth >= 992) {
                    showDesktop(cards[0]);
                } else {
                    showMobile(cards[0], true); // 🚫 no scroll
                }
            }, 100);
        }

        autoOpenFirstCard();
        window.addEventListener("resize", autoOpenFirstCard);
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

        const items3d = mobileSection.querySelectorAll('.carousel-3d-item');
        const mobileCards = mobileSection.querySelectorAll('.module-card');
        const masterDetail = mobileSection.querySelector('#master-detail');
        const dynamicContent = mobileSection.querySelector('#dynamic-content');
        const navbar = document.querySelector('.navbar');

        /* -------------------------
           SMART SCROLL (TOP ALIGNED)
        --------------------------*/
        function smartScrollTo(element) {
            if (!element) return;

            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const rect = element.getBoundingClientRect();
            const absoluteTop = rect.top + window.pageYOffset;
            const safePadding = 16;

            const target = absoluteTop - navbarHeight - safePadding;

            window.scrollTo({
                top: Math.max(target, 0),
                behavior: 'smooth'
            });
        }

        /* -------------------------
           3D CAROUSEL LOGIC
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
           TOUCH / SWIPE SUPPORT
        --------------------------*/
        let startX = 0;
        let endX = 0;
        const swipeThreshold = 50; // px

        function handleSwipe() {
            const diff = endX - startX;

            if (Math.abs(diff) < swipeThreshold) return;

            clearInterval(autoScrollInterval);

            if (diff < 0) {
                // Swipe left → next
                move3D(1);
            } else {
                // Swipe right → previous
                move3D(-1);
            }

            startAutoScroll();
        }

        mobileSection.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        mobileSection.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        /* Optional: mouse drag (desktop swipe) */
        mobileSection.addEventListener('mousedown', (e) => {
            startX = e.clientX;
        });

        mobileSection.addEventListener('mouseup', (e) => {
            endX = e.clientX;
            handleSwipe();
        });

        /* -------------------------
           CARD INTERACTION
        --------------------------*/
        mobileCards.forEach(card => {
            card.addEventListener('click', function () {
                const isMobile = window.innerWidth < 768;
                const slotId = this.dataset.smSlot;
                const lgSlotId = this.dataset.lgSlot;
                const panelId = this.dataset.panel;

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

                this.classList.add('active', 'change-ylw', 'text-white');

                if (targetSlot) {
                    targetSlot.appendChild(masterDetail);
                    dynamicContent.innerHTML = content;
                    masterDetail.style.display = 'block';

                    if (isMobile && !isAutoOpening) {
                        smartScrollTo(this);
                    }
                }
            });
        });

        /* -------------------------
           AUTO OPEN FIRST CARD
        --------------------------*/
        function autoOpenFirstApp() {
            if (!mobileCards.length) return;
            if (mobileSection.querySelector('.module-card.active')) return;

            isAutoOpening = true;

            setTimeout(() => {
                mobileCards[0].click();
                isAutoOpening = false;
            }, 100);
        }

        /* -------------------------
           INIT
        --------------------------*/
        update3D();
        startAutoScroll();
        autoOpenFirstApp();

        window.addEventListener('resize', autoOpenFirstApp);
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