import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import React from 'react';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://62b0c70c196a9e98702ab073.mockapi.io/items')
    .then((res) => {
      return res.json();
  })
    .then((json) => {
      setItems(json);
  });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div className="wrapper clear">
      
      { cartOpened? <Drawer items = {cartItems} OnCloseCart={ () => setCartOpened(false)}/>: null }
      <Header onClickCart={() => setCartOpened(true)}/>
      
      <div className="content p-40">
        <div className = "d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все кроссовки'}</h1>
          <div class="search-block d-flex">
            <img src = "/img/search.svg" alt="Search"/>
            <input onChange = {onChangeSearchInput} placeHolder="Поиск..."/>
          </div>
        </div>  
        <div className="d-flex flex-wrap">
          {items
          .map((item, index) => (
            <Card
            key = {index}
            title={item.name}
            price={item.price}
            imageUrl = {item.imgUrl}
            onFavorite = {() => console.log("Добавили в закладки")}
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );

}

export default App;
