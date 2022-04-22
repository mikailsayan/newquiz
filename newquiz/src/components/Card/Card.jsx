import styled from "styled-components";
import Button from "../Button/Button";
import useToggle from "../Hooks/useToggle";

export default function Card({ question, answer, incorrect, headlinecount}) {
  const [showAnswer, setshowAnswer] = useToggle(false);

  //Funktion für Randomreihenfolge der Antworten
  function RandomInt(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
  }

  const falseAnswers = RandomInt(incorrect.length);
  let choices = [...incorrect];
  choices.splice(falseAnswers, 0, answer);
  const result = choices;


  return (
    <CardStyle>
      <article>
        <h2>Question {headlinecount}</h2>
        <p>{question}</p>
      </article>
      <ChoiceStyle>
        <li>{result}</li>
      </ChoiceStyle>
          <Button onClick={setshowAnswer}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        <p>{showAnswer ? answer : ""}</p>
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
  transition: 0.5s;
  box-shadow: 0px 0px 25px black;

  @media (min-width: 700px) {
      width: 450px;
  }

  @media (min-width: 1000px) {
    width: 600px;
}

  Button {
    margin-top: 20px;
  }

  h2 {
    margin-top: 10px;
    text-align: center;
    font-family: Alfa Slab One;
    font-size: 30px;
  }

  p {
    margin-top: 20px;
    font-size: 20px;
  }

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
