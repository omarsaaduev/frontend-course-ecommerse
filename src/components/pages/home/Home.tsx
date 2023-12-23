import React, { FC, useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { ProductService } from '../../../services/product.servise'
import { IProduct } from '../../../types/product.interface'
import { useQuery } from '@tanstack/react-query'
import ProductItem from '../ui/product-item/ProductItem'
import Layout from '../ui/product-item/layout/Layout'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  // const {data: products, isLoading, error} = useQuery(['products'], () => ProductService
  // .getProducts(), 
  //   {select: ({products}) => products}
  // )

  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
   

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {products} = await ProductService.getProducts()
        setProducts(products)
      } catch (error) {
        setError(error)
      } finally{
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])


  return (
    <Layout title='Shop the collection'>
      
      {error && <div>{error}</div>}
      {isLoading? 'Загрузка': 
      
      products.length ? 
      <div className={styles.wrapper}>
        {
          products.map(product => {
            return  <ProductItem key={product.id} product={product}/>
            
          })
        }
      </div>
       : 
      <div>Продуктов не найдено</div>}
    </Layout>
  )
}

export default Home
