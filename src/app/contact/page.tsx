'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import Head from 'next/head';

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);

  useEffect(() => {
    document.title = 'Driveway Blasters LLC - Contact Us';

    // Set the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get in touch with Driveway Blasters LLC for all your pressure washing needs. Contact us for a free quote today!',
      );
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content =
        'Get in touch with Driveway Blasters LLC for all your pressure washing needs. Contact us for a free quote today!';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const options = [
    { value: 'driveway-cleaning', label: 'Driveway Cleaning' },
    { value: 'patio-washing', label: 'Patio Washing' },
    { value: 'window-cleaning', label: 'Window Cleaning' },
    { value: 'commercial-service', label: 'Commercial Service' },
    { value: 'other', label: 'Other' },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: '56px',
      fontSize: '16px',
      color: 'black',
      backgroundColor: 'white',
    }),
    input: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: '0 8px',
      color: 'black',
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: 'lightgray',
      color: 'black',
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: 'black',
      ':hover': {
        backgroundColor: 'red',
        color: 'white',
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray' : '#f1eded',
      color: 'black',
    }),
  };

  const handleSelectChange = (selected: any) => {
    setSelectedOptions(selected);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const services = selectedOptions.map((option) => option.label).join(', ');

    let servicesInput = form.current?.querySelector(
      'input[name="services"]',
    ) as HTMLInputElement | null;
    if (servicesInput) {
      servicesInput.value = services;
    } else {
      servicesInput = document.createElement('input');
      servicesInput.type = 'hidden';
      servicesInput.name = 'services';
      servicesInput.value = services;
      form.current?.appendChild(servicesInput);
    }

    emailjs
      .sendForm(
        'service_qhq2uzo',
        'template_uw8hc8c',
        form.current!,
        '2f33Ymo02d8DFKvSh',
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        () => {
          alert(
            'Failed to send the message, please try again later or contact us directly.',
          );
        },
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <Head>
        <title>Driveway Blasters LLC - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Driveway Blasters LLC for all your pressure washing needs. Contact us for a free quote today!"
        />
      </Head>
      <div className="contact--container">
        <div className="contact-text">
          <h2>Get a Free Quote!</h2>
          <p>
            Ready for a cleaner property? Call us or fill out our online form to
            see how we can make your space shine. We’re here to help with all
            your pressure washing needs in <b>Orange County</b>, and{' '}
            <b>Riverside County</b>.
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
            <span className="text-md input-text">Contact Details</span>
            <label htmlFor="name" className="contact--label">
              <input
                type="text"
                placeholder="Full Name"
                className="contact--input text-md"
                name="name"
                id="name"
                required
              />
            </label>

            <label htmlFor="email" className="contact--label">
              <input
                type="email"
                placeholder="Email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <input
                type="tel"
                placeholder="Phone Number"
                className="contact--input text-md"
                name="number"
                id="phone-number"
              />
            </label>
            <label htmlFor="service-address" className="contact--label">
              <input
                type="address"
                placeholder="Service Address"
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
                className="basic-multi-select pt-1"
                classNamePrefix="select"
              />
            </label>
            <label htmlFor="service-date" className="contact--label pt-2">
              <span className="text-md input-text">Preferred Service Date</span>
              <input
                type="date"
                className="contact--input text-md"
                name="service-date"
                id="service-date"
                required
              />
            </label>
            <label htmlFor="message" className="contact--label-message pt-3">
              <textarea
                className="contact--input text-md"
                id="message"
                rows={5}
                placeholder="Additional Details..."
                name="message"
                required
              />
            </label>
          </div>

          <input
            type="submit"
            value="Submit"
            className="button btn-primary form-btn align-self-center"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
