import styled from "styled-components";
import { useState } from 'react'

export default function Card({ question, answer, incorrect, headlinecount }) {
  const [showeAnswer, setshoweAnswer] = useState(false);

  return (
    <CardStyle>
      <article>
        <h2>Question {headlinecount}</h2>
        <p>{question}</p>
      </article>
      <ChoiceStyle>
        <li>{incorrect[0]}</li>
        <li>{answer}</li>
        <li>{incorrect[1]}</li>
        <li>{incorrect[2]}</li>
      </ChoiceStyle>
      <ButtonDiv>
        <button type="button" onClick={() => {
          setshoweAnswer(!showeAnswer);
        }}>{showeAnswer ? "Hide Answer" : "Show Answer"}</button>
        <p>{showeAnswer ? answer : ""}</p>
      </ButtonDiv>
    </CardStyle>
  );
}

const CardStyle = styled.section`
  background-color: #e5e5e5;
  border: 5px solid black;
  border-radius: 10px;
  width: 320px;
  margin-top: 20px;
  padding: 20px;
  transition: 0.5s;
  box-shadow: 0px 0px 25px black;

  @media (min-width: 700px) {
      width: 450px;
  }

  @media (min-width: 1000px) {
    width: 600px;
}

  h2 {
    margin-top: 10px;
    text-align: center;
    font-family: Alfa Slab One;
  }

  p {
    margin-top: 20px;
    font-size: 20px;
  }

  button {
    margin-top: 20px;
    padding: 5px 30px 5px 30px;
    font-size: 16px;
    border: 4px solid #f27200;
    border-radius: 10px;
    transition: 0.3s;
  }

  button:hover {
    transform: scale(1.05, 1.05);
  }
`;

const ButtonDiv = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChoiceStyle = styled.ul`
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style-type: none;

  li {
    width: 200px;
    border: 2px solid #f27200;
    padding: 5px;
    font-size: 19px;
    border-radius: 5px;
    background-color: white;
    transition: 0.5s;

    @media (min-width: 700px) {
        width: 250px;
    }

    @media (min-width: 1000px) {
        width: 350px;
    }
  }
`;
