import React from 'react';

const Livro = () => {
    return (
        <main className="principal">
            <div className='pag.livro'>
                <h2>{Livro.titulo}</h2>
                <div className='livro'>
                    <img
                        src = {"/imagens/capas" +Livro.id + ".jpg"}
                        alt = "/thumbnail da capa do livro..."
                    />
                    <ui>
                        <li>ISBN:{livro.isbn}</li>
                        <li>Ano: {livro.ano}</li>
                        <li>Páginas: {livro.paginas}</li>
                        <li>Preço: {livro.preco}</li>
                    </ui>
                    <hr>
                       <h3>Descrição do livro</h3>
                       <p>{livro.descricao}</p>
                    </hr>
                </div>            
            </div>
        </main>
    );
}

export default Livro;
