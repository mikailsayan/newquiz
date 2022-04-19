import styled from "styled-components";

export default function Button({onClick, children}) {
  
    return (
        <ButtonStyle type="button" onClick={onClick}>{children}</ButtonStyle>
    );
  }

  const ButtonStyle = styled.button`
    padding: 5px 30px 5px 30px;
    font-size: 16px;
    border: 4px solid #f27200;
    border-radius: 10px;
    transition: 0.3s;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;