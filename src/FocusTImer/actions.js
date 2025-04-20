import state from './state.js';
import * as timer from './timer.js';
import * as element from './elements.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown()
}

export function set() {
  element.minutes.setAttribute('contenteditable', true);
  element.minutes.focus();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay(); // reseta o timer quando o usuário clica no botão de reset
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on');
}