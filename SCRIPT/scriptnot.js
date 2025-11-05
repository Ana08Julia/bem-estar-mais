const botaoDark = document.getElementById('mudar-dark');

if (localStorage.getItem('modo') === 'dark') {
  document.body.classList.add('dark');
  botaoDark.textContent = '☀️ Modo Claro';
} else {
  botaoDark.textContent = '🌙 Modo Escuro';
}

botaoDark.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('modo', 'dark');
    botaoDark.textContent = '☀️ Modo Claro';
  } else {
    localStorage.setItem('modo', 'light');
    botaoDark.textContent = '🌙 Modo Escuro';
  }
});