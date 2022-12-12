import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useWindowSize from "../hooks/useWindowSize";
export default function MySlider() {
  const size = useWindowSize();
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showArrows={false}
      autoPlay={true}
      interval={5000}
      showStatus={false}
      width={size.width >= 480 ? "1500px" : "100%"}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "100%" }}
          src="https://i.imgur.com/cTugIiu.png"
          alt="one of my portfolio projects"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "100%" }}
          src="https://i.imgur.com/ygpwKLp.png"
          alt="one of my portfolio projects"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "100%" }}
          src="https://i.imgur.com/hfCDaef.png"
          alt="one of my portfolio projects"
        />
      </div>
    </Carousel>
  );
}
