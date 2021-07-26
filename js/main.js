'use strict';

const input = document.querySelector('.search-input'),
    liItems = document.querySelectorAll('li');

const search = () => {
    let inputValue = input.value.toLowerCase();

    for (let i = 0; i < liItems.length; i++) {
        let liItem = liItems[i],
            liContent = liItem.textContent.toLowerCase();

        liContent.indexOf(inputValue) !== -1 ? liItem.style.display = 'block' : liItem.style.display = 'none';
    }
}

input.addEventListener('keyup', search);