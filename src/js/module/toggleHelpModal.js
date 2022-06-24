import { toggleClass } from "../utils/defFunc";

export const toggleHelpModal = () => {
    const openModalBtn  = document.querySelector('.home-about__btn');
    const closeModalBtn = document.querySelector('.modal-help__close-btn');
    const modalHelp     = document.querySelector('.modal-help');

    const activeClass = 'modal-help--active';

    toggleClass(openModalBtn, closeModalBtn, modalHelp, activeClass);
}