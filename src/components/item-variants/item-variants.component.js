import React from 'react'


function ItemVariants(props) {
    const {itemVariants } = props
    return (
        <div>
            {itemVariants.map((itemVariant, index) => {
                return (
                <li key={index}>{itemVariant.name}</li>
                )
            })}
        </div>
    )
}



export default ItemVariants