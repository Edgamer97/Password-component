import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Check from "./svg/check.svg";
import Close from "./svg/close.svg";

type Reqs = {
  description: string;
  regex: RegExp;
  error: boolean;
};

function App() {
  const [value, setValue] = useState<string>("");
  const [reqs, setReqs] = useState<Reqs[]>([
    {
      description: "Has a number 0-9",
      regex: /\d/,
      error: true,
    },
    {
      description: "Has a special char !@#$%^&*",
      regex: /(?=.*?[#?!@$ %^&*-])/,
      error: true,
    },
    {
      description: "Has uppercase Letter",
      regex: /[A-Z]/,
      error: true,
    },
  ]);
  return (
    <div className="App">
      <h1 className="text-center mt-4 font-weight-bold">Password Component</h1>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="mx-4">
          <input
            className="form-control p-1"
            name="password"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <div>
          {reqs.map(({ description, error }) => (
            <div className="d-flex my-2 align-items-center">
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
