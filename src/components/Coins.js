import React from 'react'
import styles from '../styles/Coinstyles.module.css'
import Link from 'next/link'

export default function Coins({name, price, symbol, marketcap, volume, image, priceChange, id}) {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
        <a>
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} alt={name} className={styles.coin_img} />
                    <h3 className={styles.coin_name}>{name}</h3>
                    <p className={styles.coin_sym}>{symbol}</p>
                    <div className={styles.coin_data}>
                        <p className={styles.coin_price}>{price}$</p>
                        <p className={styles.coin_volume}>{volume.toLocaleString()}$</p>
                        <p className={styles.coin_marketcap}>Market Cap: {marketcap.toLocaleString()}$</p>
                        
                        {priceChange < 0 ? (
                            <p className={styles.coin_percent,"red"}>{priceChange.toFixed(2)}</p> ) : (
                            <p className={styles.coin_percent,"green"}>{priceChange.toFixed(2)}</p>
                        )}

                    </div>
                </div>
            </div>
        </div>
        </a>
        </Link>
    )
}
