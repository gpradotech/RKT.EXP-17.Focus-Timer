import state from './state.js';
import * as element from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js';

export function countdown() {
  if(!state.isRunning) return  // se o timer não estiver rodando, não faz nada
  
  let minutes = Number(element.minutes.textContent) // pega o valor do elemento minutes e transforma em número
  let seconds = Number(element.seconds.textContent) // pega o valor do elemento seconds e transforma em número
  
  seconds-- // decrementa os segundos

  if(seconds < 0) { // se os segundos forem menores que 0, então ele zera os segundos e decrementa os minutos
    seconds = 59 // zera os segundos  
    minutes-- // decrementa os minutos
  }

  if (minutes < 0) {
    reset() // reseta os controladores quando os minutos forem menores que 0
    kitchenTimer.play() // toca o som do timer
    return // se os minutos forem menores que 0, então ele para a contagem regressiva
  }
  updateDisplay(minutes, seconds) // atualiza o display com os novos valores

  setTimeout(() => countdown(), 1000)

  console.log('contagem regressiva')
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes // se o valor for null, então ele pega o valor que está no state
  seconds = seconds ?? state.seconds // se o valor for null, então ele pega o valor que está no state

  element.minutes.textContent = String(minutes).padStart(2, '0') // converte o número para string e adiciona 0 a esquerda se o número for menor que 10
  element.seconds.textContent = String(seconds).padStart(2, '0') // converte o número para string e adiciona 0 a esquerda se o número for menor que 10


}