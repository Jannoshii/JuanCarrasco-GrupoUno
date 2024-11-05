import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Products from "./Components/Products/Products.jsx";
import ItemDetail from "./Components/Itemdetail/Itemdetail.jsx";

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