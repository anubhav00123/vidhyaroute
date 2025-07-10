import React from "react";
import SectionHeading from "./ui/SectionHeading";

const Timeline = () => {
  return (
    <section className="py-5 bg-white position-relative overflow-hidden">
      <div className=" timeline-banner w-full" style={{backgroundImage:"url('/images/mapbg.png')", backgroundBlendMode:"multiply", backgroundColor:"#032B66"}}>
        <div className="text-center heading-div">
          <span className="visa-label d-block text-white">STUDENT JOURNEY</span>
          <div className="star-with-lines-container-white my-2">
            <img
              src="/images/icons/whitestar.png"
              alt="Star Icon"
              width={25}
              height={20}
              className="star-image"
            />
          </div>
          <h2 className="fs-3 fw-bold text-white mb-0">Guiding Your Study Abroad Journey Step-by-Step</h2>
        </div>
    
      </div>
      <div className="container py-5">
    
        {/* Timeline Header */}
        <div className="position-relative mb-3">
          {/* Timeline Line with End Dots */}
          <div
            className="position-absolute start-0 end-0 d-flex align-items-center"
            style={{
              top: "75px",
              zIndex: 0,
            }}
          >
            {/* Left dot */}
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: "#81C042",
                borderRadius: "50%",
              }}
            ></div>

            {/* Line */}
            <div
              style={{
                flex: 1,
                borderTop: "5px solid #032B66",
              }}
            ></div>

            {/* Right dot */}
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: "#81C042",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          {/* Icons and Step Numbers */}
          <div
            className="d-flex justify-content-between align-items-start position-relative"
            style={{ zIndex: 1 }}
          >
            {[1, 2, 3, 4, 5].map((step, index) => (
              <div
                key={index}
                className="text-center position-relative"
                style={{ flex: 1 }}
              >
                {/* Icon */}
                <img
                  src={`/images/icons/${step}.png`}
                  alt={`Step ${step}`}
                  style={{ width: 60, height: 60, marginBottom: 10 }}
                />

                {/* Step Number Circle */}
                <div
                  className="position-relative text-white rounded-circle mx-auto"
                  style={{
                    width: 36,
                    backgroundColor: "#4E3C86",
                    height: 36,
                    lineHeight: "32px",
                    fontSize: 14,
                    fontWeight: 600,
                    marginTop: "-10px",
                    zIndex: 2,
                    border: "3px solid white",
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Below Timeline - 5 in a row */}
        <div className="d-flex justify-content-between flex-wrap pt-4">
          {[
            {
              title: "Getting Admission Offer from a University",
              content: (
                <>
                  Research & Shortlist Universities: Based on country, course,
                  budget, and ranking. <br />
                  <br />
                  Prepare Application Documents: Includes academic transcripts,
                  SOP, LORs, resume, and test scores. <br />
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
                  <br />
                  Accommodation & Insurance <br />
                  <br />
                  Forex and Travel Insurance <br /><br />
                  University registration & orientation
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{ width: "19%", minWidth: "220px" }}
              className="border rounded p-3 shadow-sm text-start"
            >
              <h6 className="text-center">{item.title}</h6>
              <p className="text-muted mt-2" style={{fontSize:"13px"}}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
