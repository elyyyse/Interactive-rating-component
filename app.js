const form = document.querySelector('form');
const ratingContainer = document.querySelector('#rating-container');
const thanksContainer = document.querySelector('#ty-container');
const confMsg = document.querySelector('#conf-msg');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    for (const entry of data) {
        confMsg.innerText = `You selected ${entry[1]} out of 5`;
    }
    ratingContainer.classList.add('hidden');
    thanksContainer.classList.remove('hidden');
});