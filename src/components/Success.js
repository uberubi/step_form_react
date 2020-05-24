import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Success = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#5CC5B8" }}
        variant="dark"
      >
        <Navbar.Brand href="#home">Success</Navbar.Brand>
      </Navbar>
      <Container>
        <Form style={{ border: "1px solid black" }}>
          <Form.Label>Thank You For Your Submission</Form.Label>
          <Form.Text>You will get an email with further</Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Success;
