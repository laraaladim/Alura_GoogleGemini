function pesquisar() {
    // Esta função é responsável por realizar a pesquisa e exibir os resultados na página.
    console.log("clicou"); // Log para depuração: verifica se a função foi chamada.

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");


    // Inicializa a string que irá armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre os dados e constrói o HTML para cada resultado
    for(let dado of dados) {
        // Cria um novo elemento div para cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> ${dado.titulo}</a>
            </h2>
            <p class="descricao.meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
    }
// Atribui o HTML gerado à seção de resultados
section.innerHTML = resultados;
}