import React, { useEffect, useState } from 'react'

const dashboard = (props) => {
    const [data, setdata]= useState([])
    useEffect(()=>{
        setdata(props.product)
    },[props])
    const DeleteItem =(id)=>{
        const check = confirm('Ban co muon xoa')
        if(check){
            props.onRemove(id)
        }
    }
  return (
    <div>
        <div className='container'>
        <button><a href="/admin/add">Them san pham </a></button>
        <div className='row justify-content-md-center'>
        {
            data.map((item)=>{
                return <div key={item.id} className="col-4 ">
                     <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <img src={item.image} alt="" />
                    <br />
                    <button onClick={()=> DeleteItem(item.id)}>Xoa</button>
                    <button><a href={'/admin/update/'+item.id}>Cap nhap</a></button>
                </div>
            })
        }
         </div>
        </div>
    </div>
  )
}

export default dashboard