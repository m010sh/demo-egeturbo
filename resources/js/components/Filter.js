import React, { useState, useEffect } from 'react';
import axios from "axios";

import FilterBlock from "./FilterBlock";

const Filter = () => {
    const [manufacturers, setManufacturers] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [phoneTypes, setPhoneTypes] = useState([]);

    useEffect(() => {
        axios.get('/api/manufacturers').then(response => {
            setManufacturers(response.data)
        });
        axios.get('/api/platforms').then(response => {
            setPlatforms(response.data)
        });
        axios.get('/api/types').then(response => {
            setPhoneTypes(response.data)
        });
    }, []);

    return (
        <div className="sticky-top">
            <FilterBlock items={manufacturers} title="Производители" name="manufacturers"/>
            <FilterBlock items={platforms} title="Платформа" name="platforms"/>
            <FilterBlock items={phoneTypes} title="Тип" name="types"/>
        </div>
    );
}

export default Filter;
