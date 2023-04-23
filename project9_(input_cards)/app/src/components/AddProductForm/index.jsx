import React from 'react'
import s from './style.module.css'

export default function AddProductForm({addProduct}) {

    const onSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;

        const newProduct = {
            id: Date.now(),
            name,
            price,
        };
        addProduct(newProduct);
        event.target.reset()
    }

  return (
    <form{...{onSubmit}} className={s.item}>
        <input type="text" name='name' placeholder='название' />
        <input type="number" name='price' placeholder='цена' />
        
        <input type="submit" value="Добавить" />
        
    </form>
  )
}

{/* <button type='submit' className={s.item_btn}>Добавить</button> */}