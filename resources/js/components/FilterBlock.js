import React from 'react';

import FilterCheckbox from "./FilterCheckbox";

const FilterBlock = ({items, title, name}) => {

    return (
        <div className="p-3">
            <h4>{title}</h4>
            <div className="pb-3 border-bottom">
                {
                    items.map((item) => (
                        <FilterCheckbox key={item.id} item={item} name={name}/>
                    ))
                }
            </div>
        </div>
    );
}

export default FilterBlock;
