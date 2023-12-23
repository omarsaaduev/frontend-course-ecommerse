import { FC } from 'react'
import styles from './CartItem.module.scss'
import { IProduct } from '../../../types/product.interface'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../../store/slice'

const CartItem: FC<{item: IProduct}> = ({item}) => {
    const dispatch = useDispatch() 
  return (
    <div className={styles.wrapper}>
        <img className={styles.image} src={item.thumbnail}/>
        <div className={styles.block__info}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{item.price}$</div>
        </div>
        <button onClick={() => dispatch(removeCart(item.id))} className={styles.button}>Remove</button>
    </div>
  )
}

export default CartItem
