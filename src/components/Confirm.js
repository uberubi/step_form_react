import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Confirm = ({
  nextStep,
  prevStep,
  values: { firstName, lastName, email, occupation, city, bio },
}) => {
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
        <Navbar.Brand href="#home">Confirm User Data</Navbar.Brand>
      </Navbar>
      <Container>
        <Form style={{ border: "1px solid black" }}>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Text>{firstName}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Text>{lastName}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Text>{email}</Form.Text>
          </Form.Group>
          
          <Form.Group controlId="formBasicOccupation">
            <Form.Label>Occupation</Form.Label>
            <Form.Text>{occupation}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Text>{city}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicBio">
            <Form.Label>Bio</Form.Label>
            <Form.Text>{bio}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicButtonContinue">
            <Form.Label></Form.Label>

            <Button
              type="submit"
              style={{ background: "#5CC5B8" }}
              onClick={continueNextStep}
            >
              Confirm & Continue
            </Button>
          </Form.Group>
          <Form.Group controlId="formBasicButtonContinue">
            <Button
              type="submit"
              style={{ background: "white", color: "black" }}
              onClick={backPrevStep}
            >
              Back
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};


export default Confirm;
