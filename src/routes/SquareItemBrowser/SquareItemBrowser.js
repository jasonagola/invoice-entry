import React from 'react'
import ItemCreator from './createNewItem'
import ItemCreatorDisplay from './ItemCreatorDisplay'

function SquareItemBrowser() {
    return(
        <div>
            Square Item Browser
            <ItemCreatorDisplay/>
            {/* <ItemCreator/> */}
        </div>
        
    )
}

export default SquareItemBrowser