import React, { useEffect, useState } from 'react'
import Layout from '../ui/product-item/layout/Layout'
import { useParams } from 'react-router-dom'
import { ProductService } from '../../../services/product.servise'
import { IProduct } from '../../../types/product.interface'
import Button from '../ui/product-item/button/Button'
import Gallery from './gallery/Gallery'
import { useDispatch, useSelector } from 'react-redux'
import { TypeRootState } from '../../../store/store'
import { addToCart, removeCart } from '../../../store/slice'

const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState<IProduct>()
    const {items} = useSelector<TypeRootState>(state => state.cart)
    const dispatch = useDispatch()
    const isInCart = items.some(item => item.id === Number(id)) 
    useEffect(() => {
        const fetchProducts = async () => {
            const product = await ProductService.getProductsByID(id || '')
            setProduct(product)
        }
        fetchProducts()
      }, []) 

      if(!product){
        return <Layout>
          <div>Product not found</div>
        </Layout>
      }
  return (
    <Layout>
      <Gallery images={product?.images}/>
       <h1 style={{fontSize: "45px", marginBottom: "8px"}}>{product.title}</h1>
       <div style={{fontSize: "30px"}}>
          {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
          }).format(product.price)}
       </div>
      <Button onClick={() => isInCart? dispatch(removeCart(Number(id))) : dispatch(addToCart(product))}>
        {isInCart ? 'Remove' 
         : 'Add to cart' }</Button>
    </Layout>
  )
}

export default Product
