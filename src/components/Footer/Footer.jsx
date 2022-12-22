import React from 'react'
import * as S from './Styled.js'

function Footer() {
    return (
        <S.Background>
            <a href="https://www.marvel.com/movies" target="_blank"><S.Studios src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/2560px-Marvel_Studios_2016_logo.svg.png'></S.Studios></a>
            <a href='https://www.marvel.com/' target="_blank"><S.Marvel src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' /></a>
            <a href='https://www.sonypictures.com.br/' target="_blank"><S.Sony src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea3d1e0c-97e9-4ec3-aff8-ba765a33498a/ddmc826-298cd7ea-9c8f-4f88-b428-91d93a9201ed.png/v1/fill/w_800,h_328,strp/sony_marvel_universe_logo_by_edogg8181804_ddmc826-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI4IiwicGF0aCI6IlwvZlwvZWEzZDFlMGMtOTdlOS00ZWMzLWFmZjgtYmE3NjVhMzM0OThhXC9kZG1jODI2LTI5OGNkN2VhLTljOGYtNGY4OC1iNDI4LTkxZDkzYTkyMDFlZC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YtX8ewLuXotYpCUuuoOmdA3l_xB-pF1S6-ryojavYgE'/></a>
            <a href='https://www.marvel.com/comics' target="_blank"><S.Comics src='https://i.pinimg.com/originals/fb/5c/bf/fb5cbfc0a7df3a460106992bc8fd1baf.png' /></a>
        </S.Background>
    )
}

export default Footer