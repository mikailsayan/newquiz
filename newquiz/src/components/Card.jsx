import styled from "styled-components";

export default function Card({ question }) {
  return (
    <CardStyle>
      <h2>Question 1</h2>
      <p>{question}</p>
      <button type="button">Show Answer</button>
      <p></p>
      <ul></ul>
    </CardStyle>
  );
}

const CardStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  border: 5px solid black;
  border-radius: 10px;
  width: 320px;
  margin-top: 20px;
  padding: 20px;

  h2 {
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px 5px 10px;
  }
`;
