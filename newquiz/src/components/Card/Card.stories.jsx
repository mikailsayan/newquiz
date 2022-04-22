import Card from "./Card";
import React from "react";

export default {
    title: "components/Card",
    component: Card,
};

const CardProps = {
    question: "Beispielfrage", 
    answer: "Beispielantwort", 
    incorrect: ["Beispiel", "Beispiel 2", "Beispiel 3"], 
    headlinecount: 1, 
    qtype: "multiple"
}

export const Default = () => <Card {...CardProps}/>;

