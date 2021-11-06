import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar'
import CoinsList from '../components/CoinsList'
import Layout from '../layouts/Layout'
import { useState } from 'react'

export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin => 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    || coin.name.toLowerCase().includes(search.toLowerCase())
    )
  
  const handleChange = e => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div>
        <SearchBar type="text" placeholder="Search"
        onChange={handleChange}/>
        <CoinsList filteredCoins={allCoins}/>
        </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins,
    }
  }
}