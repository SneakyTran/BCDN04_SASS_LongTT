let displayMenuOnScroll = () => {
    let menuELE = document.querySelector("header");
    const HIDE_POINT = 20;
    const HEADER_HEIGHT = menuELE.offsetHeight;
    if (document.documentElement.scrollTop == 0) {
        document.querySelector("header").style.top = "0";
        document.querySelector(".active").classList.remove("active");
    } else if (
        document.documentElement.scrollTop > HIDE_POINT &&
        document.documentElement.scrollTop < HEADER_HEIGHT * 3
    ) {
        document.querySelector("header").style.top = `${
            0 - menuELE.offsetHeight
        }px`;
    } else if (document.documentElement.scrollTop >= HEADER_HEIGHT * 3) {
        if (document.querySelector("#myHeader").classList.length == 0) {
            document.querySelector("#myHeader").classList.add("active");
        }
        document.querySelector("header").style.top = "0";
    }
};
window.onscroll = displayMenuOnScroll;
