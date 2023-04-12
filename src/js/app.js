import Popover from '../components/Popover';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');
  const popoverFactory = new Popover();

  button.addEventListener('click', () => {
    if (document.querySelector('.popover-wrapper')) {
      popoverFactory.removePopover();
      return false;
    }
    popoverFactory.popoverСreation();
    popoverFactory.getCoordButton();
    popoverFactory.showPopover();
    return popoverFactory.getCoordPopover();
  });
});
