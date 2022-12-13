import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { getSearchedItems } from './features/searchResults/searchResultSlice'
import './searchResults.css'


function SearchResults() {
    const dataArray = ["Cheese", "Salami", "Pepperoni", "Mushrooms", "Onions", "Artichokes", "Peaches", "Goat Cheese", "Espresso", "Vodka"]
    const [searchResults, setSearchResults] = useState()

    const results = useSelector(getSearchedItems)
    // console.log(results)

    return (
        <div id='searchWindow'>
            <div id="searchResults">
                <table>
                    <tbody>
                        {dataArray.map((child, idx) => {
                            return (
                            <tr key={child} id={idx}>{child}<button>Add</button></tr>
                            
                            )
                        })}
                    </tbody>                    
                </table>

            </div>
        </div>
    )
}

export default SearchResults