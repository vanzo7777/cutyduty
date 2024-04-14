document.addEventListener("DOMContentLoaded", () => {
    const selectors = {
        timeoutPopup: '#timeoutPopup',
        popupClose: '[data-close-popup]',
        form: '[data-newsletter-form]',
        firstStep: '[data-first-step]',
        secondStep: '[data-second-step]',
        copyBtn: '[data-copy]',
        copyBtnInput: '[data-copy-input]',
        copyBtnTooltip: '[data-tooltip]',
    }

    const form = document.querySelector(selectors.form);
    const firstStep = document.querySelector(selectors.firstStep);
    const secondStep = document.querySelector(selectors.secondStep);

    const copyBtn = document.querySelector(selectors.copyBtn);
    const copyBtnInput = document.querySelector(selectors.copyBtnInput);
    const copyBtnTooltip = document.querySelector(selectors.copyBtnTooltip);

    const COOKIE_NAME = `show-${copyBtnInput.value}`

    function checkCookie() {
        const popupShown = getCookie(COOKIE_NAME);

        return !!(popupShown && popupShown === "true");
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const regex = new RegExp(`(^| )${name}=([^;]+)`)
        const match = document.cookie.match(regex)
        if (match) {
            return match[2]
        }
    }

    function showPopup(selector) {
        const popup = document.querySelector(selector);

        if (popup && !checkCookie()) {
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
        const popupBg = e.target === document.querySelector(selectors.timeoutPopup);

        if (!popupClose && !popupBg) return;

        e.preventDefault();

        closePopup(selectors.timeoutPopup);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // TODO SUBMIT LOGIC

        firstStep.classList.add('hidden');
        secondStep.classList.remove('hidden');
    });

    copyBtn.addEventListener('click', (e) => {
        copyBtnInput.select();
        copyBtnInput.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(copyBtnInput.value);

        copyBtnTooltip.classList.add('show');

        setTimeout(() => {
            copyBtnTooltip.classList.remove('show');
        }, 2000)
    });

    setTimeout(() => {
        showPopup(selectors.timeoutPopup)
    }, 15000);
});