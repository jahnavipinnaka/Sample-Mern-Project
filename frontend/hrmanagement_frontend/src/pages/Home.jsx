import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "./Home.css";

function Home() {
  const slides = [
    {
      image: img1,
      title: "Manage Tasks Smarter",
      description:
        "Organize your work, simplify your workflow, and achieve more every day.",
    },
    {
      image: img2,
      title: "Work Better Together",
      description:
        "Bring your team together and keep every task moving forward.",
    },
    {
      image: img3,
      title: "Turn Plans Into Progress",
      description:
        "Stay focused, track your goals, and make every moment productive.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="container home-container">
        <div
          id="homeCarousel"
          className="carousel slide carousel-fade home-carousel"
          data-bs-ride="carousel"
          data-bs-interval="4500"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
              >
                <img
                  src={slide.image}
                  className="d-block w-100 home-slide-image"
                  alt={slide.title}
                />

                <div className="home-slide-overlay">
                  <div className="home-slide-content">
                    <span className="home-eyebrow">
                      WELCOME TO TASKFLOW
                    </span>

                    <h1>{slide.title}</h1>

                    <p>{slide.description}</p>

                    <div className="home-hero-actions">
                      <Link
                        to="/services"
                        className="btn home-primary-btn"
                      >
                        Explore Services
                        <span aria-hidden="true"> →</span>
                      </Link>

                      <Link
                        to="/about"
                        className="btn home-secondary-btn"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev home-carousel-control"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next home-carousel-control"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container home-features">
        <div className="text-center mb-5">
          <span className="home-section-label">WHY TASKFLOW?</span>
          <h2 className="home-section-title">
            Everything You Need to Stay Productive
          </h2>
          <p className="home-section-description">
            A simple way to organize tasks, manage teams, and get
            things done.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="home-feature-card">
              <div className="home-feature-icon">✓</div>
              <h5>Task Management</h5>
              <p>
                Organize daily work and keep track of your tasks in
                one convenient place.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="home-feature-card">
              <div className="home-feature-icon">◎</div>
              <h5>Team Collaboration</h5>
              <p>
                Help HR teams and employees stay aligned on
                assignments and responsibilities.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="home-feature-card">
              <div className="home-feature-icon">↗</div>
              <h5>Track Progress</h5>
              <p>
                Stay focused on your goals and move your work
                forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;