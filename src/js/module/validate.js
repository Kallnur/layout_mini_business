import { clearClass, stopScroll } from "../utils/defFunc.js";

export const validateForm = (e) => {
    e.preventDefault();

    // Накидано за последние 10мин + стили...... ведутся работы

    const blockInputs = document.querySelectorAll('.modal-help__inp-block');
    const userName = document.querySelector('#helpModalName');
    const userEmail = document.querySelector('#helpModalEmail');
    const userMess = document.querySelector('#helpModalMess');
    const disBtn = document.querySelector('.modal-help__btn--load');
    const txtFoemDone = document.querySelector('.form-done');
    const modalHelp     = document.querySelector('.modal-help');

    if(userName.value.length >= 2 && userMess.value.length >= 5 && userEmail.value.length >= 5) {
        clearClass(blockInputs, 'modal-help__inp-block--warn');
        e.target.style.display = 'none';
        disBtn.style.display = 'block';

        setTimeout(() => {
            txtFoemDone.style.display = 'block';
        }, 2000)
        setTimeout(() => {
            txtFoemDone.style.display = 'none';
            e.target.style.display = 'block';
            disBtn.style.display = 'none';
            userName.value = '';
            userMess.value = '';
            userEmail.value = '';
            modalHelp.classList.remove('modal-help--active');
            stopScroll()
        }, 2500)
    }
    if(userName.value <= 0) {
        userName.parentNode.classList.add('modal-help__inp-block--warn')
    }
    if(userEmail.value <= 0) {
        userEmail.parentNode.classList.add('modal-help__inp-block--warn')
    }
    if(userMess.value <= 0) {
        userMess.parentNode.classList.add('modal-help__inp-block--warn')
    }
}