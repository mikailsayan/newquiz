import "./styles.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card/Card"
import fetchQuestions from "./components/Fetch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header/>
        <MainStyle>
          <Headline2>Answer these questions!</Headline2>
          {questions.map(({ question, correct_answer, incorrect_answers, type }, index) => {
            return (
              <Card
                key={question}
                question={question}
                answer={correct_answer}
                incorrect={incorrect_answers}
                headlinecount={index+1}
                qtype={type}
              ></Card>
            );
          })}
        </MainStyle>
        <Footer/>
      </ErrorBoundary>
    </>
    
  );
}

const Headline2 = styled.h2`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: 5px solid black;
  font-family: Alfa Slab One;
`;

const MainStyle = styled.main`
  padding: 70px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
    font-size: 23px;
  }
`;
