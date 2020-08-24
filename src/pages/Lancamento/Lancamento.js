import React from 'react'
import api from "../../config/axios"

function Lancamento() {
    const [data,setData] =  React.useState([])
  
    React.useEffect(()=>{
      const fetchLancamentos = async () => {
        const result = await api.get('/lancamentos')
        setData(result.data)
      }
      fetchLancamentos()
    }, [])
  
    return (
      <div className="items">
        {data && data.map(item => (
          <div className='item'>
            <span>{`ID: ${item.id}`}</span>
            <span>{`Valor: ${item.valor}`}</span>
            <span>{`Origem: ${item.origem}`}</span>
            <span>{`Categoria: ${item.categoria}`}</span>
          </div>
        ))}
      </div>
    );
  }

export default Lancamento
