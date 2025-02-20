"use client";

interface ProductListingsTypes {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  price: number;
  quantity: number;
}

import { useState, useEffect } from "react";

export default function ProductListings() {
  return <div>ProductListings Section</div>;
}
