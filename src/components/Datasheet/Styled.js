import styled from 'styled-components';

export const Datasheet = styled.div`
    width: 100%;
    background: #ffffff99;
    position: absolute;
    left: 0;
`
export const Presentation = styled.div`
   height:100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
export const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Image = styled.img`
    width: 500px;
    margin: 10px 50px 20px 10px;
`
export const Name = styled.p`
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    border-radius: 10px;
    margin: 30px;
    padding: 10px;
`
export const Description = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    border-radius: 10px;
    padding: 10px;
`
export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 10px;
    margin: 20px 0;
`
export const References = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 30px 0 30px;
`
export const Urls = styled.a`
    display: flex;
    margin-right: 10px;
    flex-direction: row;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    :hover {
    color: blue;
    text-decoration: underline;
    }
`
export const X = styled.p`
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 20px 0 0; 
    padding: 5px;  
    background: white;
    border-radius: 50px;
    cursor: pointer;
`
export const Shares = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
export const Div = styled.div`
    display:flex;
    width: 30%;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    margin: 10px 10px 0;
    
    `
export const Category = styled.h1`
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 40px;
        font-style: italic;
        font-weight: bold;
        text-transform: uppercase;
        background: white;
        border-radius: 10px;
        :hover{
            background: yellow;
            color: red;
            cursor: pointer;
        }
    `
export const Comics = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    width: 45%;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 2px gray solid;
    border-radius: 5px;
    margin: 5px;
`
export const Series = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    width: 45%;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 2px gray solid;
    border-radius: 5px;
    margin: 5px;
`
export const Stories = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    width: 45%;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 2px gray solid;
    border-radius: 5px;
    margin: 5px;
`
export const Catalog = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Close = styled.div`
    width: 800px;
    display: flex;
    justify-content: flex-end;   
`
export const CloseComics = styled.p`
    width: 50px;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 20px 0 0; 
    padding: 5px;  
    background: white;
    border-radius: 50px;
    cursor: pointer;
`

