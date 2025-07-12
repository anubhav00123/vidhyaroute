import React from "react";

const visaCountries = [
  {
    name: "China",
    emoji: "🇨🇳",
    bgColor: "#dc2626",
    location: "Avenue, Jersey",
    image:
      "/images/countries/china.jpg",
  },
  {
    name: "United Kingdom",
    emoji: "🇬🇧",
    bgColor: "#1e40af",
    location: "Asheville",
    image:
      "/images/countries/england.jpg",
  },
  {
    name: "Brazil",
    emoji: "🇧🇷",
    bgColor: "#16a34a",
    location: "Amsterdam",
    image:
      "/images/countries/brazil.jpg",
  },
  {
    name: "Australia",
    emoji: "🇦🇺",
    bgColor: "#2563eb",
    location: "Queensland",
    image:
      "/images/countries/aus.jpg",
  },
];

const ApplyVisa = () => {
  return (
    <section className="timeline-section bg-white position-relative overflow-visible" style={{ paddingBottom: "8rem" }}>
      <div
        className="timeline-banner w-full"
        style={{
          backgroundImage: "url('/images/mapbg.png')",
          backgroundBlendMode: "multiply",
          backgroundColor: "#032B66",
          paddingTop: "80px",
          paddingBottom: "160px", // extra space for card overlap
          position: "relative",
          overflow: "visible",
        }}
      >
        <div className="container position-relative z-1 text-white">
          <span className="visa-label-div d-block">COUNTRIES WE OFFER</span>
          <h4 className="mb-4 mt-3">Apply For Quick Visa</h4>
        </div>

        {/* Cards Container */}
        <div
          className="container position-absolute start-50 translate-middle-x"
          style={{
            zIndex: 2,
          }}
        >
          <div className="row g-4">
            {visaCountries.map((country, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="card border-0 shadow-lg h-100 overflow-hidden bg-white"
                  style={{
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Flag */}
                  <div
                    className="position-absolute"
                    style={{
                      top: "16px",
                      left: "16px",
                      zIndex: 10,
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle shadow"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: country.bgColor,
                        fontSize: "20px",
                      }}
                    >
                      {country.emoji}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        top: 0,
                        left: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="card-body p-4">
                    <h5 className="card-title mb-1 fw-bold">
                      <span style={{ color: "#07407d  " }}>{country.name}</span>
                      <span className="text-muted fw-medium"> Visa</span>
                    </h5>
                    <p className="card-text text-muted small mb-0">{country.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyVisa;
