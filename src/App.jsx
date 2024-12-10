import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import ItemDetail from "./components/Itemdetail/Itemdetail.jsx";

function App() {
    const [cart, setCart] = useState([]); // Estado para el carrito
    const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito

    const handleAddToCart = (product) => {
        setCart([...cart, product]); // Agregar producto al carrito
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId)); // Eliminar producto del carrito
    };

    const toggleCart = () => {
        setShowCart(!showCart); // Alternar la visibilidad del carrito
    };

    return (
        <Router>
            <div className="App">
                <Header toggleCart={toggleCart} /> {/* Pasar la función toggleCart */}
                <Navbar cartCount={cart.length} />
                <BrowserRouter>
                    <h1 className="app-title">Lista de Juguetes</h1>
                    <Category categories={categories} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path='/products/:productId' element={<ItemDetail />} />
                        <Route path="/" element={<ItemList items={items} onAdd={handleAddToCart} />} />
                        <Route path="/detalles/:id" element={<ProductDetails items={items} />} />
                        <Route path="/about" element={<About />} /> {/* Ruta para About */}
                        <Route path="/contact" element={<Contact />} /> {/* Ruta para Contact */}
                    </Routes>
                    {showCart && <Cart cartItems={cart} onRemove={handleRemoveFromCart} />} {/* Mostrar el carrito si showCart es true */}
                    <About />
                </BrowserRouter>
                <Footer />
            </div>
        </Router>
    );
}

export default App;