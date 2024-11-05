import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import ItemDetail from "./components/Itemdetail/Itemdetail.jsx";

function App() {
    return (
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                </Routes>
                <Footer />

        </BrowserRouter>
    );
}

export default App;