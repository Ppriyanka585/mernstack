import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

export default function Home() {

  const navigate = useNavigate(); //Hook

  const goToAddpage = () => {
    navigate("/additem");
  };

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <h1 className="mx-3"> Products</h1>
        <Button variant="success" onClick={goToAddpage}>
          Add +{" "}
        </Button>
      </Container>
    </div>
  );
}
