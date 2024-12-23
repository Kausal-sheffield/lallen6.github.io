import { useState, useMemo } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Mission } from "./components/mission";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";
import ParticleBackground from "./components/node-background/background";
import Background from "./components/node-background/background_1";
import React from 'react'
import { useIntersectionObserver } from "./useIntersectionObserver";
import { FloatingVideoButton } from './components/video'
import SmoothScroll from "smooth-scroll";



// Move data outside component
const initialData = JsonData;


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // Use useMemo for landingPageData
  const landingPageData = useMemo(() => initialData, []);
  const [showVideo, setShowVideo] = useState(false);


  useIntersectionObserver();

  return (
    <div>
      <Background />
      <Navigation
        data={landingPageData.menu}
        setShowVideo={setShowVideo}
      />
      <Header data={landingPageData.Header} />
      <Mission data={landingPageData.Mission} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <FloatingVideoButton
        showVideo={showVideo}
        setShowVideo={setShowVideo}
      />
    </div>
  );
};


export default App;
