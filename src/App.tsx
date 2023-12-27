import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Check from "./svg/check.svg";
import Close from "./svg/close.svg";
import InputComponent from "./InputComponent";

type Reqs = {
  description: string;
  regex: RegExp;
  error: boolean;
};

const initialValue = [
  {
    description: "Has a number 0-9",
    regex: /\d/,
    error: true,
  },
  {
    description: "Has a special char !@#$%^&*",
    regex: /(?=.*?[#?!@$%^&*-])/,
    error: true,
  },
  {
    description: "Has uppercase Letter",
    regex: /[A-Z]/,
    error: true,
  },
];

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [reqs, setReqs] = useState<Reqs[]>(initialValue);

  const verifyReqs = () => {
    const newReqs = reqs.map((x) => {
      if (new RegExp(x.regex).test(inputValue)) {
        return { ...x, error: false };
      } else {
        return { ...x, error: true };
      }
    });
    setReqs(newReqs);
  };

  useEffect(() => {
    verifyReqs();
    // eslint-disable-next-line
  }, [inputValue]);

  return (
    <div className="App">
      <h1 className="text-center mt-4 font-weight-bold">Password Component</h1>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="mx-4">
          <InputComponent setInputValue={setInputValue} />
        </div>
        <div>
          {reqs.map(({ description, error }, i) => (
            <div className="d-flex my-2 align-items-center" key={i}>
              <img
                src={error ? Close : Check}
                alt={error ? "Wrong!" : "Ok!"}
                className="mx-3"
              />
              <h6>{description}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
