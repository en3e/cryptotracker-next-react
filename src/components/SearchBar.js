import React from 'react'
import styles from '../styles/searchbar.module.css'
export default function SearchBar({...rest}) {
    return (
        <div className={styles.searchbarcontainer}>
            <input className={styles.searchbar} {...rest}/>
        </div>
    )
}
