import "./styles.css";
import styled from "styled-components";
import Card from "./components/Card/Card"
import useFetch from "./components/useFetch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <ErrorDiv role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </ErrorDiv>
  )
}

export default function App() {
  const data = useFetch(
    "https://opentdb.com/api.php?amount=10",
    "results"
  );

  return (
    <>
      <Header/>
      <MainStyle>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Headline2>Answer these questions!</Headline2>
            {data.map(({ question, correct_answer, incorrect_answers, type }, index) => {
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
          </ErrorBoundary>
      </MainStyle>
      <Footer/>
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

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 200px;
  border: 4px solid red;
  background-color: grey;

  p {
    font-size: 30px;
  }

`
