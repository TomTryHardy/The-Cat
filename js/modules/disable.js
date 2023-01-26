'use strict';

const card = document.querySelectorAll('.card__item'),
      description = document.querySelectorAll('.card__currentdescr');

function disabled (disable, active, blockActive) {
    card.forEach((item, i) => {
        let prod = ['фуа-гра', 'рыбой', 'курой'];
            
        if (i == 2) {
            if(!item.parentElement.classList.contains(disable)) {
                item.parentElement.classList.add(disable);
                item.classList.remove(active);
                description[i].textContent = `Печалька, с ${prod[i]} закончился.`;
                description[i].style.color = '#FFFF66';
            } else {
                item.classList.remove(active);
                item.parentElement.classList.remove(blockActive);
                item.parentElement.classList.remove(disable);
            }
            
        }
    });
}

disabled ('card__disable', 'card__active', 'blockActive');


export {disabled};