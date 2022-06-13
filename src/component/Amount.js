import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Amount = () => {
  const [support, setSupport] = useState("");
  const [name, setName] = useState();
  const [msg, setmsg] = useState([]);

  const submitForm = (e) => {
    const newEntry = {
      ID: new Date().getTime.toString(),

      support,
      name,
      msg,
    };

    e.preventDefault();
    setSupport("");
    setName("");
    setmsg("");
  };

  return (
    <>
      <div className="container mt-3 col-xxl-8 col-10 col-md-8 mx-auto">
        <form action="" onSubmit={submitForm}>
          <Form.Control
            className="mb-3"
            type="number"
            placeholder=" $2000"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Your name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Say something nice..(opitional)"
              rows="3"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            ></textarea>
          </div>
          <Button
            variant="primary"
            onClick={() => {}}
            type="submit"
            className=" m-5 text-center"
          >
            support ${support}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Amount;
