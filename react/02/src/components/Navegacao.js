import React from 'react';
import { NavLink } from 'react-router-dom';

let LinkCorrente ={
    color: '#027399'
}
const Navegacao= () =>{
    return (
        <ul>
            <li>
                <NavLink to="/" style={LinkCorrente}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/frontend" style={LinkCorrente}>FrontEnd</NavLink>
            </li>
            <li>
                <NavLink to="/programacao" style={LinkCorrente}>Programação</NavLink>
            </li>
            <li>
                <NavLink to="/design" style={LinkCorrente}>Design</NavLink>
            </li>
            <li>
                <NavLink to="/catalogo" style={LinkCorrente}>Catálogo</NavLink>
            </li>
        </ul>
    );
}

export default Navegacao;