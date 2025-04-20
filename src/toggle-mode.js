let darkMode = true // true = dark mode, false = light mode
const buttonToggle = document.getElementById('toggle-mode') // Seleciona o botão de alternância de modo

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light') // Alterna a classe 'light' no elemento raiz do documento (tag html)

  const mode = darkMode ? 'light' : 'dark' // Define o modo atual
  event.currentTarget 
    .querySelector('span').textContent = `${mode} mode ativado!` // Atualiza o texto do botão

    darkMode = !darkMode // Alterna o valor de darkMode
}) 