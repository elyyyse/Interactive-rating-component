const checkRequiredField = (fields) => {
    return fields.some((field) => field.checked);
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = Array.from((form.querySelectorAll('input[type="radio"]')));
    if (!checkRequiredField(inputs)) {
        return alert('Please select a rating');
    }

    const confMsg = document.querySelector('.conf-msg');
    const data = new FormData(form);
    for (const entry of data) {
        confMsg.innerText = `You selected ${entry[1]} out of 5`;
    }

    const ratingContainer = document.querySelector('#rating-container');
    const thanksContainer = document.querySelector('#ty-container');
    ratingContainer.classList.add('hidden');
    thanksContainer.classList.remove('hidden');
});

