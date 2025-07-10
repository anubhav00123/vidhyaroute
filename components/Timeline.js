import React from "react";
import SectionHeading from "./ui/SectionHeading";

const Timeline = () => {
  const timelineData = [
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
  ];

  return (
    <section className="timeline-section py-5 bg-white position-relative overflow-hidden">
      <div className="timeline-banner w-full" style={{backgroundImage:"url('/images/mapbg.png')", backgroundBlendMode:"multiply", backgroundColor:"#032B66"}}>
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
        {/* Timeline Header - Hidden on mobile */}
        <div className="timeline-container position-relative mb-3">
          {/* Timeline Line with End Dots */}
          <div className="timeline-line"></div>

          {/* Icons and Step Numbers */}
          <div className="timeline-steps">
            {[1, 2, 3, 4, 5].map((step, index) => (
              <div key={index} className="timeline-step">
                {/* Icon */}
                <img
                  src={`/images/icons/${step}.png`}
                  alt={`Step ${step}`}
                />
                {/* Step Number Circle */}
                <div className="timeline-step-number">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Below Timeline */}
        <div className="timeline-cards-container pt-4">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-card">
              <h6 className="text-center">{item.title}</h6>
              <p className="text-muted mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;