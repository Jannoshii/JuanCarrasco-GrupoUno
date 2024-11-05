export const products = [
    {
        id: 1,
        name: 'Musculosa De Hombre',
        price: 29.99,

        stock: 20,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'Camiseta para hombre de manga larga',
        price: 35,

        stock: 5,
        img: 'https://down-cl.img.susercontent.com/file/sg-11134201-23010-gt542ly401lvc6',
        category: 'Poleras',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: 'Pantalon Corta Viento',
        price: 310,

        stock: 5,
        img: 'https://doite.cl/media/catalog/product/1/7/17e06dd3c8244d469cbc951b59be1d.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: 'Corta Viento',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 5,
        name: 'Short De mujer',
        price: 299,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 6,
        name: 'Short De Hombre',
        price: 300,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 7,
        name: 'Zapatillas de training',
        price: 310,

        stock: 5,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/50265572_1/w=800,h=800,fit=pad',
        category: 'buzo',
        sizes: ['43', '44', '45']
    },
    {
        id: 8,
        name: 'XD',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 9,
        name: 'XD',
        price: 299,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 10,
        name: 'XD',
        price: 300,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 11,
        name: 'XD',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 12,
        name: 'XD',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};