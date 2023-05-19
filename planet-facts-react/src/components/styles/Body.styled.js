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

`
