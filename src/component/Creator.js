import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CreatorData from "./CreatorData";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DONAT } from "../redux/action/action";
const Creator = () => {
  const [data, setData] = useState(CreatorData);
  //console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    //console.log(e);
    dispatch(DONAT(e));
  };
  return (
    <div className="container mt-3">
      <h2 className="">Recommendated Creators</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {/* maping start */}
        {data.map((element, id) => {
          // use Destructuring for simplifi codes
          const { profileUrl, userName, profession } = element;
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <NavLink to={`/donate/${element.id}`}>
                  <Card.Img
                    variant="top"
                    src={profileUrl}
                    style={{ height: "16rem" }}
                    className="mt-3"
                    onClick={() => send(element)}
                  />
                </NavLink>

                <Card.Body>
                  <Card.Title>{userName}</Card.Title>
                  <Card.Text>{profession}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Creator;
