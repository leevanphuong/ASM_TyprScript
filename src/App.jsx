import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { add, getAll, remove, update } from './api/products'
import HomePage from './page/homePage'
import Products from './page/products'
import ProductDetail from './page/productDetail'
import Dashboard from './page/admin/dashboard'
import AddProduct from './page/admin/addProduct'
import Update from './page/admin/update'


function App() {
  const [products, setproducts]= useState([])
  useEffect(()=>{
    getAll().then(({data})=> setproducts(data))
  },[])

  const removeItem=(id)=>{
    remove(id).then(()=> setproducts(products.filter((item)=> item.id !== id)))
  }
  const addItem=(product)=>{
    add(product).then(()=> setproducts([...products, product]))
  }
  const updateItem=(product)=>{
    update(product).then(()=> setproducts(products.map((item)=> item.id == product.id ? product : item)))
  }
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={< HomePage/>}/>
      <Route path='/products' element={< Products product={products} />} />
      <Route path='/admin' element={< Dashboard product={products} onRemove={removeItem} />} />
      <Route path='/products/:id' element={< ProductDetail/>}/>
      <Route path='/admin/add' element={<AddProduct onAdd={addItem} />} />
      <Route path='/admin/update/:id' element={<Update onUpdate={updateItem} product={products}  />} />
     </Routes>
    </div>
  )
}

export default App
