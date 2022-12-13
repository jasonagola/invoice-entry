import React from 'react';
import ItemVariation from './ItemVariation';
import './Item.css'

function Item(props) {
    console.log(props.itemName)
    console.log(props.variations)

    return (
        <div className="itemBox">
            <p>Item Name: {props.itemName}</p>
            <p>Varations:</p>
            {Object.values(props.variations).map((variation) => {
                console.log(variation)
                return <ItemVariation
                    variationName={variation.itemVariationData.name}
                    variationSKU={variation.itemVariationData.sku}
                >
                </ItemVariation>
            })}
        </div>

    )
}

export default Item