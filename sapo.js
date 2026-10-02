// 1. Seleciona os elementos do HTML que vamos usar
const sapo = document.getElementById('meuSapo');
const botao = document.getElementById('btnPular');

// 2. Função que faz o sapo pular
function fazerSapoPular() {
    // Se o sapo já estiver pulando, não faz nada (evita bugs de cliques rápidos)
    if (sapo.classList.contains('pular')) return;

    // Adiciona a classe que ativa a animação do CSS
    sapo.classList.add('pular');

    // Espera a animação acabar (0.5 segundos) e remove a classe para poder pular de novo
    setTimeout(() => {
        sapo.classList.remove('pular');
    }, 500);
}

// 3. Conecta as ações do usuário (Event Listeners) à nossa função de pular

// Clique no botão "Pular!"
botao.addEventListener('click', fazerSapoPular);

// Clique direto em cima do sapo
sapo.addEventListener('click', fazerSapoPular);

// Apertar a barra de espaço no teclado
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Impede a página de rolar para baixo ao apertar espaço
        fazerSapoPular();
    }
});