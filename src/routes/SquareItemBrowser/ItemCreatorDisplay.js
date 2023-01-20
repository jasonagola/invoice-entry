import React, {useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import { getLoadedInvoice } from '../../store/loadedInvoice/loadedInvoiceSlice';
import Variations from './Variations';
import './ItemCreatorDisplay.css'

function ItemCreatorDisplay(props) {
    const items = Object.values(useSelector(getLoadedInvoice))

    
    
    useEffect(() => {  
        setItemFields(items)
    }, [])

    const [itemFields, setItemFields] = useState([])


    const handleFormChange = (index, event) => {
        let data = [...itemFields];
        data[index][event.target.name] = event.target.value;
        setItemFields(data)
    }

    const addItem = () => {
        let newItem = {
            itemName: '',
        }
        setItemFields([...itemFields, newItem])
    }

    const removeItem = (index) => {
        let data = [...itemFields];
        data.splice(index, 1)
        setItemFields(data)
    }

    const submit = (index, e) => {
        console.log(itemFields[index])
    }

    const getItemVariations = (variationState) => {
        return variationState
    }


    ////move variation state up to this componetnt and then pass callback functions to the child component 
    
    return (
        <div className="itemCreatorDisplay">
                
                {itemFields.map((input, index) => {
                    return (
                        <div key={index} className='itemBox'>
                            <Variations item={input}/>
                            <button 
                                className="itemDeleteButton"
                                onClick={() => removeItem(index)}>Delete Item
                            </button>
                           
                        </div>
                    )
                })}
                <button className="addItemButton" onClick={addItem}>Add Item</button>  
        </div>
    )
}

export default ItemCreatorDisplay