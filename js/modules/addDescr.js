'use strict';


const buy = document.querySelectorAll('.card__buy'),
      description = document.querySelectorAll('.card__currentdescr');

function addDescription (blockActive) {

    buy.forEach((elem, i=0) => {
        if (elem.parentElement.classList.contains(blockActive)) {
            elem.style.display = 'none';
            description[i].style.display = 'block';
        } else {
            elem.style.display = '';
            description[i].style.display = 'none';
        }
    });    
}



export {addDescription};