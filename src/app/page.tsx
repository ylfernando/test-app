"use client";

import { useState } from "react";
import { photoList } from "@/data/photoList";
import { PhotoItem } from "./components/PhotoItem";

export const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageModal(photo.url);
      setShowModal(true);
    }
  };

  return (
    <div className="mx-2">
      <h1 className="text-center font-bold text-3xl my-10">
        Fotos intergaláticas
      </h1>
      <section className=" text-2xl container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default Page;
