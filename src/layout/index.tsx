import { Container } from "./styles";
import { ComponentT } from "./types";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";
import { ReactComponent as DoorSVG } from "../assets/door.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { useTranslation } from 'react-i18next';

export const Layout: ComponentT = ({ children }) => {
  const lang = localStorage.getItem('lang')
  const [selectedLanguage, setSelectedLanguage] = useState(lang ? lang : 'en');
  const { t, i18n } = useTranslation();
  useEffect(() => {
    localStorage.setItem('lang', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n])
  return (
    <Container>
      <header>
        <div className="head">
          <div></div>
          <div className="logo-container">
            <LogoSVG />
          </div>
          <div className="language-selector-container">
            <ul className="language-selector">
              <li
                onClick={() => setSelectedLanguage("en")}
                className={selectedLanguage === "en" ? "active" : ""}
              >
                Eng
              </li>
              <li
                onClick={() => setSelectedLanguage("am")}
                className={selectedLanguage === "am" ? "active" : ""}
              >
                Հայ
              </li>
              <li
                onClick={() => setSelectedLanguage("ru")}
                className={selectedLanguage === "ru" ? "active" : ""}
              >
                Рус
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-container">
          <div></div>
          <ul>
            <li className="active">{t('header.navigation.teacher')}</li>
            <li>{t('header.navigation.donors')}</li>
            <li>{t('header.navigation.about-us')}</li>
            <li>{t('header.navigation.contact-us')}</li>
            <li>{t('header.navigation.blog')}</li>
          </ul>
          <div className="login-button-container">
            <Link to={"/sign-in"}>
              <button className="login-button">
                <DoorSVG />
                &nbsp;{t('header.sign-in-button')}
              </button>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </Container>
  );
};
