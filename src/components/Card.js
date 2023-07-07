import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const [price, setprice] = useState(0);
  const [qty, setqty] = useState(1);

  const handleselect = (e) => {
    setprice(e.target.value);
  };
  const handleqty = (e) => {
    setqty(e.target.value);
  };
  return (
    <div>
      <div>
        <div
          className="card m-3 border border-success  "
          style={{ width: "20rem", maxHeight: "480px" }}
        >
          <img
            className="card-img-top"
            style={{ height: "170px", objectFit: "cover" }}
            src={props.img}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>

            <div className=" w-100">
              <select
                className=" mx-2 h-100  bg-success rounded"
                name="price"
                onChange={handleselect}
              >
                <option value="0" key="select">
                   size
                </option>
                {
                  // map the data of food with below cart
                  Object.keys(props.options[0]).map((item) => {
                    // console.log(props.options[0][item]);
                    return (
                      <option key={item} value={props.options[0][item]}>
                        {item}
                      </option>
                    );
                  })
                }
              </select>
              <select
                className=" mx-2 h-100  bg-success rounded"
                name="qty"
                onChange={handleqty}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <div className="d-inline h-100 fs-5">
                Total Price : {price * qty} &#x20b9;
              </div>
            </div>
            <hr />

            <button className="btn btn-success justify-center ms-2 mx-5">
              Add To Cart
            </button>

            {localStorage.getItem("authtoken") ? (
              <Link
                to={"/payment"}
                className="btn btn-success justify-center ms-2 "
              >
                Buy Now
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
