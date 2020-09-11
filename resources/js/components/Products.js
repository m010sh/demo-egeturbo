import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Product from "./Product";
import { getProducts } from "../redux/actions";

const Products = ({products, getProducts}) => {
    useEffect(() => {
        getProducts()
    }, [])

    if (!products.length) {
        return <p className="text-center">Товаров нет</p>
    }
    return (
        <div className="row no-gutters">
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
    );
}

const mapStateToProps = state => ({
        products: state.products.products
    }
)

const mapDispatchToProps = {
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
