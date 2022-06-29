const headers = document.querySelectorAll('.item__header');
const buttons = document.querySelectorAll('.item__button');

headers.forEach(element => {
    element.addEventListener('click', () => {
        const parent = element.parentNode;
        parent.classList.add('item_active')
    })
});

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        const parent = element.parentNode;
        if (parent.classList.contains('item_active')) {
            parent.classList.remove('item_active');
        } else {
            parent.classList.add('item_active')
        }
    });
});