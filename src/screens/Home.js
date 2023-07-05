import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
const Home = () => {
  const [food, setFood] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFood(response);
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className=" .container-fluid d-flex flex-wrap justify-content-center mt-4  ">
        {
          // map the data of food with below cart

          Object.keys(food).map((item) => {
           

            return (
              <Card
                key={food[item]._id}
                name={food[item].name}
                description={food[item].description}
                img={food[item].img}
                options={food[item].options}
              />
            );
          })
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
