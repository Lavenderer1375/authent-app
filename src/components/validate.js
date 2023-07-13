export const validate = (data, type) => {
    const errors = {};
  
    if (!data.email) {
      errors.email = "Email Required!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalide!";
    } else {
      delete errors.email;
    }
  
    if (!data.password) {
      errors.password = "password is required!";
    } else if (data.password.length < 8) {
      errors.password = "password needs to be at least 8 charachters.";
    } else {
      delete errors.password;
    }
  
    if (type === "signup") {
      if (!data.name.trim()) {
        errors.name = "Name is required!";
      } else {
        delete errors.name;
      }
  
      if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm the password!";
      } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = " Passwords do not match!";
      } else {
        delete errors.confirmPassword;
      }
  
      if (data.isAccepted) {
        delete errors.isAccepted;
      } else {
        errors.isAccepted = "Please accept our terms and conditions!";
      }
    } else {
    }
  
    return errors;
  };
  