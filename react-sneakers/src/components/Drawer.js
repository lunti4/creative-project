function Drawer({items, OnCloseCart}) {
    return(
        <div className = "overlay">
        <div className = "drawer">
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img onClick={OnCloseCart} className="removeBtn cu-p" src="/img/cross.svg" alt = "Remove"/>
          </h2>

          <div className="items">
          {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
            <div style = {{backgroundImage: `url(${obj.imageUrl})`}}className = "cartItemImg"></div>
            <div className = "mr-20 flex">
              <p className = "mb-5">{obj.title}</p>
               <b>{obj.price}</b>
            </div>
            <img className="removeBtn" src="/img/cross.svg" alt = "Remove"/>
          </div>
          ))} 
          </div>


          <div className = "cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 495 руб.</b>
            </li>
            <li>
              <span>НДС:</span>
              <div></div>
              <b>4 299 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ<img src = "img/arrow.svg" alt = "arrow"/></button>
          </div>
        </div>
        </div>
    )
}
export default Drawer;