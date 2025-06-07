import React from "react";
import "./App.css";

interface Mission {
  name: string;
  launchDate: string;
  status: string;
  description: string;
  keyDiscoveries: string[];
  imageUrl: string;
}

const missions: Mission[] = [
  {
    name: "James Webb Space Telescope",
    launchDate: "December 25, 2021",
    status: "Active",
    description:
      "The most powerful space telescope ever built, revolutionizing our understanding of the early universe.",
    keyDiscoveries: [
      "Oldest galaxies ever observed (13.4 billion years old)",
      "Detailed atmospheric analysis of exoplanets",
      "Star formation in unprecedented detail",
      "Discovery of complex organic molecules in space",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
  },
  {
    name: "Perseverance Mars Rover",
    launchDate: "July 30, 2020",
    status: "Active",
    description:
      "Searching for signs of ancient microbial life on Mars and collecting samples for future return to Earth.",
    keyDiscoveries: [
      "Evidence of ancient river delta in Jezero Crater",
      "Collection of 27+ rock and regolith samples",
      "Detection of organic compounds in multiple rock samples",
      "Production of oxygen from Martian atmosphere (MOXIE experiment)",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=500&h=300&fit=crop",
  },
  {
    name: "Parker Solar Probe",
    launchDate: "August 12, 2018",
    status: "Active",
    description:
      "The first spacecraft to 'touch' the Sun, providing unprecedented data about our star.",
    keyDiscoveries: [
      "First spacecraft to enter the Sun's corona",
      "Discovery of magnetic field switchbacks in solar wind",
      "Measurement of dust-free zones around the Sun",
      "New insights into solar wind acceleration mechanisms",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&h=300&fit=crop",
  },
  {
    name: "Artemis I",
    launchDate: "November 16, 2022",
    status: "Completed",
    description:
      "Uncrewed test flight of NASA's Space Launch System and Orion spacecraft for future lunar missions.",
    keyDiscoveries: [
      "Successful test of most powerful rocket ever built",
      "Orion spacecraft performed flawlessly during lunar flyby",
      "Heat shield technology validated for deep space missions",
      "Critical systems tested for future crewed lunar missions",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&h=300&fit=crop",
  },
  {
    name: "DART Mission",
    launchDate: "November 24, 2021",
    status: "Mission Complete",
    description:
      "First planetary defense test mission to deflect an asteroid by kinetic impact.",
    keyDiscoveries: [
      "Successfully altered asteroid Dimorphos's orbital period",
      "Proved kinetic impact as viable planetary defense method",
      "Exceeded expectations by reducing orbital period by 32 minutes",
      "Generated valuable data for future planetary defense strategies",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
  },
  {
    name: "Europa Clipper",
    launchDate: "October 14, 2024",
    status: "En Route",
    description:
      "Mission to Jupiter's moon Europa to study its subsurface ocean and potential for life.",
    keyDiscoveries: [
      "Successfully launched and on trajectory to Jupiter",
      "Will conduct detailed reconnaissance of Europa's ice shell",
      "Expected to determine if Europa's ocean could harbor life",
      "Arrival at Jupiter system planned for 2030",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop",
  },
];

const starPatternSvg =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

function App() {
  return (
    <div className="app">
      <div className="title-page">
        <div className="title-container">
          <div className="nasa-logo">
            <div className="logo-circle">
              <span className="logo-text">NASA</span>
            </div>
          </div>

          <h1 className="main-title">
            Recent NASA Missions Enhancing Our Understanding of the Universe
          </h1>

          <div className="subtitle">
            Exploring the cosmos through groundbreaking scientific missions
          </div>

          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
