_satellite.pushBlockingScript(function(event, target, $variables){
  /*
* DTM-Type: Sequential Javascript
* DTM-Name: SkyTags Helper Functions
*/

/**
*  Inspects a Prices entity to retrive a specified price type.
*/
var dtmUtils = window.dtmUtils = {}; 

dtmUtils.getPriceByFrequency = function(priceArray, frequency){
    return priceArray.filter( function(price){
        return price.frequency == frequency;
    }).shift()
};

/**
*  Returns a list of products ordered by id.
*/
dtmUtils.getSortedProduct = function(productArray, delimiter){
    var productSorted = productArray.sort( function(prodA, prodB){
        return prodA.id - prodB.id
    });
    
    if (delimiter){
        return productSorted.map(function(lineItem){
            if( lineItem.product ){
                return lineItem.product.id
            } else {
                lineItem.id
            }
        }).filter(function(id){
            return id 
        }).join(delimiter);
    } else {
        return productSorted;
    }
}; 

/** 
* Returns a list of products added in quote. 
*/
dtmUtils.getAddedQuoteProducts = function(quoteProducts){ 
    return quoteProducts.filter(function(quoteItem){
        return quoteItem.quantity > 0 
    });
};

/** 
* Returns a list of products added in quote. 
*/
dtmUtils.getRemovedQuoteProducts = function(quoteProducts){ 
    return quoteProducts.filter(function(quoteItem){
        return quoteItem.quantity < 0 
    });
};
});
