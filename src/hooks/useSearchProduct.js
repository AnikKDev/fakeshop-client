import React, { useEffect, useState } from 'react';

const useSearchProduct = () => {
    // declaring auto suggestions with search
    const [products, setProducts] = useState([]);
    const [texts, setTexts] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = products.filter(product => {
                const regEx = new RegExp(`${text}`, "gi");
                return product.title.match(regEx);
            })
        }
        // console.log(matches)
        setSuggestions(matches)
        setTexts(text);

    };
    return { texts, onChangeHandler, suggestions };
};

export default useSearchProduct;