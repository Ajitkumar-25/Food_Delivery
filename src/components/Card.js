import React from "react";
const Card = (props) => {
  

  return (
    <div>
      <div>
        <div
          className="card m-3 border border-success  "
          style={{ width: "18rem", maxHeight: "400px" }}
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

            <div className="m w-100">
              <select className=" h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                {
                  // map the data of food with below cart
                  Object.keys(props.options[0]).map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  }
                  )
                }
              </select>
              <div className="d-inline h-100 fs-5">Total Price:{}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
