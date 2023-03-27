import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../api/products'

const productDetail = () => {
    const { id } = useParams()
    const [product, setproduct] = useState({})
    useEffect(() => {
        getOne(id).then(({ data }) => setproduct(data))
    },[])
    return (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <img src={product.image} alt="" />
        </div>
    )
}

export default productDetail