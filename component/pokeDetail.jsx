import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const PokeDetail = () => {

    const [searchParams]=useSearchParams();
    const id =searchParams.get("id");
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`

            useEffect(()=>{
                fetch(url)
                .then(res=>res.json())
                .then(output=>console.log(output))
            },[])
            
  return (
    <div>

    </div>
  )
}

export default PokeDetail
