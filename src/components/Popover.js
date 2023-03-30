export default class Popover {
    constructor() {
        this.popover;
        this.button = document.querySelector('.btn');
        this.buttonCoord;
    }

    popoverСreation() {
        // создание контента для поповера
        this.popover = document.createElement('div');
        this.popover.classList.add('popover-wrapper');

        const titlePopover = document.createElement('h3');
        titlePopover.classList.add('popover-header');
        titlePopover.textContent = 'Popover title';

        const bodyPopover = document.createElement('div');
        bodyPopover.classList.add('popover-body');
        bodyPopover.textContent ="And here's some amazing content. It's very engaging. Right?";

        // добавление контента в поповер
        this.popover.appendChild(titlePopover);
        this.popover.appendChild(bodyPopover)
    }

    getCoordButton(){
        const elemCoord = this.button.getBoundingClientRect();
    
        this.buttonCoord = {
          top: elemCoord.top + window.pageYOffset,
          left: elemCoord.left - window.pageXOffset
        }
    }

    getCoordPopover() {
        this.popover.style.top = `${ this.buttonCoord.top - this.popover.offsetHeight - 10}px`;
        this.popover.style.left = `${ this.buttonCoord.left + this.button.offsetWidth / 2 - this.popover.offsetWidth / 2}px`
    }

    showPopover() {
        document.body.appendChild(this.popover)
    }

    removePopover(){
        this.popover.remove();
    }

}