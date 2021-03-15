import React from "react";
import styles from "./Coins.module.css";

const Coins = ({ name, price, symbol, marketcap, image, priceChange }) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img className={styles.coin_img} src={image} alt={name} />
          <div className={styles.coin_h1}>{name}</div>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <div className={styles.coin_price}>
            {price.toFixed().toLocaleString("hu-HU")} HUF
          </div>

          {priceChange < 0 ? (
            <p className={styles.coin_percent_red}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={styles.coin_percent_green}>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className={styles.coin_marketcap}>
            Kapitalizáció : HUF {marketcap.toLocaleString("hu-HU")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
