function pesquisar() {
    // Obtém a sessão HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa e converte para minúsculas
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Inicializa um array para armazenar os resultados
    const resultados = [];
  
    // Itera sobre cada dado da lista de dados
    for (const dado of dados) {
      const titulo = dado.titulo.toLowerCase();
      const descricao = dado.descricao.toLowerCase();
      const tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente em algum dos campos
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados.push(`
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais</a>
          </div>
        `);
      }
    }
  
    // Se o array de resultados estiver vazio, exibe a mensagem "nada foi encontrado"
    if (resultados.length === 0) {
      resultados.push("<p>nada foi encontrado</p>");
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados.join('');
  }