import React from 'react'
import api from "../../config/axios"

function Categoria({ match: { params: { id="" } } }) {
    const [data,setData] =  React.useState([])
  
    React.useEffect(()=>{
      const fetchCategorias = async () => {
        console.log(id)
        const result = await api.get(`/categorias/${id}`)
        if(id === ""){
            setData(result.data)
        }else{
            setData([result.data])        
        }
      }
      fetchCategorias()
    }, [])
  
    return (
      <div className="items">
        {data && data.map(item => (
          <div className='item'>
            <span>{`ID: ${item.id}`}</span>
            <span>{`Nome: ${item.nome}`}</span>

          </div>
        ))}
      </div>
    );
  }

export default Categoria