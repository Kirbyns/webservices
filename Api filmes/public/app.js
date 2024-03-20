fetch('http://localhost:8080/filmes') //função para buscar e exivir os dados dos filmes
    .then(response => response.json()) //connvertendo a resposta para Json
    .then(data => { //manipulando os dados recebidos
        const filmesList = document.getElementById('filmes-list'); 
        data.forEach(filme => { //iterando sobre os filmes recebidos
            const filmeDiv = document.createElement('div');
            filmeDiv.classList.add('card-group','col-lg-4', 'col-md-2', 'mb-4');
            filmeDiv.style.width = "18rem"; 
            filmeDiv.innerHTML = `
            
            <div class="card mt-4">
                <img class="card-img-top" src="${filme.foto}" alt="${filme.nome}">
                <div class="card-body">
                    <h2 class ="card-title">${filme.nome}</h2>
                    <p><strong>Descrição:</strong> ${filme.descricao}</p>
                    <p><strong>Elenco:</strong> ${filme.elenco}</p>
                    </div>
            </div>
            `;
            
            filmesList.appendChild(filmeDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar os filmes:', error));