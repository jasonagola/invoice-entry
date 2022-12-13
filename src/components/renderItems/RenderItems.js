import React from 'react'
import Item from './Item'

function RenderItems(props) {
    // console.log(props.response)
    // console.log(responseStatus)
    // console.log(`The Response Status is: ${response.responseStatus}`)
    if (props.responseStatus) {     
        return (
            <div>
                <h2>CAN YOU BELIEVE THIS IS SUPPOSED TO BE A LIST</h2>
                {Object.values(props.response).map((item) => {
                    return <Item itemName={item.name} variations={item.variations}></Item>
                })}
                    
            </div>
        )    
    }

    return (
        <div>AWAITING RESULTS!!!!!!</div>
    )
}

export default RenderItems




{/* <Item itemName={item.name} variations={item.variations}/> */}