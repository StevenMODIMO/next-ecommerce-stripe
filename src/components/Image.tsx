"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Types {
  _id: string,
  fileUrl: string
}

export default function Images() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const response = await fetch("/api/admin");
      const json = await response.json();

      if (response.ok) {
        setImages(json);
      } else {
        console.log(json.error);
      }
    };
    getImages();
  }, []);
  return (
    <main>
      <div className="relative w-fit h-fit">
        {images.map((image: Types) => {
          return (
            <Image
              key={image._id}
              src={image?.fileUrl}
              alt="f"
              width={80}
              height={80}
            />
          );
        })}
      </div>
    </main>
  );
}
