import React, { useState } from "react";

const universityData = {
  USA: ["Harvard University", "Stanford University", "MIT"],
  Canada: ["University of Toronto", "McGill University", "University of British Columbia"],
  Australia: ["University of Sydney", "Monash University", "University of Melbourne"],
  UK: ["University of Oxford", "University of Cambridge", "Imperial College London"],
  Germany: ["LMU Munich", "TU Berlin", "Heidelberg University"],
};

const AdmissionModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { university: "" }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="admission-modal__overlay">
      <div className="admission-modal__container">
        <button className="admission-modal__close-btn" onClick={onClose}>×</button>
        <h2 className="admission-modal__title">Get Your Admission</h2>
        <form className="admission-modal__form" onSubmit={handleSubmit}>
          <input
            className="admission-modal__input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="admission-modal__input"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="admission-modal__input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            className="admission-modal__select"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {Object.keys(universityData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            className="admission-modal__select"
            name="university"
            value={form.university}
            onChange={handleChange}
            required
            disabled={!form.country}
          >
            <option value="">Select University</option>
            {form.country &&
              universityData[form.country].map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
          </select>
          <button type="submit" className="admission-modal__submit-btn">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .admission-modal__overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .admission-modal__container {
          background: #fff;
          padding: 2rem;
          width: 100%;
          max-width: 600px;
          border-radius: 12px;
          position: relative;
          animation: fadeIn 0.3s ease-in-out;
        }

        .admission-modal__title {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .admission-modal__form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .admission-modal__input,
        .admission-modal__select {
          padding: 0.8rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .admission-modal__submit-btn {
          background-color: #032b66;
          color: white;
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .admission-modal__close-btn {
          position: absolute;
          top: 12px;
          right: 20px;
          font-size: 26px;
          background: transparent;
          border: none;
          color: #333;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .admission-modal__container {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default AdmissionModal;
