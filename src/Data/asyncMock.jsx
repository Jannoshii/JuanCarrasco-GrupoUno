export const products = [
    {
        id: 1,
        name: 'XD',
        price: 29.99,

        stock: 20,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'XD',
        price: 300,
        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: 'XD',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: 'XD',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 5,
        name: 'XD',
        price: 299,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 6,
        name: 'XD',
        price: 300,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 7,
        name: 'XD',
        price: 310,

        stock: 5,
        img: 'https://korde.cl/wp-content/uploads/2024/01/short-deportivo-korde-negro-2024.jpg',
        category: 'buzo',
        sizes: ['S', 'M', 'L']
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