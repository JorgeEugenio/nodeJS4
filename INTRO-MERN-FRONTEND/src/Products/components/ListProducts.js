import React, { useState,useEffect }  from 'react'
import { Button } from 'react-bulma-components'
import { getProducts } from '../services/index'
import Loading from './Loading'

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    
    useEffect( ()=>{
        async function loadProducts (){
            const response = await getProducts()
            //console.log(response)
            if(response.status === 200){
                console.log(response.data.products);
                setProducts(response.data.products)
            }
        }
        loadProducts()
    },[])
    return (<>
    <Button onClick={()=>setIsLoading(!isLoading)}>update</Button>
            {isLoading 
            ? <Loading/>
            : 'Mostrar resultado fetch'}
            </>
    )
}


export default ListProducts