import React from 'react'


function ProductGroup(props) {
    const {items } = props
    return (
        <div>
            {items.map((item) => {
                return (
                <li>{item.name}</li>
                )
            })}
        </div>
    )
}



export default ProductGroup

