import React, { FC } from 'react'
import { IProduct } from '../../../../types/product.interface'
import styles from './ProductItem.module.scss'
import { Link } from 'react-router-dom'


const ProductItem: FC<{product: IProduct}> = ({product}) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.item}>
        <div style={{backgroundImage: `url(${product.thumbnail})`}} className={styles.image}></div>
        <div className={styles.heading}>{product.title}</div>
        <div className={styles.price}>{new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(product.price)}</div>
        
    </Link>
  )
}

export default ProductItem
