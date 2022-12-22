import styled from 'styled-components'

export const Background = styled.div`
    width: 800px;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: #e63a2e;
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
`
export const Title = styled.h1`
    margin: 10px 0 20px;
    text-align: center;
    font-size: 25px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
`
export const Period = styled.div`
    display: flex;
    flex-direction: row;
`
export const Date = styled.p`
    font-size: 15px;
    font-style: italic;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-decoration: underline;
    margin: 10px;
`
export const Cover = styled.img`
    width: 300px;
    box-shadow: 10px 10px #000000c9;
`
export const Description = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;
    color: white;
    font-style: italic;
    font-weight: bold;
`
