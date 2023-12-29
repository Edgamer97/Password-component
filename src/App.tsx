import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Reqs } from "./types";
import PasswordComponent from "./components/PasswordComponent";

const initialValue: Reqs = [
  {
    description: "Has a number 0-9",
    regex: /\d/,
    error: true,
  },
  {
    description: "Has a special char !@#$%^&*",
    regex: /(?=.*?[!@#$%^&*])/,
    error: true,
  },
  {
    description: "Has uppercase Letter",
    regex: /[A-Z]/,
    error: true,
  },
  {
    description: "Has no consecutive letters",
    regex: /([a-zA-Z])\1/,
    negate: true,
    error: false,
  },
];

function App() {
  const [reqs, setReqs] = useState<Reqs>(initialValue);
  return <PasswordComponent reqs={reqs} setReqs={setReqs} />;
}

export default App;
