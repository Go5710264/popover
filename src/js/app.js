// TODO: write your code here
import Popover from '../components/Popover';

document.addEventListener('DOMContentLoaded', () => {
/*
весь код приложения внутри обработчика
данного события начнет работать после загрузки DOM
*/
  const button = document.querySelector('.btn');
  const popoverFactory = new Popover();

  button.addEventListener('click', () => {
    if(document.querySelector('.popover-wrapper')) {
      popoverFactory.removePopover();
      return false;
    };
    
    popoverFactory.popoverСreation(); // создание поповера
    popoverFactory.getCoordButton(); // координаты основного элемента
    popoverFactory.showPopover(); // отображение поповера на странице
    popoverFactory.getCoordPopover(); // создание координат поповера
  })
});
