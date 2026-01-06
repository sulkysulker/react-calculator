import { useState } from "react";

interface ButtonProp {
  text: string;
  color: "primary" | "secondary" | "dark" | "info";
  //   onButtonClick: (noOfClicks: number) => void;
  onButtonClick: () => void;
}

const Button = (prop: ButtonProp) => {
  const [timesClicked, setTimesClicked] = useState(0); // SHOULD CALL HOOKS INDIDE THE COMPONENTS ONLY
  return (
    <button
      className={"btn btn-" + prop.color}
      onClick={() => {
        setTimesClicked(timesClicked + 1);
        prop.onButtonClick;
      }}
    >
      {prop.text}
    </button>
  );
};

export default Button;
