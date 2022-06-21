import styles from './Card.module.scss';
import React from 'react';

function Card({onFavorite, title, imageUrl, price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    return(
        <div className = {styles.card}>
            <div className = {styles.favourite}>
                <img src="/img/NonActive.svg" alt="Unlicked"/>
            </div>
            
            <img width = {133} height = {112} src ={imageUrl} alt ="Sneakers" onClick = {onFavorite}/>
            <h5>{title}</h5>
            <div className = "d-flex justify-between align-center">
                <div className = "d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
        
                <img className = {styles.plus} onClick = {onClickPlus} src={isAdded ? "img/Checked.svg" : "img/Plus.svg"} alt="Plus"/>
    
            </div>
        </div>
    )
}
export default Card;