export const stopScroll = () => {
    if(document.body.style.overflow === 'hidden') document.body.style.overflow = ''
    else document.body.style.overflow = 'hidden';
    console.log('asdasd');
}

export const toggleClass = (openBtn, closeBtn, toggleElement, activeClass) => {

    const toggleClassActive = () => {
        toggleElement.classList.toggle(activeClass);
        stopScroll();
    };

    openBtn?.addEventListener('click', toggleClassActive);
    closeBtn?.addEventListener('click', toggleClassActive);
}

export const clearClass = (arr, className) => {
    Array.from(arr).forEach(item => {
        item.classList.remove(className)
    })
}