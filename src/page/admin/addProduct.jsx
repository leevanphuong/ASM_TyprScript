import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const addProduct = (props) => {
    const naviga= useNavigate()
    const [input, setInput]= useState()
    const onchange=(e)=>{
        const {name, value}= e.target
        setInput({...input, [name]:value})
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        props.onAdd(input)
        if(onSubmit){
            naviga('/admin')
            setTimeout(function(){
                alert('Them san pham thanh cong')
            },1000)
        }
        
    }
    
  return (
    <div>
        <form action="" onSubmit={onSubmit}>
            Nhap ten san pham 
            <input type="text"  name='name' onChange={onchange}/>
            <br />
            Nhap mo ta 
            <input type="text" name='desc' onChange={onchange} />
            <br />
            Nhap hinh anh 
            <input type="text" name='image' onChange={onchange} />
            <br />
            <button type='submit'>Them </button>
        </form>
    </div>
  )
}

export default addProduct