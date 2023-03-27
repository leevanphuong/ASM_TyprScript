import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const update = (props) => {
    const {id}= useParams()
    const naviga= useNavigate()
    const [data, setdata]= useState({})
    useEffect(()=>{
        const Newproduct = props.product.find((item) => item.id ==id )
        setdata(Newproduct)
    })
    const [input, setInput]= useState({})
    const onchange=(e)=>{
        const {name, value}= e.target
        setInput({...input, [name]:value})
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        props.onUpdate({...data,...input})
        naviga('/admin')
        if(onSubmit){
            setTimeout(function(){
                alert('Cap nhap san pham thanh cong')
            },500)
        }
    }
  return (
    <div>
        <form action="" onSubmit={onSubmit}>
            Nhap ten san pham 
            <input type="text" defaultValue={data?.name}  name='name' onChange={onchange}/>
            <br />
            Nhap mo ta 
            <input type="text" defaultValue={data?.desc}  name='desc' onChange={onchange} />
            <br />
            Nhap hinh anh 
            <input type="text" defaultValue={data?.image}  name='image' onChange={onchange} />
            <br />
            <button type='submit'>Them </button>
        </form>
    </div>
  )
}

export default update