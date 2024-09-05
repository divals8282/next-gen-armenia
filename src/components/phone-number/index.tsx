import { Input } from "../input";
import { Container } from "./styles";
import { ComponentT } from "./types";
import { useRef, useState } from "react";

import countryPhoneCodes from "./countryPhoneCodes.json";
import { useOutsideClick } from "../../hooks/use-out-side-click";

export const PhoneNumber: ComponentT = ({
  error,
  placeholder,
  number,
  code,
  onChange,
}) => {
  const currentCodeRef = useRef(null);
  const codeList = useRef(null);
  const [codeListOpen, setCodeListOpen] = useState(false);

  useOutsideClick(currentCodeRef, () => {
    setCodeListOpen(false);
  });

  return (
    <Container error={error}>
      <div
        className="current-code"
        onClick={() => {
          setCodeListOpen(true);
        }}
        ref={currentCodeRef}
      >
        +{code}
      </div>
      <ul
        ref={codeList}
        className={`code-list ${codeListOpen ? "open" : "close"}`}
      >
        {countryPhoneCodes.map((item) => (
          <li
            className="item"
            onClick={(e) => {
              onChange({
                code: item.code,
                number: number,
              });
            }}
            key={item.country}
          >
            {item.country}
          </li>
        ))}
      </ul>
      <Input
        value={number}
        onChange={(e) =>
          onChange({
            code,
            number: e.target.value,
          })
        }
        type="number"
        placeholder={placeholder}
      />
      {error ? <div className="error">{error}</div> : null}
    </Container>
  );
};
