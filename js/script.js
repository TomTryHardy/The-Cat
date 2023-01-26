'use strict';

import {choosing} from './modules/choose';
import {disabled} from './modules/disable';
import {selected} from './modules/select';
import {addDescription} from './modules/addDescr';
import {buyBtn} from './modules/buyButton';



window.addEventListener('DOMContentLoaded', () => {

    choosing('card__active', 'blockActive');
    disabled('card__disable', 'card__active', 'blockActive');
    selected('card__active');
    addDescription('blockActive');
    buyBtn('card__active', 'blockActive');
    
   
});