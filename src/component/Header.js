import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";

import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/action/action";

const Header = () => {
  const getdata = useSelector((state) => state.DonatReducer.creator);
  //console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink
            to="/"
            className="text-decoration-none text-light mx-3"
            style={{ fontSize: 25, cursor: "pointer" }}
          >
            @Donation
          </NavLink>

          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-heart text-light "
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>photo</th>
                    <th>userName</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/donate/${e.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={e.profileUrl}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.userName}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              key={e.id}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            key={e.id}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 20,
                  color: "red",
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>

              <p style={{ fontSize: 22, textTransform: "uppercase" }}>
                Click ❤️favourite celebrity
              </p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
