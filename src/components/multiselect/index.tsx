import { ComponentT } from "./types";
import { Container } from "./styles";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ReactComponent as ChevronSVG } from "../../assets/chevron.svg";
import { ReactComponent as CheckboxNotSelected } from "../../assets/checkbox-not-selected.svg";
import { ReactComponent as CheckboxSelected } from "../../assets/checkbox-selected.svg";

export const MultiSelect: ComponentT = ({
  error,
  onChange,
  value,
  options,
  placeholder,
}) => {
  const [openList, setOpenList] = useState(false);
  const containerRef = useRef(null);

  const selectedOptions = options.filter((option) => {
    const isIn = !!value.find((c) => c === option.value);
    return isIn;
  });
  useOutsideClick(containerRef, () => {
    setOpenList(false);
  });

  const isSelected = (option) => {
    return !!selectedOptions.find((o) => o.value === option.value);
  };

  const onSelection = (option) => {
    const isIn = !!selectedOptions.find((c) => c.value === option.value);

    if (isIn) {
      onChange(
        selectedOptions
          .filter((c) => {
            if (c.value === option.value) {
              return false;
            }

            return true;
          })
          .map((c) => c.value)
      );
    } else {
      onChange([...selectedOptions.map(c => c.value), option.value]);
    }
  };

  return (
    <Container
      ref={containerRef}
      error={error}
      onClick={() => setOpenList(!openList)}
    >
      <div className="error">{error}</div>
      <div className="content">
        <label>{placeholder}</label>
        <div className="chevron">
          <ChevronSVG />
        </div>
      </div>
      <div className={`dropdown ${openList ? "open" : "closed"}`}>
        <ul className={`list`}>
          {options.map((option) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                onSelection(option);
              }}
              key={option.value}
            >
              <div>{option.label}</div>
              <div className="checkbox-icon">
                {isSelected(option) ? (
                  <CheckboxSelected />
                ) : (
                  <CheckboxNotSelected />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
