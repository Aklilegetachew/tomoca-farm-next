"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import HeroPage from "./Component/HeroPage";
import CardShow from "./Component/CardShower";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Roboto } from "next/font/google";
import OneByTwo from "./Component/OneByTwo";
import ModernGallery from "./Component/GalleryImage";
import AppDownloadSection from "./Component/Promotion";

// Ensure GSAP plugins are registered only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});
const myRoasts = [
  {
    title: "Bero Kassi Farm, South West Ethiopia",
    image: "/farm-view.jpg",
  },
  {
    title: "Sululta Dairy Farm",
    image: "/tomoca-dairy.jpg",
  },
  {
    title: "Bosha Farm, Chelekot, Gachi Woreda",
    image: "/tomoca-gachi.jpg",
  },
];

const desc = {
  title: "Beyond the Cup",
  heading: "Our Commitment to Community",
  description:
    "our ethos of going beyond coffee production to actively engage with and uplift the communities we touch. Through sustainable practices and impactful initiatives, we strive to create lasting positive change in the regions where our farms are rooted.",
  features: [
    {
      icon: "",
      title: "Building Stronger Communities",
      description:
        "Our commitment extends past coffee production to making a difference in the lives of those who grow it. By investing in sustainable practices and community initiatives, we aim to uplift and empower the regions we serve.",
    },
    {
      icon: "",
      title: "Rooted in Community, Grounded in Impact",
      description:
        "Our journey is about more than coffee; it's about fostering sustainable growth and lasting change. Through dedicated efforts, we bring positive impact to the communities that are the heart of our farms.",
    },
  ],
  ctaText: "EXPLORE MORE",
  images: "/donation-tomoca.jpg"
};

const imagesGallery = [
  {
    src: "/G1.jpg",
    alt: "",
  },
  {
    src: "/G2.jpg",
    alt: "",
  },
  {
    src: "/G3.jpg",
    alt: "",
  },
  {
    src: "/G4.jpg",
    alt: "",
  },
  {
    src: "/G5.jpg",
    alt: "",
  },
  {
    src: "/G6.jpg",
    alt: "",
  },
  {
    src: "/G7.jpg",
    alt: "",
  },
  {
    src: "/G8.jpg",
    alt: "",
  },
  {
    src: "/G9.jpg",
    alt: "",
  },
];

const Home = () => {
  useEffect(() => {}, []);

  return (
    <main className={`${roboto.className} w-full flex flex-col bg-black`}>
      <Header />
      <HeroPage />
      <CardShow roasts={myRoasts} fontClassName={""} />
      <OneByTwo {...desc} />
      <ModernGallery images={imagesGallery} />
      <AppDownloadSection />
      <Footer />
    </main>
  );
};

export default Home;
