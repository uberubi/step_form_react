import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  // Proceed to next step

  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to previous step

  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
        nextStep={nextStep}
        prevStep={prevStep}
        values={values}
      />
      )
    case 4:
      return <Success />;
    default:
  }
};

export default UserForm;
