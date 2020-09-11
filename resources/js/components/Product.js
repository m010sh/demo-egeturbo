import React from 'react'

export default ({product}) => {
    const {image, model, manufacturer, platform, type, price} = product;

    return (
        <div className="col-md-4">
            <div className="card border border-dark rounded-0">
                <img className="card-img-top" src={image} alt="Product image"/>
                <div className="card-header">
                    <div>Производитель: <b>{manufacturer.name}</b></div>
                    <small>{model}</small>
                    <div>Платформа: {platform.name}</div>
                    <div>Тип: {type.name}</div>
                </div>
                <div className="card-body">Цена: <b>{price} руб.</b></div>
            </div>
        </div>
    );
};
