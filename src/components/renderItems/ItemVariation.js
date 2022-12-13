import React from 'react'

function ItemVariation(props) {
    console.log(props)

    return (
        <div>
            <p>Name of Variation:{props.variationName}</p>
            <p>{props.variationSKU}</p>
        </div>
    )
}

export default ItemVariation