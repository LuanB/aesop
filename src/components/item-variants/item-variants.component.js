import React from 'react'

// <li key={index}>{itemVariant.name}</li>
function ItemVariants(props) {
    const {itemVariants } = props

    return (
        <div>
            {itemVariants.map((itemVariant, index) => {
                return (
               <div>test</div>
                )
            })}
        </div>
    )
}



export default ItemVariants