import Head from 'next/head'
import * as S from './Styled'

export default function Maintenance() {
    return (
        <>
            <Head>
                <title>404 Error</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <S.Error>
                <S.Image src='https://www.imagensempng.com.br/wp-content/uploads/2021/05/16-1.png' />
                <S.h1>Sorry, we're doen for maintenance</S.h1>
                <S.p>We'llbe back shortly</S.p>
                <S.Link href='/home'> click to be directed</S.Link>
            </S.Error>
        </>

    )
}
