import React from "react";

const SponsorBanner = () => {
  return (
    <section style={{ backgroundColor: "#f5f5f5" }} className="py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          {[
            "/images/company/smatr.png",
            "/images/company/utopix.png",
            "/images/company/palm.png",
            "/images/company/minmal.png",
            "/images/company/sauter.png",
          ].map((logo, index) => (
            <div className="col-6 col-md-2 mb-3 mb-md-0" key={index}>
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="img-fluid"
                style={{ opacity: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
