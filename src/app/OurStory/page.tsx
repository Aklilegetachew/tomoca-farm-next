import Footer from "../Component/Footer";

import Header from "../Component/Header";
import OneByTwo from "../Component/OneByTwo";

import { Lexend_Deca } from "next/font/google";

import SubHeader from "../Component/SubHeader";
import CardImage from "../Component/cardImage";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});
const SomePage = () => {
  const desc = {
    title: "Our Story",
    heading: "This is us",
    description:
      "History has it; In the 9th century a local herdsman named Kaldi saw one of his goats acting anomaly after eating the berries of a certain shrub. Kaldi then complained to the local Abbot of a monastery about the frolicsome behaviour of his goat. This then started being practiced in the monastery which grew into the community and finally went on globally. This chain, tower of dreamers, of achievement is what Tomoca is based on. The passion of dreamers to disrupt the status quo the same way that anomaly goat did, is shared with Tomoca.",
    features: [
      {
        icon: "",
        title: "Embracing the Spirit of Discovery",
        description:
          "Tomoca stands as a tribute to the pioneers like Kaldi and the monks who dared to dream. Founded on a deep respect for heritage and innovation, Tomoca embodies the passion of those who seek to challenge norms and bring the joy of discovery to others.",
      },
      {
        icon: "",
        title: "Rooted in Community, Grounded in Impact",
        description:
          "Our journey is about more than coffee; it's about fostering sustainable growth and lasting change. Through dedicated efforts, we bring positive impact to the communities that are the heart of our farms.",
      },
    ],
    ctaText: "EXPLORE MORE",
    images: "/logoBlack.jpg",
  };

  const posts = [
    {
      imageSrc: "/poster1953.jpg",
      title:
        "Bero Kassi Farm: Cultivating Excellence in the Heart of Ethiopia Coffee Highlands",
      date: "October 14, 2024",
      commentCount: 0,
    },
    {
      imageSrc: "/grainsposter.jpg",
      title:
        "Sululta's Green Pastures: Where Sustainable Farming Meets Premium Dairy",
      date: "October 14, 2024",
      commentCount: 0,
    },
    {
      imageSrc: "/Historical.jpg",
      title:
        "Bosha Farm: Blending Tradition and Innovation in Chelekot’s Fertile Heartland ",
      date: "October 14, 2024",
      commentCount: 0,
    },
  ];
  return (
    <div className={`${lexendDeca.className} bg-black`}>
      <Header />
      <SubHeader />
      <OneByTwo {...desc} />
      <CardImage posts={posts} />
      <Footer />
    </div>
  );
};

export default SomePage;
