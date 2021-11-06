import Head from 'next/head'
import { GiCrystalGrowth } from 'react-icons/gi'

const Layout = ({children, title = "CryptoCurrency Tracker"}) => {
    return (
        <div className="">
        <Head>
        <title>{title}</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <div className="iconheadcontainer">
                <GiCrystalGrowth className="iconhead"/>
            </div>
        </header>
        <main>{children}</main>
        </div>
    )
}

export default Layout