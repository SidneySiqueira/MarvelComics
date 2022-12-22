import styled from 'styled-components';

export const SearchHero = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    position: relative;  
    top: -50px;  
    margin-right: -1300px;
`
export const List = styled.div`
    width: 1750px;
    display: flex;
    flex-wrap: wrap;
    display:flex;
    justify-content: flex-start;
`
export const Title = styled.h1`
    width: 150px;
    margin: 0 20px 0 0;
    font-size: 30px;
    font-style:italic;
    text-transform: uppercase;
    letter-spacing: -4px;
    color: white;
`
export const Input = styled.input`
    margin-right: 10px;
    border-radius: 20px;    
`

export const Button = styled.button`
    width: 110px;
    border-radius: 20px;
    font-size: 15px;
    font-weight:bold;
    font-style:italic;
    color: white;
    background: #ed1d24;
    text-transform: uppercase;
    cursor: pointer;
    :hover{
        background: yellow;
        color: black;
    } 
`