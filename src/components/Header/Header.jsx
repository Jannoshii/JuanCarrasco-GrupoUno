import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <a href="/">
                Ropa Deportiva
            </a>
            </div>
            <ul className="nav-links">
                <li><a href="#Home">Categorias</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Header;

