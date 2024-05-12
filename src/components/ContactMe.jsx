import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";

export default function ContactMe() {
  const form = useRef();
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Options for the react-select component
  const options = [
    { value: "driveway-cleaning", label: "Driveway Cleaning" },
    { value: "patio-washing", label: "Patio Washing" },
    { value: "window-cleaning", label: "Window Cleaning" },
    { value: "commercial-service", label: "Commercial Service" },
    { value: "other", label: "Other" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "56px",
      fontSize: "16px",
      color: "black",
      backgroundColor: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "black",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "black",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 8px",
      color: "black",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "lightgray",
      color: "black",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "black",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "lightgray" : "#f1eded",
      color: "black",
    }),
  };

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the native form submission

    // Prepare services data for email
    const services = selectedOptions.map((option) => option.label).join(", ");

    // Check if the hidden input for services already exists
    let servicesInput = form.current.querySelector('input[name="services"]');
    if (servicesInput) {
      servicesInput.value = services; // Update existing input
    } else {
      // Create a new hidden input for services if it doesn't exist
      servicesInput = document.createElement("input");
      servicesInput.type = "hidden";
      servicesInput.name = "services";
      servicesInput.value = services;
      form.current.appendChild(servicesInput);
    }

    emailjs
      .sendForm(
        "service_qhq2uzo",
        "template_uw8hc8c",
        form.current,
        "2f33Ymo02d8DFKvSh"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert(
            "Failed to send the message, please try again later or contact us directly."
          );
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--container">
        <div className="contact-text">
          <h2>Contact Us!</h2>
          <p>
            Ready for a cleaner property? Contact Driveway Blasters LLC today!
            Call us or fill out our online form to get a free quote and see how
            we can make your space shine. We’re here to help with all your
            pressure washing needs in <b>Los Angeles County</b>,{" "}
            <b>Orange County</b>, and
            <b> Riverside County</b>.
          </p>
          <p>
            <b>Eric: </b> (949) 484-3698 <br />
            <b>Jeremy:</b> (949) 540-8402
          </p>
          <h4>
            <b>Or fill out the form below:</b>
          </h4>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact--form--container"
        >
          <div className="contact-details">
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
            <label htmlFor="services-select" className="contact--label">
              <span className="text-md input-text">Service Required</span>
              <Select
                id="services-select"
                styles={customStyles}
                options={options}
                isMulti
                closeMenuOnSelect={false}
                onChange={handleSelectChange}
                placeholder="Select one or more services..."
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </label>
            <label htmlFor="service-date" className="contact--label">
              <span className="text-md input-text">Preferred Service Date</span>
              <input
                type="date"
                className="contact--input text-md"
                name="service-date"
                id="service-date"
                required
              />
            </label>
            <label htmlFor="message" className="contact--label-message">
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
      </div>
    </section>
  );
}
