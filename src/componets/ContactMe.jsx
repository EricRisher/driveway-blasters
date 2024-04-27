import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the native form submission

    emailjs
      .sendForm(
        "service_224p4me",
        "template_uw8hc8c",
        form.current,
        "2f33Ymo02d8DFKvSh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact-text">
        <h2>Contact Us!</h2>
        <p>
          Ready for a cleaner property? Contact Driveway Blasters LLC today!
          Call us or fill out our online form to get a free quote and see how we
          can make your space shine. We’re here to help with all your pressure
          washing needs in <b>Los Angeles County</b>, <b>Orange County</b>, and
          <b> Riverside County</b>.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="contact-container">
          <label htmlFor="name" className="contact--label">
            <input
              type="text"
              placeholder="Full Name*"
              className="contact--input text-md"
              name="name"
              id="name"
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <input
              type="email"
              placeholder="Email*"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <input
              type="number"
              placeholder="Phone Number*"
              className="contact--input text-md"
              name="number"
              id="phone-number"
            />
          </label>
          <label htmlFor="service-address" className="contact--label">
            <input
              type="address"
              placeholder="Service Address*"
              className="contact--input text-md"
              name="address"
              id="service-address"
            />
          </label>
        </div>
        <div className="contact-wrapper">
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Service Required</span>
            <select
              id="choose-topic"
              className="contact--input text-md"
              name="topic"
            >
              <option>Select One...</option>
              <option>Driveway Cleaning</option>
              <option>Patio Washing</option>
              <option>Window Cleaning</option>
              <option>Commercial Service</option>
              <option>Other</option>
            </select>
          </label>
          <label htmlFor="service-date" className="contact--label">
            <span className="text-md">Preferred Service Date</span>
            <input
              type="date"
              className="contact--input text-md"
              name="service-date"
              id="service-date"
              required
            />
          </label>
          <label htmlFor="message" className="contact--label">
            <textarea
              className="contact--input text-md"
              id="message"
              rows="3"
              cols={50}
              placeholder="Type your message..."
              name="message"
              required
            />
          </label>
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-primary contact--form--btn"
        ></input>
      </form>
    </section>
  );
}
