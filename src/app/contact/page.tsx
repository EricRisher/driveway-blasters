'use client';

import React, { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import Head from 'next/head';
import axios from 'axios';

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [fileBase64List, setFileBase64List] = useState<string[]>([]);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setIsRecaptchaVerified(!!token); // If token exists, it's verified
  };

  const handleSelectChange = (selected: any) => {
    setSelectedOptions(selected);
  };

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

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      alert('❌ No files selected.');
      return;
    }

    setIsUploading(true); // ✅ Show loader while uploading
    console.log(`📤 Uploading ${files.length} files...`);

    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'pbkdh7tv'); // Ensure this matches your Cloudinary settings

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dt08t901r/image/upload`,
          formData,
        );

        if (response.data.secure_url) {
          uploadedUrls.push(response.data.secure_url); // ✅ Store uploaded image URLs
        } else {
          console.error('❌ Upload failed: No `secure_url` returned.');
        }
      } catch (error: any) {
        console.error('❌ Upload Error:', error.response?.data || error);
        alert(
          `Upload failed: ${error.response?.data?.error?.message || error.message}`,
        );
      }
    }

    setFileBase64List((prev) => [...prev, ...uploadedUrls]);
    setIsUploading(false); // ✅ Hide loader after all uploads complete
  };

const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!recaptchaToken) {
    alert('Please complete the reCAPTCHA before submitting.');
    return;
  }

  console.log('📩 Preparing Email...');

  if (!form.current) {
    console.error('❌ Form reference is null.');
    return;
  }

  // ✅ Ensure correct type when accessing form fields
  const getInputValue = (name: string) => {
    const input = form.current?.elements.namedItem(
      name,
    ) as HTMLInputElement | null;
    return input?.value || ''; // Return value or empty string to avoid undefined
  };

  const emailParams = {
    name: getInputValue('name'),
    email: getInputValue('email'),
    number: getInputValue('number'),
    address: getInputValue('address'),
    services: selectedOptions.map((option) => option.label).join(', '),
    service_date: getInputValue('service-date'),
    message: getInputValue('message'),
    attachments: fileBase64List
      .map(
        (url) =>
          `<img src="${url}" alt="Uploaded Image" style="max-width: 500px; height: auto; border-radius: 8px;"/>`,
      )
      .join('<br/>'),
    'g-recaptcha-response': recaptchaToken,
  };

  console.log('🚀 Sending Email with Data:', emailParams);

  try {
    const response = await emailjs.send(
      'service_qhq2uzo',
      'template_uw8hc8c',
      emailParams,
      '2f33Ymo02d8DFKvSh',
    );

    if (response.status === 200) {
      alert('✅ Message sent successfully!');
    } else {
      alert('❌ Failed to send the message. Please try again later.');
    }
  } catch (error) {
    console.error('❌ Email send error:', error);
    alert('❌ Failed to send the message. Please refresh and try again.');
  }
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
          <span style={{ color: 'red' }}>*</span> indicates required fields
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
            <span className="text-md input-text">
              Contact Details <span style={{ color: 'red' }}>*</span>
            </span>
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
                required
              />
            </label>
            <label htmlFor="service-address" className="contact--label mt-4">
              <span className="text-md input-text">
                Service Address <span style={{ color: 'red' }}>*</span>
              </span>
              <input
                type="address"
                placeholder="Address"
                className="contact--input text-md"
                name="address"
                id="service-address"
              />
              <div className="city-state-container">
                <input
                  type="city"
                  placeholder="City"
                  className="contact--input text-md flex-1"
                  name="city"
                  id="city"
                />
                <input
                  type="state"
                  placeholder="State"
                  className="contact--input text-md flex-1"
                  name="state"
                  id="state"
                  required
                />
              </div>

              <input
                type="zip"
                placeholder="Zip Code"
                className="contact--input text-md"
                name="zip"
                id="zip"
              />
            </label>
          </div>
          <div className="contact-wrapper">
            <label htmlFor="services-select" className="contact--label">
              <span className="text-md input-text">
                Service Required <span style={{ color: 'red' }}>*</span>
              </span>
              <Select
                id="services-select"
                styles={customStyles}
                options={options}
                isMulti
                closeMenuOnSelect={false}
                onChange={handleSelectChange}
                placeholder="Select one or more..."
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
              />
            </label>
            <label htmlFor="message" className="contact--label-message pt-3">
              <span className="text-md input-text">
                Notes <span style={{ color: 'red' }}>*</span>
              </span>
              <textarea
                className="contact--input text-md contact-message"
                id="message"
                rows={5}
                placeholder="Additional Details..."
                name="message"
                required
              />
            </label>
            <label htmlFor="file-upload" className="contact--label">
              <span className="text-md input-text">Upload Photo(s)</span>
              <p className="ml-2 text-sm">
                If you have any relevant photos that will help us understand
                your needs please upload them here. <br />
              </p>
              <input
                type="file"
                className="contact--input text-md"
                id="file-upload"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
              />
              {fileBase64List.length > 0 && (
                <div className="image-preview">
                  <p className="input-text">Image Preview:</p>
                  <div className="preview-container">
                    {fileBase64List.map((fileBase64, index) => (
                      <img
                        key={index}
                        src={fileBase64}
                        alt={`Uploaded Preview ${index + 1}`}
                        className="preview-image"
                      />
                    ))}
                  </div>
                  {isUploading && (
                    <div className="loader-container">
                      <div className="spinner"></div>
                      <p>Uploading images, please wait...</p>
                    </div>
                  )}
                </div>
              )}
            </label>
          </div>

          <ReCAPTCHA
            sitekey="6Le69fMqAAAAADt2Mkj5kvDZw36bcWrJZWaGirj3"
            onChange={handleRecaptchaChange}
            className="align-self-center py-4"
          />
          <input
            type="submit"
            value={isUploading ? 'Uploading Images...' : 'Submit'}
            className={`button btn-primary form-btn align-self-center ${isUploading ? 'disabled' : ''}`}
            disabled={isUploading}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
