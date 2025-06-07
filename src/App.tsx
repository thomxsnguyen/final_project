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
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="nav-logo-text">NASA</span>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#missions" className="nav-link">
                Missions
              </a>
            </li>
            <li className="nav-item">
              <a href="#discoveries" className="nav-link">
                Discoveries
              </a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Future
              </a>
            </li>
          </ul>

          <div className="nav-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="title-page">
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
      </section>

      {/* Missions Section */}
      <section id="missions" className="section">
        <div className="container">
          <h2 className="section-title">Recent Groundbreaking Missions</h2>
          <p className="section-intro">
            NASA's recent missions have revolutionized our understanding of the
            Universe, from the cosmic microwave background to the formation of
            the first galaxies.
          </p>

          <div className="missions-grid">
            <div className="mission-card">
              <div className="mission-header">
                <h3>James Webb Space Telescope (JWST)</h3>
                <span className="mission-date">
                  Launched: December 25, 2021
                </span>
              </div>
              <div className="mission-content">
                <p>
                  The most powerful space telescope ever built, JWST observes
                  the Universe in infrared light, allowing us to see through
                  cosmic dust and observe the earliest galaxies formed after the
                  Big Bang.
                </p>
                <div className="discoveries">
                  <h4>Key Discoveries:</h4>
                  <ul>
                    <li>
                      Observed galaxies as they existed 13.4 billion years ago,
                      just 400 million years after the Big Bang
                    </li>
                    <li>
                      Detailed analysis of exoplanet atmospheres, including
                      water vapor detection
                    </li>
                    <li>
                      Unprecedented views of star formation regions and stellar
                      nurseries
                    </li>
                    <li>
                      Discovery of surprisingly massive early galaxies that
                      challenge current models
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-header">
                <h3>Planck Space Observatory</h3>
                <span className="mission-date">Mission: 2009-2013</span>
              </div>
              <div className="mission-content">
                <p>
                  Planck mapped the cosmic microwave background (CMB) with
                  unprecedented precision, providing crucial insights into the
                  early Universe and its composition.
                </p>
                <div className="discoveries">
                  <h4>Key Discoveries:</h4>
                  <ul>
                    <li>
                      Most precise measurements of CMB temperature fluctuations
                    </li>
                    <li>
                      Determined Universe composition: 4.9% ordinary matter,
                      26.8% dark matter, 68.3% dark energy
                    </li>
                    <li>
                      Age of Universe: 13.82 billion years (±0.05 billion years)
                    </li>
                    <li>Evidence for cosmic inflation in the early Universe</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-header">
                <h3>Wilkinson Microwave Anisotropy Probe (WMAP)</h3>
                <span className="mission-date">Mission: 2001-2010</span>
              </div>
              <div className="mission-content">
                <p>
                  WMAP provided the first detailed full-sky map of the cosmic
                  microwave background, establishing the standard model of
                  cosmology.
                </p>
                <div className="discoveries">
                  <h4>Key Discoveries:</h4>
                  <ul>
                    <li>First precision measurements of CMB anisotropies</li>
                    <li>Confirmed the flat geometry of the Universe</li>
                    <li>
                      Established timeline: first stars formed 400 million years
                      after Big Bang
                    </li>
                    <li>Provided evidence for dark matter and dark energy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-header">
                <h3>Spitzer Space Telescope</h3>
                <span className="mission-date">Mission: 2003-2020</span>
              </div>
              <div className="mission-content">
                <p>
                  Operating in infrared, Spitzer revealed hidden aspects of the
                  Universe, from nearby exoplanets to distant galaxies obscured
                  by cosmic dust.
                </p>
                <div className="discoveries">
                  <h4>Key Discoveries:</h4>
                  <ul>
                    <li>
                      Detected infrared light from exoplanets, enabling
                      atmospheric studies
                    </li>
                    <li>Discovered the largest ring around Saturn</li>
                    <li>Observed some of the most distant galaxies known</li>
                    <li>Mapped stellar formation regions hidden by dust</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discoveries Section */}
      <section id="discoveries" className="section dark-section">
        <div className="container">
          <h2 className="section-title">Revolutionary Discoveries</h2>

          <div className="discovery-section">
            <h3 className="discovery-title">
              Cosmic Microwave Background Radiation (CMB)
            </h3>
            <p className="discovery-intro">
              The cosmic microwave background is the afterglow of the Big Bang,
              discovered in 1965 and studied in unprecedented detail by recent
              NASA missions.
            </p>

            <div className="cmb-details">
              <div className="cmb-card">
                <h4>What is the CMB?</h4>
                <p>
                  The CMB is electromagnetic radiation left over from the time
                  when the Universe first became transparent to light, about
                  380,000 years after the Big Bang. It permeates the entire
                  Universe and provides a snapshot of the cosmos at its earliest
                  observable moment.
                </p>
              </div>

              <div className="cmb-card">
                <h4>Why is it Important?</h4>
                <p>
                  The tiny temperature fluctuations in the CMB (about 0.00001
                  Kelvin) represent the seeds from which all cosmic
                  structures—galaxies, galaxy clusters, and the cosmic
                  web—eventually grew. These measurements allow us to determine
                  the fundamental parameters of our Universe.
                </p>
              </div>

              <div className="cmb-card">
                <h4>Recent Insights</h4>
                <p>
                  Planck's measurements revealed that the Universe is
                  geometrically flat, consists of about 5% ordinary matter, 27%
                  dark matter, and 68% dark energy. The data also supports the
                  theory of cosmic inflation—a rapid expansion in the Universe's
                  first fraction of a second.
                </p>
              </div>
            </div>
          </div>

          <div className="discovery-section">
            <h3 className="discovery-title">Early Universe Revelations</h3>
            <div className="revelation-grid">
              <div className="revelation-card">
                <h4>First Galaxies</h4>
                <p>
                  JWST has observed galaxies that formed when the Universe was
                  only 400-600 million years old. These early galaxies are
                  surprisingly massive and well-formed, challenging our
                  understanding of how quickly cosmic structures could assemble.
                </p>
              </div>

              <div className="revelation-card">
                <h4>Reionization Era</h4>
                <p>
                  The period when the first stars and galaxies formed and began
                  ionizing the neutral hydrogen in the Universe. JWST
                  observations are providing direct evidence of this crucial
                  transition that transformed the cosmos from dark to luminous.
                </p>
              </div>

              <div className="revelation-card">
                <h4>Dark Matter Distribution</h4>
                <p>
                  CMB observations combined with gravitational lensing studies
                  have mapped the distribution of dark matter across cosmic
                  time, revealing the scaffolding upon which all visible matter
                  is organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <div className="container">
          <h2 className="section-title">Cosmic Imagery</h2>
          <p className="section-intro">
            Visual representations of our Universe's history and structure from
            NASA missions
          </p>

          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="image-placeholder cmb-map">
                <span>Planck CMB Map</span>
              </div>
              <h4>Cosmic Microwave Background</h4>
              <p>
                The most detailed map of the CMB showing temperature
                fluctuations that seeded cosmic structure
              </p>
            </div>

            <div className="gallery-item">
              <div className="image-placeholder jwst-deep">
                <span>JWST Deep Field</span>
              </div>
              <h4>JWST Deep Field</h4>
              <p>
                The deepest infrared view of the Universe, showing galaxies as
                they existed billions of years ago
              </p>
            </div>

            <div className="gallery-item">
              <div className="image-placeholder timeline">
                <span>Cosmic Timeline</span>
              </div>
              <h4>Universe Timeline</h4>
              <p>
                From the Big Bang through cosmic inflation, CMB release, to
                first stars and galaxies
              </p>
            </div>

            <div className="gallery-item">
              <div className="image-placeholder structure">
                <span>Large Scale Structure</span>
              </div>
              <h4>Cosmic Web</h4>
              <p>
                The filamentary structure of dark matter that forms the backbone
                of the Universe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="about" className="section dark-section">
        <div className="container">
          <h2 className="section-title">Future Probes of the Early Universe</h2>
          <p className="section-intro">
            The next generation of space missions will push even deeper into
            cosmic history and fundamental physics
          </p>

          <div className="future-missions">
            <div className="future-card">
              <h3>Nancy Grace Roman Space Telescope</h3>
              <span className="launch-date">Launch: Mid-2020s</span>
              <p>
                With a field of view 100 times larger than Hubble, Roman will
                conduct massive surveys of the Universe, studying dark energy,
                dark matter, and exoplanets with unprecedented scale.
              </p>
              <div className="capabilities">
                <h4>Key Capabilities:</h4>
                <ul>
                  <li>Wide-field infrared surveys of billions of galaxies</li>
                  <li>Precise measurements of cosmic acceleration</li>
                  <li>Gravitational lensing studies of dark matter</li>
                  <li>Direct imaging of exoplanets</li>
                </ul>
              </div>
            </div>

            <div className="future-card">
              <h3>Cosmic Microwave Background Stage-4 (CMB-S4)</h3>
              <span className="launch-date">Deployment: Late 2020s</span>
              <p>
                Ground-based observatory that will map the CMB with exquisite
                precision, searching for primordial gravitational waves and
                testing theories of cosmic inflation.
              </p>
              <div className="capabilities">
                <h4>Key Capabilities:</h4>
                <ul>
                  <li>Detection of primordial B-mode polarization</li>
                  <li>Constraints on inflation models</li>
                  <li>Measurements of neutrino masses</li>
                  <li>Dark matter and dark energy studies</li>
                </ul>
              </div>
            </div>

            <div className="future-card">
              <h3>Laser Interferometer Space Antenna (LISA)</h3>
              <span className="launch-date">Launch: 2030s</span>
              <p>
                Space-based gravitational wave detector that will observe
                mergers of massive black holes and potentially primordial
                gravitational waves from cosmic inflation.
              </p>
              <div className="capabilities">
                <h4>Key Capabilities:</h4>
                <ul>
                  <li>Detection of low-frequency gravitational waves</li>
                  <li>Studies of massive black hole mergers</li>
                  <li>Potential detection of primordial gravitational waves</li>
                  <li>Tests of general relativity in strong fields</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="future-vision">
            <h3>The Next Frontier</h3>
            <p>
              Future missions will combine electromagnetic observations with
              gravitational wave detections and particle physics experiments to
              create a multi-messenger view of the Universe. Key goals include:
            </p>
            <ul className="vision-list">
              <li>
                Direct detection of primordial gravitational waves from cosmic
                inflation
              </li>
              <li>Understanding the nature of dark matter and dark energy</li>
              <li>Mapping the Universe back to the first 100 million years</li>
              <li>
                Testing fundamental physics in extreme cosmic environments
              </li>
              <li>
                Searching for signs of life in the atmospheres of potentially
                habitable exoplanets
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <h3>Expanding Human Knowledge</h3>
            <p>
              Through these groundbreaking missions, NASA continues to push the
              boundaries of human understanding, revealing the Universe's
              deepest secrets and our place within it.
            </p>
            <div className="footer-links">
              <a
                href="https://nasa.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Official Site
              </a>
              <a
                href="https://jwst.nasa.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                James Webb Space Telescope
              </a>
              <a
                href="https://planck.caltech.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Planck Mission
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
