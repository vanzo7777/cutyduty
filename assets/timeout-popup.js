document.addEventListener("DOMContentLoaded", () => {
    const {setCookie,checkCookie} = window.CookieClass;

    const selectors = {
        timeoutPopup: '#timeoutPopup',
        magnetPopup: '#magnetPopup',
        popupClose: '[data-close-popup]',
        form: '[data-newsletter-form]',
        firstStep: '[data-first-step]',
        secondStep: '[data-second-step]',
        copyBtn: '[data-copy]',
        copyBtnInput: '[data-copy-input]',
        copyBtnTooltip: '[data-tooltip]',
    }

    const form = document.querySelector(selectors.form);
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button');
    const firstStep = document.querySelector(selectors.firstStep);
    const secondStep = document.querySelector(selectors.secondStep);

    const copyBtn = document.querySelector(selectors.copyBtn);
    const copyBtnInput = document.querySelector(selectors.copyBtnInput);
    const copyBtnTooltip = document.querySelector(selectors.copyBtnTooltip);

    const COOKIE_NAME = `show-${copyBtnInput.value}`

    function showPopup(selector) {
        const popup = document.querySelector(selector);

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
        const popupBg = e.target === document.querySelector(selectors.timeoutPopup);

        if (!popupClose && !popupBg) return;

        e.preventDefault();

        closePopup(selectors.timeoutPopup);
    });

    form.addEventListener('submit',  (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("email", emailInput.value);
        formData.append("newsletter", 'true');

        submitBtn.innerHTML = `<span class="loader"></span>`;
        submitBtn.disabled = true;

        fetch('https://script.google.com/macros/s/AKfycbyB3Vnt_d0mcytrl6nFkhBsgp21vbWXyBZVAuSMg70o3mXriT9DBivXRULvI71d1LeRaA/exec',
            {
                method: "POST",
                body: formData,
                mode: 'no-cors'
            }
        ).then(r => {
            firstStep.classList.add('hidden');
            secondStep.classList.remove('hidden');
        })
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
        const magnetPopup = document.querySelector(selectors.magnetPopup);

        if(magnetPopup && magnetPopup.classList.contains('open')) {
            return;
        }

        showPopup(selectors.timeoutPopup);
    }, 15000);
});