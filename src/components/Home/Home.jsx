import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-banner">
                <div className="hero-content">
                    <h1>ROPA DEPORTIVA</h1>
                    <h2>ALTO RENDIMIENTO</h2>
                    <Link to="/products" className="cta-button">
                        Comprar Ahora
                    </Link>
                </div>
            </div>
            <section className="categories">
                <h2 className="section-title">Nuestras Categorías</h2>
                <div className="categories-container">
                    <div className="category-card">
                        <img src="https://sparta.cl/media/wysiwyg/Ropa-Running-Sparta.jpeg" alt="Running" />
                        <h3>Running</h3>
                    </div>
                    <div className="category-card">
                        <img src="https://static.oysho.net/assets/public/e309/3d67/029c4ecb828f/e4aae516642b/M0112254409-b/M0112254409-b.jpg?ts=1729203869651" alt="Training" />
                        <h3>Training</h3>
                    </div>
                    <div className="category-card">
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/530088/01/mod01/fnd/CHL/w/1000/h/1000/fmt/png" alt="Yoga" />
                        <h3>Sport</h3>
                    </div>
                </div>
            </section>
            <section className="benefits">
                <div className="benefits-container">
                    <div className="benefit-item">
                        <i className="fas fa-truck"></i>
                        <h3>Envío Gratis</h3>
                        <p>En compras mayores a $99</p>
                    </div>
                    <div className="benefit-item">
                        <i className="fas fa-medal"></i>
                        <h3>Calidad Premium</h3>
                        <p>Materiales de alta tecnología</p>
                    </div>
                    <div className="benefit-item">
                        <i className="fas fa-undo"></i>
                        <h3>Devolución Garantizada</h3>
                        <p>30 días para cambios</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;