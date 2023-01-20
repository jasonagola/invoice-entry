import axios from 'axios'

const backendUrl = process.env.REACT_APP_BACKEND_URL
const apiPath = '/square'

export async function searchItems(searchString) {
    const options = {
        method: 'GET', 
        url: backendUrl + apiPath + '/searchItems', 
        params: {
            search: searchString
        }
    };

    const responseBody = await axios.request(options)
    ///Can Retrieve Item Data for Each Item Listed
    const responseObject = {}
    // console.log(responseBody.data)
    Object.values(responseBody.data).forEach((item) => {
        responseObject[item.id] = item.itemData
    })
    return responseObject
}

//Create Catalog Object
export async function createNewCatalogObject() {
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/newCatalogItem',
        params: {}
    }
}