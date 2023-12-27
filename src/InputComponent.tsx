import { useState, useEffect } from "react";
import { debounce } from "lodash";

const InputComponent = ({
  setInputValue,
}: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    let func = debounce(() => setInputValue(value), 400);
    func();
    return () => func?.cancel();
    // eslint-disable-next-line
  }, [value]);

  return (
    <input
      className="form-control p-1"
      name="password"
      type="text"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default InputComponent;
