import styled from "styled-components";

export default function Header() {
    return (
        <HeaderStyle>
            <h1>Quizzle</h1>
        </HeaderStyle>
    ) 
}

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: black;
  z-index: 11;

  h1 {
    color: white;
    font-family: Abril Fatface;
  }
`;