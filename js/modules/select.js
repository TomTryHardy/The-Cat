'use strict';

const card = document.querySelectorAll('.card__item');

function selected (active) {
    
    card.forEach(item => {
        let itemIndex = item.getAttribute('data-header'),
        currentItem = document.querySelector(itemIndex);

        item.addEventListener('mouseenter', () => {
            if (item.classList.contains(active)) {
                currentItem.textContent = 'Котэ не одобряет?';
                currentItem.style.color = '#E62E7A';
            } else {
                currentItem.textContent = 'Сказочное заморское яство';
                currentItem.style.color = '';
            }
            
            if (document.body.offsetWidth < 992) {
                currentItem.textContent = 'Сказочное заморское яство';
                currentItem.style.color = '';
            }
        });
        item.addEventListener('mouseleave', () => {
            if (item.classList.contains(active)) {
                currentItem.textContent = 'Сказочное заморское яство';
                currentItem.style.color = '';
            } else {
                currentItem.textContent = 'Сказочное заморское яство';
                currentItem.style.color = '';
            }
        }); 
    });
}


export {selected};