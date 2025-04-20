import state from './state.js';
import { controls } from './elements.js';
import * as actions from './actions.js'
import * as element from './elements.js'
import { updateDisplay } from './timer.js';

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") { return } // se não for um botão de ação, não faz nada

    actions[action]()
  })
}

export function setMinutes() {
  element.minutes.addEventListener('focus', () => {
    element.minutes.textContent = ""
  })

  element.minutes.onkeypress = (event) => /\d/.test(event.key) // se o valor digitado for um número, então ele adiciona o número no elemento minutes

  element.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent // pega o valor do elemento minutes
    time = time > 60 ? 60 : time // se o valor for maior que 60, então ele coloca 60
    
    state.minutes = time // atualiza o valor do state com o novo valor
    state.seconds = 0 // zera os segundos

    updateDisplay() // atualiza o display com os novos valores
    element.minutes.removeAttribute('contenteditable') // remove o atributo contenteditable do elemento minutes
  })
}