const button = document.querySelector('#noteButton');
const promise = document.querySelector('#promise');

if (button && promise) {
    button.addEventListener('click', () => {
        const visible = promise.classList.toggle('show');
        const icon = button.querySelector('span');

        if (icon) {
            icon.textContent = visible ? '♡' : '↓';
        }

        button.setAttribute('aria-expanded', String(visible));
    });
}
