import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaGlobe, FaEnvelope, FaPhone, FaMobileAlt, FaBullseye, FaBuilding,
  FaSchool, FaMapMarkerAlt, FaGraduationCap, FaInfoCircle, FaFlask,
  FaAtom, FaClock, FaBrush, FaUsers, FaRupeeSign, FaHome, FaStar,
  FaBriefcase, FaUserGraduate, FaAward, FaHands, FaMicroscope,
  FaBookOpen, FaCertificate, FaChalkboardTeacher, FaCalendarAlt,
  FaUniversity, FaRegBuilding, FaTools, FaHeart
} from "react-icons/fa";

import image from './assets/images/unnamed.webp';
import image1 from './assets/images/unnamed(1).webp';
import image2 from './assets/images/unnamed(2).webp';
import image3 from './assets/images/unnamed(3).webp';
import image4 from './assets/images/unnamed(4).webp';

// Placeholder images – replace with your actual imports
const images = [image, image1, image2, image3, image4];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for section titles & cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".sec-title").forEach((el) => observer.observe(el));

    // Card observer
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.style.animationDelay || 0) * 1000;
            setTimeout(() => { el.style.opacity = "1"; }, delay);
            cardObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(
      ".ov-card, .step-item, .elig-card, .feature-card, .testimonial-card, .reel-img"
    ).forEach((el) => {
      el.style.opacity = "0";
      cardObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-wrap">
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <FaUniversity />
            <span>NRLC <span className="highlight">Training</span></span>
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="active">Home</a>
            <a href="#gallery">Gallery</a>
            <a href="#overview">Overview</a>
            <a href="#courses">Courses</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <a href="#apply" className="btn-nav">Apply Now</a>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero-bg-grid">
          {images.map((img, i) => (
            <div key={i} className="hero-bg-item">
              <img src={img} alt="" />
            </div>
          ))}
        </div>
        <div className="hero-glow"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <div className="eyebrow-pill">
              <span className="eyebrow-dot"></span>
              Ministry of Culture · Govt. of India
            </div>
          </div>

          <h1 className="hero-title">
            NRLC <em>Training</em>
            <span className="line2">Institute</span>
          </h1>
          <div className="hero-line animate"></div>

          <p className="hero-sub">
            National Research Laboratory for Conservation of Cultural Property — India's premier
            institution for scientific heritage conservation, research, and advanced training.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">30</span>
              <span className="stat-lbl">Seats / Batch</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">6</span>
              <span className="stat-lbl">Month Course</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">₹1K</span>
              <span className="stat-lbl">Scholarship</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">40+</span>
              <span className="stat-lbl">Years Legacy</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-lbl">Alumni</span>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn-primary">
              <FaGraduationCap /> Apply Now
            </button>
            <button className="btn-secondary">
              <FaInfoCircle /> Scholarship Info
            </button>
          </div>

          <div className="scroll-hint">
            <i className="fas fa-chevron-down scroll-arrow"></i>
            <span>Explore the institute</span>
          </div>
        </div>
      </section>

      {/* ===== BODY WRAP ===== */}
      <div className="body-wrap">

        {/* GALLERY */}
        <section className="section" id="gallery">
          <div className="sec-eyebrow">Campus Gallery</div>
          <div className="sec-title">Our Facilities</div>
          <div className="campus-reel">
            {images.slice(0, 4).map((img, i) => (
              <div key={i} className="reel-img" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <img src={img} alt={`NRLC Campus ${i + 1}`} />
                <div className="img-label">
                  {["Main Campus", "Training Wing", "Jankipuram Centre", "Lab & Research"][i]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="section" id="overview">
          <div className="sec-eyebrow">Institute Overview</div>
          <div className="sec-title">Key Information</div>
          <div className="overview-cards">
            <div className="ov-card" style={{ animationDelay: "0.05s" }}>
              <div className="ov-icon"><FaBullseye /></div>
              <div className="ov-lbl">Primary Mandate</div>
              <div className="ov-val">Research, dating, material analysis & conservation training</div>
            </div>
            <div className="ov-card" style={{ animationDelay: "0.15s" }}>
              <div className="ov-icon"><FaBuilding /></div>
              <div className="ov-lbl">Headquarters</div>
              <div className="ov-val">Aliganj Scheme, Lucknow 226024, U.P.</div>
            </div>
            <div className="ov-card" style={{ animationDelay: "0.25s" }}>
              <div className="ov-icon"><FaSchool /></div>
              <div className="ov-lbl">Training Campus</div>
              <div className="ov-val">Sahara States Rd, Jankipuram, Lucknow 226021</div>
            </div>
            <div className="ov-card" style={{ animationDelay: "0.35s" }}>
              <div className="ov-icon"><FaMapMarkerAlt /></div>
              <div className="ov-lbl">Regional Centre</div>
              <div className="ov-val">Regional Conservation Laboratory, Mysuru</div>
            </div>
          </div>

          <div className="tags-row">
            <span className="tag-chip"><FaFlask /> Environmental Archaeology</span>
            <span className="tag-chip"><FaAtom /> Material Analysis</span>
            <span className="tag-chip"><FaClock /> Artifact Dating</span>
            <span className="tag-chip"><FaBrush /> Restoration Science</span>
            <span className="tag-chip"><FaMicroscope /> Scientific Research</span>
            <span className="tag-chip"><FaTools /> Conservation Techniques</span>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section">
          <div className="sec-eyebrow">Why Choose NRLC</div>
          <div className="sec-title">Institute Highlights</div>
          <div className="features-grid">
            <div className="feature-card" style={{ animationDelay: "0.05s" }}>
              <div className="feature-icon"><FaAward /></div>
              <h3>Government Recognition</h3>
              <p>Premier institution under the Ministry of Culture, Government of India</p>
            </div>
            <div className="feature-card" style={{ animationDelay: "0.15s" }}>
              <div className="feature-icon"><FaChalkboardTeacher /></div>
              <h3>Expert Faculty</h3>
              <p>Learn from experienced conservators and research scientists</p>
            </div>
            <div className="feature-card" style={{ animationDelay: "0.25s" }}>
              <div className="feature-icon"><FaHands /></div>
              <h3>Hands-on Training</h3>
              <p>Practical laboratory work with real artifacts and materials</p>
            </div>
            <div className="feature-card" style={{ animationDelay: "0.35s" }}>
              <div className="feature-icon"><FaCertificate /></div>
              <h3>Industry Certification</h3>
              <p>Recognized certification for career advancement in heritage conservation</p>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="section" id="courses">
          <div className="sec-eyebrow">Flagship Program</div>
          <div className="sec-title">Certificate Course</div>

          <div className="flagship">
            <div className="flagship-shimmer"></div>
            <div className="flagship-badge"><FaStar /> Flagship</div>
            <div className="flagship-title">Six-Month Certificate in<br />Conservation of Cultural Property</div>
            <div className="flagship-desc">
              A rigorous, structured program combining scientific methodology with hands-on
              laboratory training. Limited to 30 seats per batch to ensure personalised guidance
              from expert conservators and researchers.
            </div>
            <div className="perks-row">
              <div className="perk">
                <FaUsers />
                <div className="perk-v">30</div>
                <div className="perk-l">Seats / Batch</div>
              </div>
              <div className="perk">
                <FaRupeeSign />
                <div className="perk-v">₹1,000</div>
                <div className="perk-l">Monthly Scholarship</div>
              </div>
              <div className="perk">
                <FaHome />
                <div className="perk-v">Hostel</div>
                <div className="perk-l">On Campus</div>
              </div>
            </div>
          </div>

          <div className="sec-eyebrow" style={{ marginTop: "1.5rem" }}>Application Journey</div>
          <div className="sec-title">How to Apply</div>
          <div className="process-steps">
            <div className="step-item" style={{ animationDelay: "0.1s" }}>
              <div className="step-num">1</div>
              <div className="step-body">
                <div className="step-title">Check Eligibility</div>
                <div className="step-desc">Master's in Chemistry, Fine Arts, Archaeology, or Museology accepted.</div>
              </div>
            </div>
            <div className="step-item" style={{ animationDelay: "0.2s" }}>
              <div className="step-num">2</div>
              <div className="step-body">
                <div className="step-title">Download Application Form</div>
                <div className="step-desc">Visit nrlc.gov.in or write to trgnrlc@gmail.com</div>
              </div>
            </div>
            <div className="step-item" style={{ animationDelay: "0.3s" }}>
              <div className="step-num">3</div>
              <div className="step-body">
                <div className="step-title">Submit Documents</div>
                <div className="step-desc">Attested degrees, experience letters, and passport photo.</div>
              </div>
            </div>
            <div className="step-item" style={{ animationDelay: "0.4s" }}>
              <div className="step-num">4</div>
              <div className="step-body">
                <div className="step-title">Selection & Admission</div>
                <div className="step-desc">Merit-based selection with scholarship consideration.</div>
              </div>

              
            </div>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="section">
          <div className="sec-eyebrow">Admissions</div>
          <div className="sec-title">Eligibility Criteria</div>
          <div className="elig-grid">
            <div className="elig-card">
              <div className="elig-head">
                <FaBriefcase />
                <span>In-Service Candidates</span>
              </div>
              <ul>
                <li>Chemists working in museums</li>
                <li>Conservators in archives or libraries</li>
                <li>Restorers in registered heritage bodies</li>
              </ul>
            </div>
            <div className="elig-card">
              <div className="elig-head">
                <FaUserGraduate />
                <span>Fresh Graduates</span>
              </div>
              <ul>
                <li>Master's in Chemistry or Fine Arts</li>
                <li>M.A. in Archaeology or Museology</li>
                <li>PG Diploma — Archaeology & Museology</li>
              </ul>
            </div>
          </div>
          <div className="note-box">
            <strong>Note:</strong> Internship opportunities with stipend support are also available alongside the certificate course.
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" id="testimonials">
          <div className="sec-eyebrow">Student Voices</div>
          <div className="sec-title">What Our Alumni Say</div>
          <div className="testimonials-grid">
            <div className="testimonial-card" style={{ animationDelay: "0.1s" }}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                The NRLC training program transformed my career. The hands-on experience with real artifacts
                and expert guidance is unmatched.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div>
                  <div className="author-name">Dr. Ananya Sharma</div>
                  <div className="author-role">Senior Conservator, National Museum</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" style={{ animationDelay: "0.2s" }}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                The scientific approach to conservation taught at NRLC gave me a solid foundation.
                I recommend this course to every aspiring conservator.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">R</div>
                <div>
                  <div className="author-name">Rahul Verma</div>
                  <div className="author-role">Restoration Specialist, ASI</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" style={{ animationDelay: "0.3s" }}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                The scholarship and stipend support made this world-class training accessible.
                The hostel facilities and campus environment are excellent.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">P</div>
                <div>
                  <div className="author-name">Priya Patel</div>
                  <div className="author-role">Alumna, Batch 2024</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="sec-eyebrow">Get in Touch</div>
          <div className="sec-title">Contact Us</div>
          <div className="contact-dark">
            <div className="ct-title">Admissions & Academic Queries</div>
            <div className="ct-grid">
              <div className="ct-item">
                <div className="ct-icon"><FaGlobe /></div>
                <div>
                  <div className="ct-lbl">Website</div>
                  <div className="ct-val">
                    <a href="https://nrlc.gov.in" target="_blank" rel="noopener noreferrer">nrlc.gov.in</a>
                  </div>
                </div>
              </div>
              <div className="ct-item">
                <div className="ct-icon"><FaEnvelope /></div>
                <div>
                  <div className="ct-lbl">Email</div>
                  <div className="ct-val"><a href="mailto:trgnrlc@gmail.com">trgnrlc@gmail.com</a></div>
                </div>
              </div>
              <div className="ct-item">
                <div className="ct-icon"><FaPhone /></div>
                <div>
                  <div className="ct-lbl">Jankipuram Campus</div>
                  <div className="ct-val">0522-273 5313</div>
                </div>
              </div>
              <div className="ct-item">
                <div className="ct-icon"><FaMobileAlt /></div>
                <div>
                  <div className="ct-lbl">Training Coordinator</div>
                  <div className="ct-val">9450418423</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer-strip">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">NRLC <span>Training</span></div>
            <div className="footer-sub">Ministry of Culture, Government of India</div>
            <div className="footer-address">
              <p><FaMapMarkerAlt className="footer-icon" /> Sector-E/3, Aliganj Scheme, Lucknow 226024</p>
              <p><FaPhone className="footer-icon" /> 0522-273 5313 (Jankipuram Campus)</p>
              <p><FaEnvelope className="footer-icon" /> <a href="mailto:trgnrlc@gmail.com">trgnrlc@gmail.com</a></p>
              <p><FaGlobe className="footer-icon" /> <a href="https://nrlc.gov.in" target="_blank" rel="noopener noreferrer">nrlc.gov.in</a></p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#overview">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#apply">Apply Now</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#courses">Certificate Course</a></li>
              <li><a href="#courses">Conservation Training</a></li>
              <li><a href="#courses">Research Programs</a></li>
              <li><a href="#courses">Internship Opportunities</a></li>
              <li><a href="#courses">Scholarship Programs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Student Handbook</a></li>
              <li><a href="#">Application Form</a></li>
              <li><a href="#">Academic Calendar</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
         
          <div  className="footer-copyright">
            <p>&copy; 2025 NRLC Training Institute. All rights reserved.</p>
            <p className="footer-credit">Designed with <span className="footer-heart">❤</span> for heritage</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;