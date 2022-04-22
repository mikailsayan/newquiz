import Button from "./Button";
import React from "react";

export default {
    title: "components/Button",
    component: Button,
};

const ButtonText = "Show Answer"

export const Default = () => <Button>{ButtonText}</Button>;

export const Active = () => <Button active>{ButtonText}</Button>;

