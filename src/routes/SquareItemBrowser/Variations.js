import React, { forwardRef, useImperativeHandle, useState } from 'react';
import uuid from 'react-uuid';
import './createNewItem.css'

function Variations(props) {
  
  const item = props.item
  const [itemData, setItemData] = useState(props.item)

  const [variationFields, setVariationFields] = useState([
    {
      itemVariationName:'',
      itemVariationPrice:item.msrp,
      itemVariationSKU: item.sku
    }
  ])

  const handleVariationChange = (index, event) => {
    let data = [...variationFields];
    console.log(data)
    console.log(event.target)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(variationFields)
    console.log(itemData)
  }

  const removeVariation = (index) => {
    let data = [...variationFields];
    data.splice(index, 1)
    setVariationFields(data)
  }

  const handleItemChange = (e) => {
    console.log(e.target)
  }

  return (
    <div id={`${item.sku}-item`}>
        <form className="itemContainer">
          {/* <label htmlFor="itemName">Item Name:</label> */}
          <input 
            type="text" 
            className="itemName"
            defaultValue={item.description}
            name="itemName" 
            placeholder='Item Name'
            onChange={(event) => handleItemChange(event)}
            />
            
          

          {variationFields.map((input, index) => {
            return (
              <div key={index} className="variationContainer">
                <div className='itemVariationName'>
                  <label htmlFor="itemVariationName">Item Variation Name</label>
                  <input 
                    type="text"
                    defaultValue={variationFields[index].description}
                    name="itemVariationName" 
                    placeholder='Item Variation Name'
                    onChange={event => handleVariationChange(index, event)}
                  />
                </div>
                
                <div className='itemDetails'>
                  <label htmlFor="itemVariationPrice">Item Variation Price:</label>
                  <input 
                    type="number"
                    defaultValue={variationFields[index].msrp}
                    className="itemVariationPrice" 
                    name="itemVariationPrice" 
                    placeholder='Price'
                    onChange={event => handleVariationChange(index, event)}
                  />

                  <label htmlFor="itemVariationSKU">Item Variation SKU:</label>
                  <input 
                    type="text" 
                    className="itemVariationSKU" 
                    name="itemVariationSKU" 
                    placeholder='SKU'
                    onChange={event => handleVariationChange(index, event)}
                  />
                </div>

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
        </form>
        <button 
          className='verifyItemButton'
          onClick={handleSubmit}
        >
            Item Looks Good!
        </button>
    </div>
  )
}


export default Variations

