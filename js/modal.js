export const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal .close'),
  open: function () {
    modal.wrapper.classList.add('open')
  },
  close: function () {
    modal.wrapper.classList.remove('open')
  }
}

modal.btnClose.onclick = function () {
  modal.close()
}


window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
  if (event.key == 'Escape') {
    modal.close()
  }
}