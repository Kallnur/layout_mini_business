export const stopScroll = () => {
    if(document.body.style.overflow === 'hidden') document.body.style.overflow = ''
    else document.body.style.overflow = 'hidden';
}

export const toggleClass = (openBtn, closeBtn, toggleElement, activeClass) => {

    const addClassActive = () => {
        toggleElement.classList.add(activeClass);
        stopScroll();
    };
    const removeClassActive = () => {
        toggleElement.classList.remove(activeClass);
        stopScroll();
    };

    openBtn?.addEventListener('click', addClassActive);
    closeBtn?.addEventListener('click', removeClassActive);
}

export const clearClass = (arr, className) => {
    Array.from(arr).forEach(item => {
        item.classList.remove(className)
    })
}