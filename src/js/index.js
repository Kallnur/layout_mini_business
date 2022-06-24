import { toggleMobNavbar } from './module/toggleMobNavbar.js'
import '../sass/main.sass'
import { toggleHelpModal } from './module/toggleHelpModal.js';
import { validateForm } from './module/validate.js';

const btnHelpForm = document.querySelector('.modal-help__btn');

toggleMobNavbar();
toggleHelpModal();

btnHelpForm?.addEventListener('click', validateForm);
toggleMobNavbar()
