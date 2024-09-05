import { ComponentT } from "./types";
import { Container } from "./styles";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/use-out-side-click";
import { ReactComponent as ChevronSVG } from "../../assets/chevron.svg";
import { ReactComponent as SearchSVG } from "../../assets/search.svg";
import { ReactComponent as CheckboxNotSelected } from "../../assets/checkbox-not-selected.svg";
import { ReactComponent as CheckboxSelected } from "../../assets/checkbox-selected.svg";
import { useTranslation } from "react-i18next";

export const MultiSelectSearch: ComponentT = ({
  error,
  options,
  placeholder,
  value,
  onChange,
}) => {
  const { t } = useTranslation();

  const [openList, setOpenList] = useState(false);

  const [search, setSerach] = useState("");

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
      onChange([...selectedOptions.map((c) => c.value), option.value]);
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
        <div className="search-bar" onClick={(e) => e.stopPropagation()}>
          <div className="icon">
            <SearchSVG />
          </div>
          <input
            value={search}
            onChange={({ target }) => setSerach(target.value)}
            type="text"
            placeholder={t("components.placeholder-search")}
          />
        </div>
        <ul className={`list ${openList ? "open" : "closed"}`}>
          {options
            .filter((e) => {
              const current = e.label.toLowerCase();
              const currentSearch = search.toLowerCase();
              if (current.indexOf(currentSearch) !== -1) {
                return true;
              }
              return false;
            })
            .map((option) => (
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
