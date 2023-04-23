import React from 'react'
import s from './style.module.css'

export default function ProductItem({id, name, price, deleteProduct}) {

  return (
    <div className={s.item}>
        <p>{name}</p>
        <p>{price}</p>

        <p onClick={() => deleteProduct(id)} className={s.delete_btn}> x </p>
        
    </div>
  )
}
