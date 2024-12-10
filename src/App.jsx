import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import ItemDetail from "./components/Itemdetail/Itemdetail.jsx";

function App() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <Router>
            <div className="App">
                <Header toggleCart={toggleCart} />
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
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />}
                    </Routes>
                    {showCart && <Cart cartItems={cart} onRemove={handleRemoveFromCart} />}
                    <About />
                </BrowserRouter>
                <Footer />
            </div>
        </Router>
    );
}

export default App;