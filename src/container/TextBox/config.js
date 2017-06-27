export const inputConfig = {
    'inputs': [
        { key: 'price', type: 'currency', label: 'Price', sign: '$', position: 'before', defaultValue: 30, toFixed: 2, step: 1, min: 0, max: 100 },
        { key: 'discount', type: 'percent', label: 'Price Discount', sign: '%', position: 'after', defaultValue: 5, toFixed: 0, step: 1, min: -100, max: 100 },
        { key: 'weight', type: 'weight', label: 'Weight', sign: 'kg', position: 'after', defaultValue: 0, toFixed: 2, step: 1, min: 0, max: 50 },
        { key: 'inStock', type: 'amount', label: 'Currently in Stock', defaultValue: 17, toFixed: 2, step: 1, min: -10, max: 1000 }
    ]
};
