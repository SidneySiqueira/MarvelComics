import React from 'react'
import * as S from './Styled'

export default function List({ name, image, setOpenDataSheet={setOpenDataSheet} }) {
    return (
        <S.Board>
            <S.Hero>{name}</S.Hero>
            <S.Picture><S.Image src={image}></S.Image></S.Picture>
        </S.Board>
    )
}
