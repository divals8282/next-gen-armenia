import { ComponentT } from "./types";
import { Container } from "./styles";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ReactComponent as ChevronSVG } from "../../assets/chevron.svg";
import { ReactComponent as SearchSVG } from "../../assets/search.svg";

export const SelectSearch: ComponentT = ({ error, value, onChange, options, placeholder }) => {
  const [openList, setOpenList] = useState(false);
  const [search, setSerach] = useState("");
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
        <label>{value ? options.find(o => o.value === value).label : placeholder}</label>
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
            placeholder="Search"
          />
        </div>
        <ul className={`list ${openList ? "open" : "closed"}`}>
          {options.filter(e => {
            const current = e.label.toLowerCase();
            const currentSearch = search.toLowerCase();
            if(current.indexOf(currentSearch) !== -1) {
              return true;
            }
            return false;
          }).map((option) => (
            <li onClick={() => onChange(option.value)} key={option.value}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
