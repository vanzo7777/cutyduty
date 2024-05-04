class CookieClass {
    constructor() {}

    getCookie = (name) => {
        const regex = new RegExp(`(^| )${name}=([^;]+)`)
        const match = document.cookie.match(regex)
        if (match) {
            return match[2]
        }
    }

    checkCookie = (name) => {
        const popupShown = this.getCookie(name);

        return !!(popupShown && popupShown === "true");
    }

    setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.CookieClass = new CookieClass();
});

