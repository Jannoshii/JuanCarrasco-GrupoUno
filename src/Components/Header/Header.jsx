import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                Logo Ropa
            </div>
            <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Header;