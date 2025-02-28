"use client";
import { useState, useEffect } from "react";

export default function CartProducts() {
  useEffect(() => {
    const getCartProducts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      console.log(cart);
    };
    getCartProducts()
  }, []);
  return <div></div>;
}
