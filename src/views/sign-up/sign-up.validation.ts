const validateEmail = (email) => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const formValidation = (form, t) => {
  let isValid = true;
  const newForm = {...form}
  
  if(!form.name.value) {
    isValid = false;
    newForm.name.error = t('sign-up.validation.field-required');
  } else {
    newForm.name.error = "";
  }

  if(!form.lastName.value) {
    isValid = false;
    newForm.lastName.error = t('sign-up.validation.field-required');
  } else {
    newForm.lastName.error = "";
  }


  if(!form.email.value) {
    isValid = false;
    newForm.email.error = t('sign-up.validation.field-required');
  } else {
    if(!validateEmail(newForm.email.value)) {
      isValid = false;
      newForm.email.error = t('sign-up.validation.invalid-email');
    } else {
      newForm.email.error = "";
    }
  }

  if(!form.phoneNumber.value.number) {
    isValid = false;
    newForm.phoneNumber.error = t('sign-up.validation.field-required');
  } else {
    newForm.phoneNumber.error = "";
  }

  if(!form.region.value) {
    isValid = false;
    newForm.region.error = t('sign-up.validation.field-required');
  } else {
    newForm.region.error = "";
  }

  if(!form.city.value) {
    isValid = false;
    newForm.city.error = t('sign-up.validation.field-required');
  } else {
    newForm.city.error = "";
  }

  if(!form.school.value) {
    isValid = false;
    newForm.school.error = t('sign-up.validation.field-required');
  } else {
    newForm.school.error = "";
  }

  if(!form.subject.value.length) {
    isValid = false;
    newForm.subject.error = t('sign-up.validation.field-required');
  } else {
    newForm.subject.error = "";
  }

  if(!form.grade.value.length) {
    isValid = false;
    newForm.grade.error = t('sign-up.validation.field-required');
  } else {
    newForm.grade.error = "";
  }

  if(!form.password.value) {
    isValid = false;
    newForm.password.error = t('sign-up.validation.field-required');
  } else {
    newForm.password.error = "";
  }
  
  if(!form.rePassword.value) {
    isValid = false;
    newForm.rePassword.error = t('sign-up.validation.field-required');
  } else {
    if(form.rePassword.value !== form.password.value) {
      isValid = false;
      newForm.rePassword.error = t('sign-up.validation.password-not-match');
    } else {
      newForm.rePassword.error = "";
    }
  }

  return {
    form: newForm,
    isValid
  }
}