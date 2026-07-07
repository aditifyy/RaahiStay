import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <section className="contact-page">
        <div className="contact-left">
          <p className="section-tag">GET IN TOUCH</p>

          <h1>Let's Plan Your Next Escape</h1>

          <p>
            Have questions, recommendations or a dream destination in mind?
            We'd love to hear from you.
          </p>

          <div className="contact-details">
            <p>📍 Dehradun, India</p>
            <p>✉ hello@raahistay.com</p>
            <p>☎ +91 98765 43210</p>
            <p>📸 @raahistay</p>
          </div>
        </div>

        <div className="contact-card">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <textarea
            placeholder="Write your message here..."
            rows="5"
          ></textarea>

          <button>Send Message</button>
        </div>
      </section>

      <div className="contact-info">
        <div className="info-item">
          🌿 Instagram
          <span>@raahistay</span>
        </div>

        <div className="info-item">
          ✉️ Email
          <span>hello@raahistay.com</span>
        </div>

        <div className="info-item">
          ☎ WhatsApp
          <span>+91 98765 43210</span>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;