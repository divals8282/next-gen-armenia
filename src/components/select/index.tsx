import { ComponentT } from "./types";
import { Container } from "./styles";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ReactComponent as ChevronSVG } from "../../assets/chevron.svg";

export const Select: ComponentT = ({ error, options, value, onChange, placeholder }) => {
  const [openList, setOpenList] = useState(false);
  const containerRef = useRef(null);
  useOutsideClick(containerRef, () => {
    setOpenList(false);
  });

  return (
    <Container
      ref={containerRef}
      error={error}
      onClick={() => setOpenList(!openList)}
    >
      <div className="error">{error}</div>
      <div className="content">
        <label>{value ? options.find(c => c.value === value).label : placeholder}</label>
        <div className="chevron">
          <ChevronSVG />
        </div>
      </div>
      <ul className={`list ${openList ? "open" : "closed"}`}>
        {options.map((option) => (
          <li onClick={() => onChange(option.value)} key={option.value}>
            {option.label}
          </li>
        ))}
      </ul>
    </Container>
  );
};
