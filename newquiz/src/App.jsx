import "./styles.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import fetchQuestions from "./Fetch";

export default function App() {
  const url = "https://opentdb.com/api.php?amount=10";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions(url, (data) => {
      setQuestions(data.results);
    });
  }, []);

  return (
    <>
      <HeaderStyle>
        <h1>Quizzle</h1>
      </HeaderStyle>
      <MainStyle>
        {questions.map(({ question }) => {
          return <Card key={question.question} question={question}></Card>;
        })}
      </MainStyle>
    </>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: black;

  h1 {
    color: white;
  }
`;

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
