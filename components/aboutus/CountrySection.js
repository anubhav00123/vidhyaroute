import React from "react";
import { FaBook, FaBriefcase, FaPlane } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";

const CountrySection = () => {
  return (
    <>
      <section
        className="py-5  flag-div position-relative overflow-hidden"
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
          <div className="row countries-row">
            <div className="col-md-3">
              <p className="countries-tab">
                <FaBook style={{ marginRight: "8px" }} />
                Education
              </p>
              <div className="flag-div">
              <div className="content">
                <img src="/images/flags/uk.png" />
                <h5
                  classname="text-blue"
                  style={{ marginTop: "15px", color: "#032b66" }}
                >
                  United Kingdom
                </h5>
                <p>
                  Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                  feugiat diam laoreet eget
                </p>
                <p>Visa Type :</p>
                <p>Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p className="countries-tab">
                <HiOutlineOfficeBuilding style={{ marginRight: "8px" }} />
                Immigration
              </p>
              <div className="flag-div">
                <div className="content">
                <img src="/images/flags/bahamas.png" />
                <h5
                  classname="text-blue"
                  style={{ marginTop: "15px", color: "#032b66" }}
                >
                  Bahamas
                </h5>
                <p>
                  Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                  feugiat diam laoreet eget
                </p>
                <p>Visa Type :</p>
                <p>Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p className="countries-tab">
                <FaBriefcase style={{ marginRight: "8px" }} />
                Business
              </p>
              <div className="flag-div">
              <div className="content">
                <img src="/images/flags/canada.png" />
                <h5
                  classname="text-blue"
                  style={{ marginTop: "15px", color: "#032b66" }}
                >
                  Canada
                </h5>
                <p>
                  Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                  feugiat diam laoreet eget
                </p>
                <p>Visa Type :</p>
                <p>Working Visa, Job Visa</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p className="countries-tab">
                <FaPlane style={{ marginRight: "8px" }} />
                Tourist
              </p>
              <div className="flag-div">
                <div className="content">
                <img src="/images/flags/brazil.png" />
                <h5
                  classname="text-blue"
                  style={{ marginTop: "15px", color: "#032b66" }}
                >
                  Brazil
                </h5>
                <p>
                  Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                  feugiat diam laoreet eget
                </p>
                <p>Visa Type :</p>
                <p>Working Visa, Job Visa</p>
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
