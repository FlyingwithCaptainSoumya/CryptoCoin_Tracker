import React from "react";
import "./coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap
}) => {
  return (
    <div className="coin_container">
      <div className="coin_row">
        <div className="coin">
          <img src={image} alt="crypto" title={name} />
          <h1 title="Crypto Coin">{name}</h1>

          <p className="coin_symbol" title="Crypto ID">
            {symbol}
          </p>
        </div>
        <div className="coin_data">
          <p className="coin_price" title="Coin Price">
            &#x20b9;{price}
          </p>
          <p className="coin_volume" title="Volume">
            &#x20b9;{volume.toLocaleString()}
          </p>

          {priceChange < 0 ? (
            <p className="coin_percent red" title="Price Change">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin_percent green" title="Price Change">
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className="coin_marketcap" title="Coin Market Cap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
