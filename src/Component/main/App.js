import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Coin from "../coin/Coin";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin_content">
      <div className="coin_search">
        <h1 className="coin_text heading">Search a Currency</h1>
        <form>
          <input
            className="coin_input css-selector"
            type="text"
            placeholder="Search Crypto"
            onChange={handleChange}
          />
        </form>
      </div>
      {/* <div className="Names">
        <h3>Coins</h3>
        <h3>Coin ID</h3>
        <h3>Price</h3>
        <h3>Volume</h3>
        <h3>Price Change</h3>
        <h3>Market Capital</h3>
      </div> */}
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}
