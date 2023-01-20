const { Client, Environment }  = require('square');
const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Production
});


// app.get('/listItems', async (req, res) => {
const listAllItems = async (req, res) => {
    try {
        const response = await client.catalogApi.listCatalog();
        console.log(response.result)
        res.send(response.result)
    } catch(error) {
        console.log(error)
    }
}

// app.get('/searchItem', async (req, res) => {
const searchItems = async (req, res) => {
    try {
        const searchTerm = req.query.search
        console.log(searchTerm)
        console.log(`Searching with "${searchTerm}" from input field`)
        const response = await client.catalogApi.searchCatalogItems({
            textFilter: searchTerm,
            productTypes: [
                'REGULAR'
            ]
        });
        // const resposneString = JSON.stringify(response).result
        const responseString = JSONBig.stringify(response.result.items)
        res.send(responseString)
        console.log(response)
        
    } catch(error) {
        console.log(error)
    }
}

const createItem = async (req, res) => {
    const {itemData, variations, idempotencyKey} = req.query.item
    
    const newItemVariations = []

    variations.map(variation => {
        newItemVariations.push({
            type: 'ITEM_VARIATION',
            id: `${variation.name} + ${sku}`,
            itemVariationData: {
                name: variation.variationName,
                sku: variation.variationSku,
                pricingType: 'FIXED_PRICING',
                priceMoney: {
                    amount: variation.variationPrice,
                    currency: 'USD'
                },
                trackInventory: true,
                sellable: true,
                stockable: true
            }   
        })
    })
    
    ////Create Catalog Item to upsert from item Data and variation requests. 
    const newItemObject = {
        idempotencyKey: itemidempotencyKey,
        object: {
            type: 'ITEM',
            id: `#${itemData.itemName}`,
            itemData: {
                name: itemData.itemName,
                abbreviation: 'ITM',
                taxIds: [
                    '6F3TXA7X54MMILCJO3MHLJZI'
                  ],
                variations: newItemVariations
            }
        }
    }

    console.log(newItemObject)

    try {
        const response = await client.catalogApi.upsertCatalogObject(newItemObject)
        console.log(response.result)
        res.send(response.result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    listAllItems, 
    searchItems, 
    createItem

}