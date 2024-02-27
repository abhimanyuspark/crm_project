export const formValidation = (data) => {
  const errors = {};

  if (!data?.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data?.password?.trim()) {
    errors.password = "Password is required";
  } else if (data.password.length < 8 || data.password.length > 10) {
    errors.password = "Password must be btween 8 to 10 characters long";
  }

  return errors;
};
