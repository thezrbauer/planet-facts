import styled from "styled-components"


export const Wrapper = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(400px, auto);
  background-color:red;
  padding:1rem;
  margin:auto;
`
export const Planet = styled.div`
width:80%;
margin:auto;
`
export const Details = styled.div`
color:white;
width:80%;
margin:auto;
`



export const Stats = styled.div`
color:white;

`
export const Buttons = styled.div`
color:white;

background-color:yellow;
button {
  div{  color:white;
        font-family: 'League Spartan', sans-serif;
        font-size:12px;
        line-spacing:20px;
        font-weight:bold;
        width:80%;
        background-color:#6F2ED6;
        text-align:left;
        padding: .6rem;
        
}
  p{
        color:#FFFFFF;
        width:20%;
        background-color:#6F2ED6;
        padding:.6rem;
  }
  display:flex;
  align-item:center;
  width:100%;
  height:2.6rem;
  margin:.4rem auto;

}

`
