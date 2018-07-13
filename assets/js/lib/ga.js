export const enhancedEcommerce = {
    addToCart(product, nextUrl) {
        dataLayer.push({
            'event': 'addToCart',
            'ecommerce': {
                'currencyCode': 'USD',
                'add': {                                // 'add' actionFieldObject measures.
                    'products': [product]
                }
            },
            'eventCallback': () => {
                window.location = nextUrl;
            }
        });
    }
};