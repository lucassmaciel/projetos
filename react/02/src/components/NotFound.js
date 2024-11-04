import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='principal'>
            <h2>404 - Página não encontrada</h2>
            <p>
                Ops! A página que você está procurando não existe.
                <Link to="/"> Ir para homepage</Link>
            </p>
        </main>
    );
}

export default NotFound;