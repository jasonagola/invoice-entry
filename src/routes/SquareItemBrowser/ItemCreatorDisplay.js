import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { getLoadedInvoice } from '../../store/loadedInvoice/loadedInvoiceSlice';
import ItemCreator from './createNewItem';
import './ItemCreatorDisplay.css'

function ItemCreatorDisplay(props) {
    const items = Object.values(useSelector(getLoadedInvoice))
    console.log(items)
    
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

    const submit = (e) => {
        e.preventDefault();
        console.log(itemFields)
    }

    return (
        <div>
                
                {itemFields.map((input, index) => {
                    return (
                        <div key={index} className='itemBox'>
                            <ItemCreator item={input}/>
                            <button onClick={() => removeItem(index)}>Delete Item</button>
                        </div>
                    )
                })}
                <button className="addItemButton" onClick={addItem}>Add Item</button>  
        </div>
    )
}

export default ItemCreatorDisplay