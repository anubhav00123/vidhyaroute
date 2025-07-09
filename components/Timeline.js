import React from "react";
import SectionHeading from "./ui/SectionHeading";

const Timeline = () => {
  return (
    <section className="py-5 bg-white position-relative overflow-hidden">
      <div className="container py-5">
        <SectionHeading
          label="STUDENT JOURNEY"
          title="Guiding Your Study Abroad Journey Step-by-Step"
        />

        {/* Timeline Header */}
        <div className="position-relative mb-3">
          {/* Timeline Line placed over step numbers */}
          <div
            className="position-absolute start-0 end-0"
            style={{
              top: '75px', // This positions the line vertically around step numbers
              borderTop: '2px solid #0d6efd',
              zIndex: 0,
            }}
          ></div>

          {/* Icons and Step Numbers */}
          <div className="d-flex justify-content-between align-items-start position-relative" style={{ zIndex: 1 }}>
            {[1, 2, 3, 4, 5].map((step, index) => (
              <div key={index} className="text-center position-relative" style={{ flex: 1 }}>
                {/* Icon */}
                <img
                  src={`/images/icons/${step}.png`}
                  alt={`Step ${step}`}
                  style={{ width: 60, height: 60, marginBottom: 10 }}
                />

                {/* Step Number Circle */}
                <div
                  className="position-relative bg-primary text-white rounded-circle mx-auto"
                  style={{
                    width: 36,
                    height: 36,
                    lineHeight: '32px',
                    fontSize: 14,
                    fontWeight: 600,
                    marginTop: '-10px', // Brings it up to sit over the line
                    zIndex: 2,
                    border: '3px solid white',
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Below Timeline */}
        <div className="row g-4 text-center pt-4">
          {[
            {
              title: "Getting Admission Offer from a University",
              content: (
                <>
                  Research & Shortlist Universities: Based on country, course,
                  budget, and ranking. <br />
                  <br />
                  Prepare Application Documents: Includes academic
                  transcripts, SOP, LORs, resume, and test scores. <br />
                  <br />
                  Apply to Universities: Often via portals (e.g. UCAS).
                </>
              ),
            },
            {
              title: "Receive Admission Confirmation",
              content: (
                <>
                  Accept Offer & Pay Initial Deposit. <br />
                  <br />
                  Get Admission Letter / I-20 / CAS. <br />
                  <br />
                  Required for visa application.
                </>
              ),
            },
            {
              title: "Education Loan Processing",
              content: (
                <>
                  Choose loan provider (Banks, NBFCs, or international). <br />
                  <br />
                  Submit Admission Letter, Fee Structure, KYC, Income &
                  Collateral docs.
                </>
              ),
            },
            {
              title: "Student Visa Application Process",
              content: (
                <>
                  Collect documents: Passport, Admission Letter, Financial
                  proof, Visa forms, etc. <br />
                  <br />
                  Attend Interview or Biometric appointment depending on
                  country.
                </>
              ),
            },
            {
              title: "Post-Visa Steps (Optional but Crucial)",
              content: (
                <>
                  Pre-departure briefing <br />
                  Accommodation & Insurance <br />
                  University registration & orientation
                </>
              ),
            },
          ].map((item, index) => (
            <div className="col-md-6 col-lg-2 mx-auto" key={index}>
              <div className="border rounded p-3 shadow-sm h-100 text-start">
                <h6 className="fw-bold text-center">{item.title}</h6>
                <p className="small text-muted mt-2">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
