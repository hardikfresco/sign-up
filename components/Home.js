"use client"
import Image from "next/image";
import React from "react";
import { cart } from "@/store/slice/cartSlice";
import { useDispatch, useSelector } from 'react-redux';

const HomeComponent = () => {
    const {counter} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const handleAddToCart = ()=>{
        dispatch(cart(counter+1));
    }

  return (
    <div className="relative  bg-[url('/pencil.jpg')] object-cover object-center w-full h-full" style={{backgroundImage:"url('/pencil.jpg')"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 absolute top-5 right-10 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <p className="top-4 right-8 absolute rounded-full bg-red-500 text-white text-xs w-4 text-center h-4">{counter}</p>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-3/4 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src={"/laptop.jpg"}
              width={800}
              height={800}
              alt="Laptop"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                Price: $40
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Description: Perfect for students, professionals, and casual
                users alike,
                <br />
                the Brand Name Model Name Laptop is your ideal companion for
                both work and play. Experience the perfect balance of style,
                performance, and reliability.
              </p>
            </div>

            <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
