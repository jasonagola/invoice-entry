import React, { useState } from 'react';
import uuid from 'react-uuid';

function ItemCreator() {
  const [variationFields, setVariationFields] = useState([
    {
      itemVariationName:'',
      itemVariationPrice:'',
      itemVariationSKU: ''
    }
  ])

  const handleFormChange = (index, event) => {
    let data = [...variationFields];
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

////Item Variation Price needs to be fetched from QBP or by direct link

  return (
    <div>
        <form onSubmit={submit}>
          {/* <label htmlFor="itemName">Item Name:</label> */}
          <input type="text" id="itemName" name="itemName" placeholder='Item Name'/>

          {/* <label for="itemAbbreviation">Item Abbreviation:</label>
          <input type="text" id="itemAbbreviation" name="itemAbbreviation" value="ITM"/> */}
          
          {/* Category? */}
          <button onClick={addVariation}>Add Variation</button>

          {variationFields.map((input, index) => {
            return (
              <div key={index}>
                {/* <label htmlFor="itemVariationName">Item Variation Name:</label> */}
                <input 
                  type="text" 
                  id="itemVariationName" 
                  name="itemVariationName" 
                  placeholder='Item Variation Name'
                  onChange={event => handleFormChange(index, event)}
                />

                {/* <label htmlFor="itemVariationPrice">Item Variation Price:</label> */}
                <input 
                  type="number" 
                  id="itemVariationPrice" 
                  name="itemVariationPrice" 
                  placeholder='Price'
                  onChange={event => handleFormChange(index, event)}
                />

                {/* <label htmlFor="itemVariationSKU">Item Variation SKU:</label> */}
                <input 
                  type="text" 
                  id="itemVariationSKU" 
                  name="itemVariationSKU" 
                  placeholder='SKU'
                  onChange={event => handleFormChange(index, event)}
                />
                <button className='delete' onClick={() => removeVariation(index)}>Remove</button>

              </div>
            )
          }
          )}
          

          <button onClick={submit}>Item Looks Good!</button>
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