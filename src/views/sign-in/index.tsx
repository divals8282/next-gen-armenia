import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Paper } from "../../components/paper";
import { Password } from "../../components/password";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";

export const SignIn = () => {
  const { t } = useTranslation();
  return (
    <Paper>
      <Container>
        <div className="head">
          <p className="title">{t('sign-in.title')}</p>
          <p className="descr">{t('sign-in.welcome')}</p>
          <div className="divider"></div>
        </div>
        <div className="block">
          <Input type="email" placeholder={t('sign-in.input-email-placeholder')} />
        </div>
        <div className="block">
          <Password placeholder={t('sign-in.input-password-placeholder')} />
        </div>
        <div className="block forgot-password">
          <a href="http://localhost:3000">{t('sign-in.forgot-password')}</a>
        </div>
        <div className="block">
          <Button className="sign-in-button">{t('sign-in.sign-in-button')}</Button>
        </div>
        <div className="divider"></div>
        <div className="block">
          <p className="register-title">{t('sign-in.register-as')}</p>
        </div>
        <div className="block-divided">
          <Link to={"/sign-up"}><Button color="secondary">{t('sign-in.teacher-button')}</Button></Link>
          <Link to={"/sign-up"}><Button color="secondary">{t('sign-in.donor-button')}</Button></Link>
        </div>
      </Container>
    </Paper>
  );
};
