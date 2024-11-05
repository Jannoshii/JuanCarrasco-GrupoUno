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
                        <img src="/ruta-imagen-running.jpg" alt="Running" />
                        <h3>Running</h3>
                    </div>
                    <div className="category-card">
                        <img src="/ruta-imagen-training.jpg" alt="Training" />
                        <h3>Training</h3>
                    </div>
                    <div className="category-card">
                        <img src="/ruta-imagen-yoga.jpg" alt="Yoga" />
                        <h3>Yoga</h3>
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