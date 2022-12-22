import React from 'react'
// import Search from '../Search/Search.jsx'
import * as S from './Styled.js'
import Search from '../../components/Search/Search'

export default function Header() {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <S.Container>
            <div onClick={refreshPage}>
                <S.Image src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' />
            </div>

        </S.Container>
    )
}
