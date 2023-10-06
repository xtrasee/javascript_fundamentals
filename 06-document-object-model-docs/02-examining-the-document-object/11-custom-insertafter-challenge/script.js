function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)

}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const secondItem = document.querySelector('li:nth-child(2)');

// Our custom function
insertAfter(li, secondItem);