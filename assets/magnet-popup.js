document.addEventListener("DOMContentLoaded", () => {
    const {setCookie,checkCookie} = window.CookieClass;

    const selectors = {
        popup: '#magnetPopup',
        popupClose: '[data-close-popup]',
        timeoutPopup: '#timeoutPopup',
    }

    const COOKIE_NAME = `show-magnet-popup`

    const timeoutPopup = document.querySelector(selectors.timeoutPopup);

    function showPopup(selector) {
        const popup = document.querySelector(selector);

        const addProduct = sessionStorage.getItem('addProduct');
        const cartOpen = sessionStorage.getItem('cartOpen');

        if (addProduct || cartOpen) {
            return;
        }

        if (popup && !checkCookie(COOKIE_NAME)) {
            setCookie(COOKIE_NAME, "true", 30);
            popup.classList.add('open');
            document.body.classList.add('overflow-hidden');
        }
    }

    function closePopup(selector) {
        const popup = document.querySelector(selector);

        if (!popup) return;

        popup.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
    }

    document.addEventListener('click', (e) => {
        const popupClose = e.target.closest(selectors.popupClose);
        const popupBg = e.target === document.querySelector(selectors.popup);

        if (!popupClose && !popupBg) return;

        e.preventDefault();

        closePopup(selectors.popup);
    });

    function initPopup() {
        document.addEventListener('mouseleave', function (e) {
            if(timeoutPopup && timeoutPopup.classList.contains('open')) {
                return;
            }

            showPopup(selectors.popup);
        });
    }

    document.addEventListener('click', (e) => {
        const addToCart = e.target.closest('.product-form__submit');

        if (addToCart) {
            sessionStorage.setItem('addProduct', 'true');
        }
    });

    if (location.pathname === '/cart') {
        sessionStorage.setItem('cartOpen', 'true');
    }


    setTimeout(() => {
        initPopup();
    }, 5000);
});