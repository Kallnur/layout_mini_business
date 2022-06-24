import { toggleClass } from "../utils/defFunc.js";

export const toggleMobNavbar = () => {
    const btnOpenNav  = document.querySelector('.hamburger');
    const btnCloseNav = document.querySelector('.mob-nav__close-btn');
    const mobNavbar = document.querySelector('.header__mob-nav');

    const activeClass = 'header__mob-nav--active';

    toggleClass(btnOpenNav, btnCloseNav, mobNavbar, activeClass);
}