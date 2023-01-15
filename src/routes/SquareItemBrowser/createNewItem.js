import React, { useState } from 'react';
import uuid from 'react-uuid';
import './createNewItem.css'

function ItemCreator(props) {
  const item = props.item
  const [itemDescription, setItemDescription] = useState(props.item.description)

  const [variationFields, setVariationFields] = useState([
    {
      itemVariationName:'',
      itemVariationPrice:'',
      itemVariationSKU: ''
    }
  ])

  const handleFormChange = (index, event) => {
    let data = [...variationFields];
    console.log(data)
    data[index][event.target.name] = event.target.value;
    setVariationFields(data)
  }

  const addVariation = () => {
    let newField = {
      itemVariationName:'',
      itemVariationPrice:'',
      itemVariationSKU: ''
    }
    setVariationFields([...variationFields, newField])
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(variationFields)
  }

  const removeVariation = (index) => {
    let data = [...variationFields];
    data.splice(index, 1)
    setVariationFields(data)
  }

  const handleDescriptionChange = (e) => {
    setItemDescription(e.target.value)
  }

  return (
    <div id={`${item.sku}-item`}>
        <form className="itemContainer" onSubmit={submit}>
          {/* <label htmlFor="itemName">Item Name:</label> */}
          <input 
            type="text" 
            className="itemName" 
            name="itemName" 
            value={item.description} 
            placeholder='Item Name'
            onChange={handleDescriptionChange}
            />
            
          

          {variationFields.map((input, index) => {
            return (
              <div key={index} className="variationContainer">
                <label htmlFor="itemVariationName">Item Variation Name:</label>
                <input 
                  type="text" 
                  className="itemVariationName" 
                  name="itemVariationName" 
                  placeholder='Item Variation Name'
                  defaultValue={item.description}
                  onChange={event => handleFormChange(index, event)}
                />

                <label htmlFor="itemVariationPrice">Item Variation Price:</label>
                <input 
                  type="number" 
                  className="itemVariationPrice" 
                  name="itemVariationPrice" 
                  placeholder='Price'
                  defaultValue={item.msrp}
                  onChange={event => handleFormChange(index, event)}
                />

                <label htmlFor="itemVariationSKU">Item Variation SKU:</label>
                <input 
                  type="text" 
                  className="itemVariationSKU" 
                  name="itemVariationSKU" 
                  placeholder='SKU'
                  value={item.sku}
                  onChange={event => handleFormChange(index, event)}
                />

                <button 
                  className='deleteVariationButton' 
                  onClick={() => removeVariation(index)}
                >
                  Remove Variation
                </button>

              </div>
              
            )
          }
          )}
          <button className='addVariationButton' onClick={addVariation}>Add Variation</button>

          <button 
            className='verifyItemButton'
            onClick={submit}>Item Looks Good!</button>
        </form>
    </div>
  )
}


export default ItemCreator



// try {
//     const response = await client.catalogApi.upsertCatalogObject({
//       idempotencyKey: '802d34e9-3ceb-4f63-b7ae-a0633f7a50b6',
//       object: {
//         type: 'ITEM',
//         id: '#New_item',
//         itemData: {
//           name: 'New Item',
//           abbreviation: 'ITM',
//           variations: [
//             {
//               type: 'ITEM_VARIATION',
//               id: '#New_item_variation',
//               itemVariationData: {
//                 name: 'Item Variation',
                  // sku: 'jhkjh',
//                 pricingType: 'FIXED_PRICING',
//                 priceMoney: {
//                   amount: 9999,
//                   currency: 'USD'
//                 }
//               }
//             }
//           ]
//         }
//       }
//     });
  
//     console.log(response.result);
//   } catch(error) {
//     console.log(error);
//   }