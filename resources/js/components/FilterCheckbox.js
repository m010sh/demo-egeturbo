import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { changeFilter, getProducts } from "../redux/actions";

const FilterCheckbox = (props) => {
    const {item, name, allowedPlatforms, allowedTypes, changeFilter, getProducts} = props;
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        setDisabled(getDisabledStatus());
    })

    const updateFilter = (e) => {
        changeFilter({
            id: e.target.value,
            filterName: name,
        });

        getProducts();
    }

    const getDisabledStatus = () => {
        switch (name) {
            case 'platforms': {
                return !allowedPlatforms.includes(item.id);
            }
            case 'types': {
                return !allowedTypes.includes(item.id);
            }
            default:
                return false;
        }
    }

    return (
        <div className="form-check">
            <input className="form-check-input"
                   onChange={updateFilter}
                   type="checkbox"
                   disabled={disabled}
                   value={item.id}
                   name={`${name}[]`}/>
            <label className="form-check-label">{item.name}</label>
        </div>
    );
}


const mapStateToProps = state => {
    const { allowedPlatforms, allowedTypes } = state.products
    return {
        allowedPlatforms,
        allowedTypes,
    }
}

const mapDispatchToProps = {
    changeFilter,
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCheckbox);
