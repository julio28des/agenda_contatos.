document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioContato');
    const tbody = document.querySelector('tbody');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        const linha = document.createElement('tr');
        const celulaNome = document.createElement('td');
        const celulaTelefone = document.createElement('td');
        const celulaAcoes = document.createElement('td');
        const botaoExcluir = document.createElement('button');

        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        botaoExcluir.classList.add('excluir');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', function () {
            linha.remove();
        });

        celulaAcoes.appendChild(botaoExcluir);
        linha.appendChild(celulaNome);
        linha.appendChild(celulaTelefone);
        linha.appendChild(celulaAcoes);

        tbody.appendChild(linha);

        formulario.reset();
    });
});
