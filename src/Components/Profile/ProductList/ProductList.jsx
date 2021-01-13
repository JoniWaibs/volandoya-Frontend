import React from 'react'
import NavBar from '../../Extras/NavBar'
import SubNav from '../../Extras/SubNav'
import Example from './Example'
import AddProduct from './AddProduct'
import List from './List'


const ProductList = () => {
    return (
        <div>
            <NavBar/>
            <SubNav/>
            <Example/>
            <AddProduct/>
            <List/>
        </div>
    )
}

export default ProductList
