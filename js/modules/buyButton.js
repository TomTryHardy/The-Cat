'use strict';

import {addDescription} from './addDescr';
import {selected} from './select';
import {disabled} from './disable';

const card = document.querySelectorAll('.card__item'),
      buyLink = document.querySelectorAll('.card__buy a');

function buyBtn (active, blockActive) {

    buyLink.forEach((link, i=0) => {
        link.addEventListener('click', function () {
            card[i].classList.add(active);
            card[i].parentElement.classList.add(blockActive);
            addDescription('blockActive');
            selected('card__active');
            
            if (i == 2) {
                disabled ('card__disabled', 'card__active', 'blockActive');
            }
            
        });
    });
}


export {buyBtn};