import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const continueNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backPrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#5CC5B8" }}
        variant="dark"
      >
        <Navbar.Brand href="#home">Enter Personal Details</Navbar.Brand>
      </Navbar>
      <Container>
        <Form style={{ border: "1px solid black" }}>

          <Form.Group controlId="formBasicOccupation">
            <Form.Label class="float-left">Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCity">
            <Form.Label class="float-left">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBio">
            <Form.Label class="float-left">Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
          </Form.Group>

          <Button
            type="submit"
            style={{ background: "#5CC5B8" }}
            onClick={continueNextStep}
          >
            Continue
          </Button>

          <Button
            type="submit"
            style={{ background: "white", color: 'black' }}
            onClick={backPrevStep}
          >
            Back
          </Button>

        </Form>
      </Container>
    </>
  );
};

export default FormPersonalDetails;
