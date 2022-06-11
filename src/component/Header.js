import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink
            to="/"
            className="text-decoration-none text-light mx-3"
            style={{ fontSize: 25, cursor: "pointer" }}
          >
            @Donation
          </NavLink>

          <i
            class="fa-solid fa-user-plus text-light "
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
