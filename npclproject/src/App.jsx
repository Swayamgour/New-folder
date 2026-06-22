import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaGlobe, FaEnvelope, FaPhone, FaBuilding, FaSchool, FaMapMarkerAlt,
  FaGraduationCap, FaFlask, FaAtom, FaClock, FaBrush, FaUsers, FaRupeeSign,
  FaHome, FaStar, FaBriefcase, FaUserGraduate, FaAward, FaHands, FaMicroscope,
  FaCertificate, FaChalkboardTeacher, FaUniversity, FaTools, FaArrowRight,
  FaPlay, FaQuoteRight, FaCalendarCheck, FaShieldAlt, FaRocket, FaLightbulb,
  FaNetworkWired, FaTree, FaBookReader, FaChevronDown, FaGem,
  FaPalette, FaLeaf, FaCrown, FaPause
} from "react-icons/fa";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Import your images
import image from './assets/images/unnamed.webp';
import image1 from './assets/images/unnamed(1).webp';
import image2 from './assets/images/unnamed(2).webp';
import image3 from './assets/images/unnamed(3).webp';
import image4 from './assets/images/unnamed(4).webp';

// Import your video
import heroVideo from './assets/images/2.mp4'; // Add your video file here

const images = [image, image1, image2, image3, image4];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Observer for reveal elements
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));

    // Observer for card-animate elements
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.style.animationDelay || 0) * 1000;
            setTimeout(() => {
              el.style.opacity = "1";
              el.classList.add("visible");
            }, delay);
            cardObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".card-animate").forEach((el) => {
      el.style.opacity = "0";
      cardObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const toggleVideo = () => {
    const video = document.getElementById('heroVideo');
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <div className="logo">
            <div className="logo-icon"><FaUniversity /></div>
            <span style={{ color: 'white' }}>NRLC <span className="highlight">Institute</span></span>
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="active">Home</a>
            <a href="#programs">Programs</a>
            <a href="#facilities">Facilities</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <a href="#apply" className="btn-nav">Apply Now <FaArrowRight /></a>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        {/* Background Video */}
        <div className="hero-video-container">
          <video
            id="heroVideo"
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster={images[0]}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>

          {/* Video Controls */}
          <button className="video-control-btn" onClick={toggleVideo}>
            {isVideoPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="container hero-wrapper">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span> Ministry of Culture · Govt. of India
            </div>
            <h1 className="hero-title">
              <span className="line">Preserving Heritage,</span>
              <span className="line highlight">Inspiring Excellence</span>
            </h1>
            <p className="hero-desc">
              National Research Laboratory for Conservation — India's premier institution for
              scientific heritage conservation, research, and advanced training.
            </p>
            <div className="hero-actions">
              <button className="btn-primary"><FaGraduationCap /> Explore Programs</button>
              <button className="btn-glass"><FaPlay /> Virtual Tour</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><span className="num">30+</span><span className="label">Years</span></div>
              <div className="stat-item"><span className="num">500+</span><span className="label">Alumni</span></div>
              <div className="stat-item"><span className="num">40</span><span className="label">Seats</span></div>
              <div className="stat-item"><span className="num">₹1K</span><span className="label">Stipend</span></div>
            </div>
          </div>

          {/* Right Image */}

        </div>
        <div className="scroll-indicator"><FaChevronDown /></div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="section programs" id="programs">
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Flagship Program</span>
            <h2 className="sec-title">Certificate Course in Conservation</h2>
            <p className="subtitle">A comprehensive 6‑month program combining scientific methodology with hands‑on training</p>
          </div>

          <div className="programs-grid">
            <div className="program-card primary card-animate" style={{ animationDelay: "0.05s" }}>
              <div className="badge"><FaStar /> Flagship</div>
              <h3>Six‑Month Certificate in Conservation of Cultural Property</h3>
              <p>Rigorous training with limited seats for personalized guidance from expert conservators.</p>
              <div className="features">
                <span><FaUsers /> 30 Seats</span>
                <span><FaRupeeSign /> ₹1,000 Stipend</span>
                <span><FaHome /> Hostel Available</span>
              </div>
            </div>

            <div className="program-card card-animate" style={{ animationDelay: "0.15s" }}>
              <div className="icon"><FaFlask /></div>
              <h4>Research Programs</h4>
              <p>Advanced research in material analysis, dating, and restoration science.</p>
              <a href="#" className="link">Explore <FaArrowRight /></a>
            </div>

            <div className="program-card card-animate" style={{ animationDelay: "0.25s" }}>
              <div className="icon"><FaBookReader /></div>
              <h4>Internship Opportunities</h4>
              <p>Hands‑on experience with stipend support alongside the certificate course.</p>
              <a href="#" className="link">Explore <FaArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FACILITIES ===== */}
      <section className="section facilities" id="facilities">
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Campus & Facilities</span>
            <h2 className="sec-title">World‑Class Infrastructure</h2>
          </div>

          <div className="facilities-grid">
            {[
              { icon: FaMicroscope, title: "Advanced Labs", desc: "State‑of‑the‑art research laboratories" },
              { icon: FaTree, title: "Green Campus", desc: "Eco‑friendly campus with lush greenery" },
              { icon: FaBookReader, title: "Library", desc: "Extensive collection of conservation resources" },
              { icon: FaUsers, title: "Hostel", desc: "Comfortable on‑campus accommodation" },
            ].map((item, i) => (
              <div key={i} className="facility-card card-animate" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="icon"><item.icon /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="gallery-grid">
            {images.slice(0, 4).map((img, i) => (
              <div key={i} className="gallery-item card-animate" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <img src={img} alt="" />
                <div className="overlay"><span>{["Research Lab", "Training Wing", "Campus View", "Conservation Lab"][i]}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about" id="about">
        <div className="container about-wrapper">
          <div className="about-content reveal">
            <span className="tag">About NRLC</span>
            <h2 className="sec-title">India's Premier Conservation Institute</h2>
            <p className="about-text">
              Established under the Ministry of Culture, NRLC has been at the forefront of
              scientific heritage conservation for over three decades. Our mission is to preserve
              India's rich cultural heritage through research, training, and innovation.
            </p>
            <div className="about-stats">
              <div><span className="num">40+</span><span className="label">Years Legacy</span></div>
              <div><span className="num">3</span><span className="label">Campuses</span></div>
              <div><span className="num">1000+</span><span className="label">Projects</span></div>
            </div>
            <button className="btn-primary">Learn More About Us</button>
          </div>

          <div className="about-features">
            {[
              { icon: FaShieldAlt, title: "Government Recognition", desc: "Premier institution under Ministry of Culture" },
              { icon: FaChalkboardTeacher, title: "Expert Faculty", desc: "Learn from experienced conservators" },
              { icon: FaHands, title: "Hands‑on Training", desc: "Practical work with real artifacts" },
              { icon: FaCertificate, title: "Industry Certification", desc: "Recognized certification for career advancement" },
            ].map((item, i) => (
              <div key={i} className="feature-block card-animate" style={{ animationDelay: `${0.05 + i * 0.1}s` }}>
                <div className="icon"><item.icon /></div>
                <div><h4>{item.title}</h4><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section process">
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">How to Apply</span>
            <h2 className="sec-title">Simple Application Process</h2>
          </div>

          <div className="process-grid">
            {[
              { num: "01", title: "Check Eligibility", desc: "Master's in Chemistry, Fine Arts, Archaeology, or Museology" },
              { num: "02", title: "Download Form", desc: "Visit nrlc.gov.in or email trgnrlc@gmail.com" },
              { num: "03", title: "Submit Documents", desc: "Attested degrees, experience letters, and passport photo" },
              { num: "04", title: "Selection & Admission", desc: "Merit‑based selection with scholarship consideration" },
            ].map((step, i) => (
              <div key={i} className="process-step card-animate" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="eligibility-grid">
            <div className="eligibility-card">
              <FaUserGraduate />
              <div><h4>In‑Service Candidates</h4><p>Chemists, conservators, and restorers in museums, archives, and heritage bodies</p></div>
            </div>
            <div className="eligibility-card">
              <FaGraduationCap />
              <div><h4>Fresh Graduates</h4><p>Master's in Chemistry, Fine Arts, Archaeology, or Museology</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="tag">Student Voices</span>
            <h2 className="sec-title">What Our Alumni Say</h2>
          </div>

          <div className="testimonials-grid">
            {[
              { name: "Dr. Ananya Sharma", role: "Senior Conservator, National Museum", text: "The NRLC training program transformed my career. The hands‑on experience with real artifacts and expert real artifacts guidance is unmatched." },
              { name: "Rahul Verma", role: "Restoration Specialist, ASI", text: "The scientific approach to conservation taught at NRLC gave me a solid foundation. I recommend this course to every aspiring conservator." },
              { name: "Priya Patel", role: "Alumna, Batch 2024", text: "The scholarship and stipend support made this world‑class training accessible. The hostel facilities and campus environment are excellent." },
            ].map((item, i) => (
              <div key={i} className="testimonial-block card-animate" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <FaQuoteRight className="quote-icon" />
                <p className="text">{item.text}</p>
                <div className="author">
                  <div className="avatar">{item.name[0]}</div>
                  <div><div className="name">{item.name}</div><div className="role">{item.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section contact" id="contact">
        <div className="container contact-wrapper">
          <div className="contact-info reveal">
            <span className="tag">Get in Touch</span>
            <h2 className="sec-title">Contact Us</h2>
            <p className="contact-text">Have questions about admissions or programs? Reach out to us.</p>
            <div className="contact-details">
              {[
                { icon: FaMapMarkerAlt, label: "Address", value: "Sector-E/3, Aliganj Scheme, Lucknow 226024" },
                { icon: FaPhone, label: "Phone", value: "0522-273 5313" },
                { icon: FaEnvelope, label: "Email", value: "trgnrlc@gmail.com", link: "mailto:trgnrlc@gmail.com" },
                { icon: FaGlobe, label: "Website", value: "nrlc.gov.in", link: "https://nrlc.gov.in" },
              ].map((item, i) => (
                <div key={i} className="contact-item">
                  <div className="icon"><item.icon /></div>
                  <div><div className="label">{item.label}</div><div className="value">{item.link ? <a href={item.link}>{item.value}</a> : item.value}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form card-animate" style={{ animationDelay: "0.2s" }}>
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit" className="btn-primary">Send Message <FaArrowRight /></button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo">NRLC <span>Institute</span></div>
            <p>Preserving India's cultural heritage through scientific conservation and research.</p>
            <div className="social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div><h4>Quick Links</h4><ul><li><a href="#home">Home</a></li><li><a href="#programs">Programs</a></li><li><a href="#facilities">Facilities</a></li><li><a href="#about">About</a></li></ul></div>
            <div><h4>Programs</h4><ul><li><a href="#programs">Certificate Course</a></li><li><a href="#programs">Research</a></li><li><a href="#programs">Internships</a></li><li><a href="#programs">Workshops</a></li></ul></div>
            <div><h4>Resources</h4><ul><li><a href="#">Student Handbook</a></li><li><a href="#">Application Form</a></li><li><a href="#">Academic Calendar</a></li><li><a href="#">FAQs</a></li></ul></div>
          </div>
        </div>
        {/* <div className="footer-bottom">
          <p>&copy; 2025 NRLC Training Institute. All rights reserved.</p>
          <p>Made with <span className="heart">❤</span> for heritage</p>
        </div> */}
      </footer>
    </div>
  );
}

export default App;