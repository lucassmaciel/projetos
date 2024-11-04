import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ livros }) => {
    return (
        <main>
            <h1>Home</h1>
            {/* Renderiza a lista de livros */}
            {livros.map((livro) => (
                <span key={livro.slug}>
                    <Link to={`/livro/${livro.slug}`} key={livro.id}>
                        <div className="detalhes">
                            <h3>{livro.titulo}</h3>
                            <p>{livro.descricao.slice(0, 130) + "..."}</p>
                            <p>Leia mais &gt;</p>
                        </div>
                    </Link>
                </span>
            ))}
        </main>
    );
}

export default Home;