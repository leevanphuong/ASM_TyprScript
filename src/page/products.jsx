import React, { useEffect, useState } from 'react'

const products = (props) => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        setdata(props.product)
    },[props])
  return (
    <div>
    <div className='container'>
    <div className='row justify-content-md-center'>
    {
        data.map((item)=>{
            return <div key={item.id} className="col-4 ">
                 <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <a href={'/products/'+item.id}><img src={item.image} alt="" /></a>
            </div>
        })
    }
     </div>
    </div>
</div>
  )
}

export default products