import React from 'react'
import Layout from '../ui/product-item/layout/Layout'
import { useSelector } from 'react-redux'
import { TypeRootState } from '../../../store/store'
import CartItem from './CartItem'
import { IProduct } from '../../../types/product.interface'

const Cart = () => {
  const {items} = useSelector<TypeRootState>(state => state.cart)
  
  return (
    <Layout title={ items.length > 0? `Товаров в корзине (${items.length})`: 'Корзина пуста('}>
      {items.map(item => <CartItem item={item}/>)}
    </Layout>
  )
}

export default Cart
