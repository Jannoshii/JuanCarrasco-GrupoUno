import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h4>Sobre Nosotros</h4>
                    <p>Somos una empresa dedicada a ofrecer productos de calidad.</p>
                </div>

                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: </p>
                    <p>Teléfono: </p>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Chonchi Chiloé. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
