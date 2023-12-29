import { useState, useEffect } from "react";
import Check from "../svg/check.svg";
import Close from "../svg/close.svg";
import InputComponent from "./InputComponent";
import { PCProps } from "../types";

const PasswordComponent: React.FC<PCProps> = ({ reqs, setReqs }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const verifyReqs = () => {
    const newReqs = reqs.map((x) => {
      const test = new RegExp(x.regex).test(inputValue);
      const exp = x.negate ? !test : test;
      if (exp) {
        return { ...x, error: false };
      }
      return { ...x, error: true };
    });
    setReqs(newReqs);
  };

  useEffect(() => {
    verifyReqs();
    // eslint-disable-next-line
  }, [inputValue]);

  return (
    <div>
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
};

export default PasswordComponent;
