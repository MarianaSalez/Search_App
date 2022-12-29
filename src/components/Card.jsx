import React from 'react'
import style from './styles/Card.module.css'



export default function Card(prod) {

  return (
    <div className={style.card} >
    <img className={style.card_image} src={prod.image} alt=' '/>
    <div className={style.card_data}>
    <p className={style.card_name}>{prod.name}</p>
    <p className={style.card_static}>{`CODE${prod.code}`}</p>
    <p className={style.card_static}>Precio: <span className={style.card_price}>${prod.price}</span></p>
    </div>
    </div>
  )
}