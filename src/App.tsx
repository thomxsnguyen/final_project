import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="nav-logo-text">PHYSICS 20B</span>
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
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="title-page">
        <div className="title-container">
          <div className="nasa-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
              alt="NASA Logo"
              className="nasa-logo-img"
            />
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
              <div className="mission-image">
                <img
                  src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=300&fit=crop&crop=center"
                  alt="James Webb Space Telescope"
                />
              </div>
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
              <div className="mission-image">
                <img
                  src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&h=300&fit=crop&crop=center"
                  alt="Planck Space Observatory"
                />
              </div>
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
              <div className="mission-image">
                <img
                  src="https://images.unsplash.com/photo-1564053489984-317bbd824340?w=600&h=300&fit=crop&crop=center"
                  alt="WMAP Satellite"
                />
              </div>
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
              <div className="mission-image">
                <img
                  src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop&crop=center"
                  alt="Spitzer Space Telescope"
                />
              </div>
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
            <div className="cmb-hero-image">
              <img
                src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1200&h=600&fit=crop&crop=center"
                alt="Cosmic Microwave Background visualization"
              />
              <div className="image-overlay">
                <p>
                  Artist's visualization of the cosmic microwave background
                  showing temperature fluctuations
                </p>
              </div>
            </div>
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
                <div className="revelation-image">
                  <img
                    src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop&crop=center"
                    alt="Early galaxies"
                  />
                </div>
                <h4>First Galaxies</h4>
                <p>
                  JWST has observed galaxies that formed when the Universe was
                  only 400-600 million years old. These early galaxies are
                  surprisingly massive and well-formed, challenging our
                  understanding of how quickly cosmic structures could assemble.
                </p>
              </div>

              <div className="revelation-card">
                <div className="revelation-image">
                  <img
                    src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&crop=center"
                    alt="Cosmic reionization"
                  />
                </div>
                <h4>Reionization Era</h4>
                <p>
                  The period when the first stars and galaxies formed and began
                  ionizing the neutral hydrogen in the Universe. JWST
                  observations are providing direct evidence of this crucial
                  transition that transformed the cosmos from dark to luminous.
                </p>
              </div>

              <div className="revelation-card">
                <div className="revelation-image">
                  <img
                    src="https://images.unsplash.com/photo-1614729939124-032f76c20c99?w=400&h=250&fit=crop&crop=center"
                    alt="Dark matter simulation"
                  />
                </div>
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
              <div className="gallery-image">
                <img
                  src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop&crop=center"
                  alt="Cosmic Microwave Background Map"
                />
              </div>
              <h4>Cosmic Microwave Background</h4>
              <p>
                The most detailed map of the CMB showing temperature
                fluctuations that seeded cosmic structure
              </p>
            </div>

            <div className="gallery-item">
              <div className="gallery-image">
                <img
                  src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop&crop=center"
                  alt="JWST Deep Field"
                />
              </div>
              <h4>JWST Deep Field</h4>
              <p>
                The deepest infrared view of the Universe, showing galaxies as
                they existed billions of years ago
              </p>
            </div>

            <div className="gallery-item">
              <div className="gallery-image">
                <img
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=300&fit=crop&crop=center"
                  alt="Universe Timeline"
                />
              </div>
              <h4>Universe Timeline</h4>
              <p>
                From the Big Bang through cosmic inflation, CMB release, to
                first stars and galaxies
              </p>
            </div>

            <div className="gallery-item">
              <div className="gallery-image">
                <img
                  src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop&crop=center"
                  alt="Large Scale Structure"
                />
              </div>
              <h4>Cosmic Web</h4>
              <p>
                The filamentary structure of dark matter that forms the backbone
                of the Universe
              </p>
            </div>

            <div className="gallery-item">
              <div className="gallery-image">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                  alt="Nebula Formation"
                />
              </div>
              <h4>Star Formation Regions</h4>
              <p>
                Stunning nebulae where new stars are born, captured by space
                telescopes
              </p>
            </div>

            <div className="gallery-item">
              <div className="gallery-image">
                <img
                  src="https://images.unsplash.com/photo-1564053489984-317bbd824340?w=400&h=300&fit=crop&crop=center"
                  alt="Galaxy Cluster"
                />
              </div>
              <h4>Galaxy Clusters</h4>
              <p>
                Massive collections of galaxies bound together by gravity and
                dark matter
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
              <div className="future-image">
                <img
                  src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&h=250&fit=crop&crop=center"
                  alt="Roman Space Telescope concept"
                />
              </div>
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
              <div className="future-image">
                <img
                  src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=250&fit=crop&crop=center"
                  alt="CMB-S4 observatory concept"
                />
              </div>
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
              <div className="future-image">
                <img
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&h=250&fit=crop&crop=center"
                  alt="LISA concept"
                />
              </div>
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
            <div className="vision-image">
              <img
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop&crop=center"
                alt="Future space exploration"
              />
            </div>
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
