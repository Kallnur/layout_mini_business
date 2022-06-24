import { toggleMobNavbar } from './module/toggleMobNavbar.js'
import { toggleHelpModal } from './module/toggleHelpModal.js';
import { validateForm } from './module/validate.js';
import '../sass/main.sass'

const btnHelpForm = document.querySelector('.modal-help__btn');

toggleMobNavbar();
toggleHelpModal();

btnHelpForm?.addEventListener('click', validateForm);
toggleMobNavbar()
