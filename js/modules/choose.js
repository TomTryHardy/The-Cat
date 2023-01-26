'use strict';

import {addDescription} from './addDescr';
import {selected} from './select';
import {disabled} from './disable';

const card = document.querySelectorAll('.card__item'),
      block = document.querySelectorAll('.card__block');

function choosing (active, blockActive) {


    card.forEach((item, i=0) => {
        item.addEventListener('click', function () {

            if (!item.classList.contains(active)) {
                card[i].classList.add(active);
                block[i].classList.add(blockActive);
                selected('card__active');
            } else {
                card[i].classList.remove(active);
                block[i].classList.remove(blockActive);
            }

            if (i == 2) {
                disabled ('card__disabled','card__active', 'blockActive');
            }

            addDescription('blockActive');
        });
    });
}




export {choosing};