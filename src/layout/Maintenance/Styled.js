import styled from 'styled-components';

export const Error = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    font-size: 30px;
   
`
export const Image = styled.img`
    width: 300px;
`

export const h1 = styled.h1`
    background: #e63a2e;
    border-radius: 5px;
    color: white;
`

export const p = styled.p`
    background: #e63a2e;
    border-radius: 5px;
    color: white;
`

export const Link = styled.a`
    background: white;
    border-radius: 5px;
    color: blue;
    text-transform: capitalize;
    :hover {
        text-decoration: underline;
    }
`