import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
       
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src="https://images.moneycontrol.com/static-mcnews/2021/03/Burger.jpg"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)",height:'500px',objectFit:"cover"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.aQbpPEudH_rERC_z8hc7mQHaE8?w=248&h=180&c=7&r=0&o=5&pid=1.7"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)" ,height:'500px',objectFit:"cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.OZny5F6g0QAQPLsU_4HnEAHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)" ,height:'500px',objectFit:"cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
