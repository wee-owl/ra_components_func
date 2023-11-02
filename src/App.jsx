import React from 'react';
import './App.css';

const card = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£',
};

function ShopItemFunc(props) {
  const { item } = props;
  return (
    <div className="main-content">
      <div className="outline">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay" />
        </div>
        <div className="divider" />
        <div className="purchase-info">
          <div className="price">
            {item.currency}
            {item.price.toFixed(2)}
          </div>
          <button type="button">Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="background-element" />
      <div className="highlight-window">
        <div className="highlight-overlay" />
      </div>
      <div className="window">
        <ShopItemFunc item={card} />
      </div>
    </div>
  );
}

export default App;
