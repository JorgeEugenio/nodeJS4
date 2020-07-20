import React, { useState,useEffect }  from 'react'
import { Button } from 'react-bulma-components'
import Loading from './Loading'


const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const timeId =setInterval(() => {
            console.log('use efect!!');
            setIsLoading(!isLoading)
        }, 2000)
        /* setIsLoading(false) */
        return ()=>clearInterval(timeId)
    })

    
    useEffect(()=>{
        console.log('only once time');
    }, [isLoading])
    return (<>
    <Button onClick={()=>setIsLoading(!isLoading)}>update</Button>
            {isLoading 
            ? <Loading/>
            : 'Mostrar resultado fetch'}
            </>
    )
}


export default ListProducts