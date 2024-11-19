
export const products = [
    {
        id: 1,
        name: 'Musculosa De Hombre',
        price: 29.99,

        stock: 20,
        img: 'https://purecotton.cl/wp-content/uploads/2022/12/Musculosa-Hombre-Beige-Ola-color-copia.jpg',
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
        sizes: ['S', 'M', 'L','XL']
    },
    {
        id: 3,
        name: 'Poleron Deportivo',
        price: 310,

        stock: 5,
        img: 'https://www.roly.cl/media/catalog/product/cache/5bbf92fd90264cfd0d036d0d3ff79904/c/a/ca1113_melbourne_poleron_hombre_negro_frente_18.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L','XL']
    },
    {
        id: 4,
        name: 'Corta Viento',
        price: 310,

        stock: 5,
        img: 'https://dojiw2m9tvv09.cloudfront.net/12958/product/7014-1-blk8711.jpg',
        category: 'short',
        sizes: ['S', 'M', 'L','XL']
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


