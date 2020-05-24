import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const continueNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#5CC5B8" }}
        variant="dark"
      >
        <Navbar.Brand href="#home">Enter User Details</Navbar.Brand>
      </Navbar>
      <Container>
        <Form style={{ border: "1px solid black" }}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label class="float-left">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label class="float-left">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label class="float-left">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ background: "#5CC5B8" }}
            onClick={continueNextStep}
          >
            Continue
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormUserDetails;
