import React from 'react'
import ItemVariants from '../item-variants/item-variants.component'


function ProductGroup(props) {
    const {items } = props
    console.log("items is ", items);
    return (
        <div>
            {items.map((item, index) => {
                console.log("An item is ", item)
                return (
 <ItemVariants key={index} itemVariants={item.items}/> 
                )
            })}
        </div>
    )
}



export default ProductGroup

