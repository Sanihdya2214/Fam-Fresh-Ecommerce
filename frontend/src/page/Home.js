import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../component/AllProduct";
import Banner from '../component/banner'
import Header from '../component/Header'
import Footer from "../component/footer";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable"
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  useEffect(() => {
    // Bounce animation effect
    slideProductRef.current.style.animation = "bounce 1s ease";
    const timer = setTimeout(() => {
      slideProductRef.current.style.animation = "none";
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <>
    <div className="m-0 p-0" style={{ background: "linear-gradient(135deg, #f9f9f9, #e6e6e6)" }}>
    {/* <Header /> */}
      <Banner />
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 mx-auto text-center whitespace-nowrap"> {/* Center aligning and nowrap */}
          <h2 className="text-4xl md:text-7xl font-bold py-3 text-gray-800">
            Farm Fresh{" "}
            <span className="text-green-600">Farm-to-Table Excellence!</span>
          </h2>
        </div>
        
      </div>

      <div>
        <div className="flex w-full items-center justify-center mb-6"> {/* Align center */}
          <h2 className="font-bold text-3xl md:text-4xl text-gray-800 transition-transform transform hover:scale-110">
            Farm Fresh At Your Home
          </h2>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
          style={{ animation: "none" }} // Initial animation set to none
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((_, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
      
      <AllProduct heading={"Explore More"} />
      <Footer />
    </div>
    
    </>
  );
};

export default Home;