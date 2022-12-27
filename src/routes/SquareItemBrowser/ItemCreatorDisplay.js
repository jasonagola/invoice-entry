import React, {useState} from 'react';
import ItemCreator from './createNewItem';
import './ItemCreatorDisplay.css'

function ItemCreatorDisplay(props) {
    const newItems = props.newItems

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
                <button onClick={addItem}>Add Item</button>
                {itemFields.map((input, index) => {
                    return (
                        <div key={index} className='itemBox'>
                            <ItemCreator/>
                            <button onClick={() => removeItem(index)}>Delete Item</button>
                        </div>
                    )
                })}  
        </div>
    )
}

export default ItemCreatorDisplay