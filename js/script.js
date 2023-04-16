import { modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notNumber } from './utils.js'

let form = document.querySelector('form')
let inputWeight = document.querySelector('#impWeight')
let inputHeight = document.querySelector('#impHeight')

form.onsubmit = function (event) {
  event.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  let weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotNumber) {
    alertError.open()
    return
  }

  alertError.close()

  let result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  let message = `Seu IMC é de ${result}`
  modal.message.innerHTML = message
  modal.open()
}

inputWeight.oninput = function () {
  alertError.close()
}

inputHeight.oninput = function () {
  alertError.close()
}