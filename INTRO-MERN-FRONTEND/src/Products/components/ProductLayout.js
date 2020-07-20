import React from 'react'
import Header from './Header'
import AddButton from './AddButton';
import ListProducts from './ListProducts';


const ProductLayout = () => {
    
    return (
        <>
        <Header title="Products application"/>
        <AddButton/>
        {/* <Button onClick={()=>setIsLoading(!isLoading)}>update</Button> */}
        <ListProducts/>
        </>
    )
}

export default ProductLayout

