import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Amount from "./Amount";

import "./style.css";

const DonationDetels = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const { id } = useParams();
  //console.log(id);

  const getdata = useSelector((state) => state.DonatReducer.creator);
  //console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    console.log(comparedata);
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      {data.map((ele) => {
        return (
          <>
            <div className="container mt-2">
              <div className="avatar">
                <img src={ele.profileUrl} alt="Creator Img" />
              </div>
              <h4 className="user-detail row d-flex justify-content-center align-items-center">
                {ele.userName} 🟢
              </h4>
            </div>
            <div className="container t-6">
              <h2 className="row d-flex justify-content-center align-items-center">
                Sand Your Love to {ele.userName} to Become a real Fam
              </h2>
              <hr />
            </div>
          </>
        );
      })}
      <Amount />
    </>
  );
};

export default DonationDetels;
