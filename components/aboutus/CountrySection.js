import React from "react";
import { FaBook, FaBriefcase, FaPlane } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";

const CountrySection = () => {
  return (
    <>
      <section
        className="py-5 flag-div position-relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/mapbg.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <SectionHeading
          label="COUNTRIES WE OFFER"
          title="Immigration Officials approvals for foreign citizens can vary by country."
        />
        <div className="container">
          <div className="row countries-row g-4">
            <div className="col-12 col-md-3">
              <p className="countries-tab d-flex align-items-center mb-3">
                <FaBook style={{ marginRight: "8px", color: "#032b66" }} />
                <span className="text-blue" style={{ color: "#032b66" }}>Education</span>
              </p>
              <div className="flag-div p-3 bg-white rounded shadow-sm">
                <div className="content text-center">
                  <img src="/images/flags/uk.png" alt="UK Flag" className="img-fluid mb-3" style={{ maxWidth: "100px" }} />
                  <h5 style={{ marginTop: "15px", color: "#032b66" }}>
                    United Kingdom
                  </h5>
                  <p className="text-muted">
                    Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget
                  </p>
                  <p className="text-muted">Visa Type :</p>
                  <p className="text-muted">Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <p className="countries-tab d-flex align-items-center mb-3">
                <HiOutlineOfficeBuilding style={{ marginRight: "8px", color: "#032b66" }} />
                <span className="text-blue" style={{ color: "#032b66" }}>Immigration</span>
              </p>
              <div className="flag-div p-3 bg-white rounded shadow-sm">
                <div className="content text-center">
                  <img src="/images/flags/bahamas.png" alt="Bahamas Flag" className="img-fluid mb-3" style={{ maxWidth: "100px" }} />
                  <h5 style={{ marginTop: "15px", color: "#032b66" }}>
                    Bahamas
                  </h5>
                  <p className="text-muted">
                    Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget
                  </p>
                  <p className="text-muted">Visa Type :</p>
                  <p className="text-muted">Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <p className="countries-tab d-flex align-items-center mb-3">
                <FaBriefcase style={{ marginRight: "8px", color: "#032b66" }} />
                <span className="text-blue" style={{ color: "#032b66" }}>Business</span>
              </p>
              <div className="flag-div p-3 bg-white rounded shadow-sm">
                <div className="content text-center">
                  <img src="/images/flags/canada.png" alt="Canada Flag" className="img-fluid mb-3" style={{ maxWidth: "100px" }} />
                  <h5 style={{ marginTop: "15px", color: "#032b66" }}>
                    Canada
                  </h5>
                  <p className="text-muted">
                    Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget
                  </p>
                  <p className="text-muted">Visa Type :</p>
                  <p className="text-muted">Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <p className="countries-tab d-flex align-items-center mb-3">
                <FaPlane style={{ marginRight: "8px", color: "#032b66" }} />
                <span className="text-blue" style={{ color: "#032b66" }}>Tourist</span>
              </p>
              <div className="flag-div p-3 bg-white rounded shadow-sm">
                <div className="content text-center">
                  <img src="/images/flags/brazil.png" alt="Brazil Flag" className="img-fluid mb-3" style={{ maxWidth: "100px" }} />
                  <h5 style={{ marginTop: "15px", color: "#032b66" }}>
                    Brazil
                  </h5>
                  <p className="text-muted">
                    Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget
                  </p>
                  <p className="text-muted">Visa Type :</p>
                  <p className="text-muted">Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountrySection;