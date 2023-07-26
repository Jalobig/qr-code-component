import React from 'react'
import classes from './Card.module.scss'
import QrCodeImg from '../../images/image-qr-code.png'

const Card = () => {
  return (
    <div className={classes.card}>
        <img src={QrCodeImg} alt='Qr code' className={classes.card__img}/>
        <h2 className={classes.card__title}>Improve your front-end skills by building projects</h2>
        <p className={classes.card__description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    
    </div>
  )
}

export default Card