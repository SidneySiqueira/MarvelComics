import React from 'react'
import * as S from './Styled'

export default function Comics({title, image, sinopse, setOpenComics={setOpenComics}}) {
  return (
    <S.Background>
        <S.Title>{title}</S.Title>
        <S.Hq>
          <S.Cover src={image} />
          <S.Description>
          <S.Sinopse>{sinopse? sinopse : "Don't have information"}</S.Sinopse>
          </S.Description>
        </S.Hq>
    </S.Background>
  )
}
