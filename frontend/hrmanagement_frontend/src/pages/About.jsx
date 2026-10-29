
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container text-center">
          <span className="about-badge">ABOUT TASKFLOW</span>

          <h1>
            Helping Teams Work <span>Smarter</span>
          </h1>

          <p>
            TaskFlow makes task management simple, organized, and
            efficient. We help HR teams and employees stay connected,
            manage responsibilities, and achieve their goals.
          </p>

          <Link to="/services" className="btn about-hero-btn">
            Explore Our Services →
          </Link>
        </div>
      </section>

      {/* About Content */}
      <section className="container about-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-visual">
              <div className="about-visual-icon">✓</div>
              <h3>Plan. Organize. Achieve.</h3>
              <p>
                Every task matters. Make every day more productive
                with a clear plan and a focused team.
              </p>

              <div className="about-progress">
                <span></span>
              </div>
              <small>Progress starts with good planning.</small>
            </div>
          </div>

          <div className="col-lg-6">
            <span className="about-section-label">WHO WE ARE</span>

            <h2 className="about-section-title">
              Making Work Easier, One Task at a Time
            </h2>

            <p className="about-description">
              TaskFlow is a task management application designed to
              help teams coordinate their work in one place. HR
              professionals can assign tasks, while employees can
              organize and track their responsibilities.
            </p>

            <p className="about-description">
              Our goal is to create a smoother workflow, improve
              collaboration, and make everyday work easier to manage.
            </p>

            <Link to="/contact" className="btn about-contact-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-section-label">
              WHAT WE STAND FOR
            </span>

            <h2 className="about-section-title">
              Our Core Values
            </h2>

            <p className="about-description mx-auto">
              The principles behind a more organized and productive
              workplace.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="about-value-card">
                <div className="about-value-icon">◎</div>
                <h4>Simplicity</h4>
                <p>
                  Keep task management clear, intuitive, and easy
                  for everyone to use.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="about-value-card">
                <div className="about-value-icon">↗</div>
                <h4>Productivity</h4>
                <p>
                  Help individuals and teams stay focused on their
                  priorities and goals.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="about-value-card">
                <div className="about-value-icon">♡</div>
                <h4>Collaboration</h4>
                <p>
                  Encourage better communication between managers
                  and employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container about-mission">
        <div className="about-mission-box text-center">
          <h2>Our Mission</h2>

          <p>
            To simplify task management and help every team work
            together with clarity, confidence, and purpose.
          </p>

          <Link to="/" className="btn about-mission-btn">
            Back to Home →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
