import styled from 'styled-components';

export const Board = styled.div`
    width: 300px;   
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background: #ffffff99;
    border: 5px #3b58a9 solid;
    cursor: pointer;
    margin: 15px 15px;
`
export const Picture = styled.div`
    overflow: hidden;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
`
export const Image = styled.img`
width: 250px;
`

export const Hero = styled.p`
   font-size: 20px;  
   font-style: italic;
   font-weight: bold;
   text-transform: uppercase;  
   text-align: center;  
`