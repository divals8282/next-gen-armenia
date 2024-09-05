import { Container } from "./styles";
import { Input } from "../../components/input";
import { PhoneNumber } from "../../components/phone-number";
import { Select } from "../../components/select";
import { SelectSearch } from "../../components/select-search";
import { MultiSelectSearch } from "../../components/multiselect-search";
import { MultiSelect } from "../../components/multiselect";
import { Password } from "../../components/password";
import { useState } from "react";
import { initialState, Options } from "./data";
import { Button } from "../../components/button";
import { Paper } from "../../components/paper";
import { useTranslation } from "react-i18next";
import { formValidation } from "./sign-up.validation";

export const SignUp = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);

  const onSubmitForm = () => {
    const { form: newForm, isValid } = formValidation(form, t);
    setForm(newForm);
    if (isValid) {
      // register user
    } else {
    }
  };

  return (
    <Paper>
      <Container>
        <div className="head">
          <p className="title">{t("sign-up.title")}</p>
          <p className="descr">{t("sign-up.descr")}</p>
          <div className="divider"></div>
        </div>
        <div className="block-divided">
          <Input
            value={form.name.value}
            error={t(form.name.error)}
            onChange={(e) =>
              setForm({
                ...form,
                name: { ...form.name, value: e.target.value },
              })
            }
            placeholder={t("sign-up.name-placeholder")}
          />
          <Input
            value={form.lastName.value}
            error={t(form.lastName.error)}
            placeholder={t("sign-up.lastname-placeholder")}
            onChange={(e) =>
              setForm({
                ...form,
                lastName: { ...form.lastName, value: e.target.value },
              })
            }
          />
        </div>
        <div className="block">
          <Input
            value={t(form.email.value)}
            onChange={(e) =>
              setForm({
                ...form,
                email: { ...form.email, value: e.target.value },
              })
            }
            type="email"
            error={t(form.email.error)}
            placeholder={t("sign-up.email-placeholder")}
          />
        </div>
        <div className="block">
          <PhoneNumber
            number={form.phoneNumber.value.number}
            code={form.phoneNumber.value.code}
            error={t(form.phoneNumber.error)}
            onChange={(phone) =>
              setForm({
                ...form,
                phoneNumber: {
                  ...form.phoneNumber,
                  value: {
                    number: phone.number,
                    code: phone.code,
                  },
                },
              })
            }
            placeholder={t("sign-up.phonenumber-placeholder")}
          />
        </div>
        <div className="block">
          <Select
            options={Options}
            value={form.region.value}
            onChange={(value) =>
              setForm({
                ...form,
                region: {
                  ...form.region,
                  value,
                },
              })
            }
            error={t(form.region.error)}
            placeholder={t("sign-up.region-placeholder")}
          />
        </div>
        <div className="block">
          <SelectSearch
            options={Options}
            onChange={(value) =>
              setForm({ ...form, city: { ...form.city, value } })
            }
            value={form.city.value}
            error={t(form.city.error)}
            placeholder={t("sign-up.city-placeholder")}
          />
        </div>
        <div className="block">
          <SelectSearch
            options={Options}
            value={form.school.value}
            onChange={(value) =>
              setForm({ ...form, school: { ...form.school, value } })
            }
            error={t(form.school.error)}
            placeholder={t("sign-up.school-placeholder")}
          />
        </div>
        <div className="block">
          <MultiSelectSearch
            options={Options}
            placeholder={t("sign-up.subject-placeholder")}
            error={t(form.subject.error)}
            value={form.subject.value}
            onChange={(values) =>
              setForm({ ...form, subject: { ...form.subject, value: values } })
            }
          />
        </div>
        <div className="block">
          <MultiSelect
            value={form.grade.value}
            onChange={(values) =>
              setForm({ ...form, grade: { ...form.grade, value: values } })
            }
            error={t(form.grade.error)}
            options={Options}
            placeholder={t("sign-up.grade-placeholder")}
          />
        </div>
        <div className="block">
          <Password
            value={form.password.value}
            onChange={(e) =>
              setForm({
                ...form,
                password: { ...form.password, value: e.target.value },
              })
            }
            error={t(form.password.error)}
            placeholder={t("sign-up.password-placeholder")}
          />
        </div>
        <div className="block">
          <Password
            value={form.rePassword.value}
            error={t(form.rePassword.error)}
            onChange={(e) =>
              setForm({
                ...form,
                rePassword: { ...form.rePassword, value: e.target.value },
              })
            }
            placeholder={t("sign-up.confirmpassword-placeholder")}
          />
        </div>
        <div className="actions">
          <Button onClick={() => onSubmitForm()}>
            {t("sign-up.action-button")}
          </Button>
        </div>
      </Container>
    </Paper>
  );
};
