import React from "react";

const payment = () => {
  return (
    <div>
      <div className="container border border-success my-5">
        <div className="row">     
          <div className="col-12 mt-4">
            <div className="card p-3 border border-success">
              <p className="mb-0 fw-bold h4 ">Payment Methods</p>
            </div>
          </div>
          <div className="col-12 ">
            <div className="card p-3">
              <div className="card-body border border-success">
                <p>
                  <a
                    className="btn btn-success p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseExample"
                  >
                    <span className="fw-bold">Credit Card</span>
                    <span className="">
                      <span className="fab fa-cc-amex"></span>
                      <span className="fab fa-cc-mastercard"></span>
                      <span className="fab fa-cc-discover"></span>
                    </span>
                  </a>
                </p>
                <div className="collapse show p-3 pt-0" id="collapseExample">
                  <div className="row">
                    <div className="col-lg-5 mb-lg-0 mb-3">
                      <p className="h4 mb-0">Summary</p>
                      <p className="mb-0">
                        <span className="fw-bold">Product:</span>
                        <span className="c-green">: Name of product</span>
                      </p>
                      <p className="mb-0">
                        <span className="fw-bold">Price:</span>
                        <span className="c-green">:$452.90</span>
                      </p>
                      <p className="mb-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                    <div className="col-lg-7">
                      <form action="" className="form">
                        <div className="row">
                          <div className="col-12">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control my-2"
                                placeholder="Card Number "
                              />
                              
                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Expiry Date : (MM/YY) "
                              />

                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="form__div">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="CVV CODE "
                              />
                            </div>
                          </div>
                          <div className="col-12 my-2">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name on The Card"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="btn btn-success w-100">Make Payment</div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
