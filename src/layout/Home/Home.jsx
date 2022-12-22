import Head from 'next/head'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import * as S from './Styled'


export default function Home() {
    const [openComics, setOpenComics] = useState(false);
    const [openEvents, setOpenEvents] = useState(false);

    return (
        <S.Page>
            <Head>
                <title>Marvel</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <div>
                <Header />
            </div>

            <S.Background >
                <Search 
                openComics={openComics} 
                setOpenComics={setOpenComics}
                openEvents={openEvents}
                setOpenEvents={setOpenEvents}
                /> 
            </S.Background>
            {openComics || openEvents?
                 <></>: <Footer />}
        </S.Page>
    )
}