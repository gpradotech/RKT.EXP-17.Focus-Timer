import { controls } from './elements.js';
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") { return } // se não for um botão de ação, não faz nada

    actions[action]()
  })
}