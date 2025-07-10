import React from "react";

const logos = [
  { alt: "SBI", src: "/images/banks/sbi.png" },
  { alt: "Union Bank", src: "/images/banks/union.png" },
  { alt: "ICICI Bank", src: "/images/banks/icici.png" },
  { alt: "Axis Bank", src: "/images/banks/axis.png" },
  { alt: "IDFC FIRST", src: "/images/banks/idfc.png" },
  { alt: "Prodigy Finance", src: "/images/banks/prodigy.png" },
  { alt: "MPOWER", src: "/images/banks/mpower.png" },
  { alt: "Credila", src: "/images/banks/credila.png" },
  { alt: "Avanse", src: "/images/banks/avanse.png" },
  { alt: "Auxilo", src: "/images/banks/auxilo.png" },
  { alt: "ICICI Bank", src: "/images/banks/icici_bank.png" },
  { alt: "Bank of Baroda", src: "/images/banks/bob.png" },
  { alt: "YES BANK", src: "/images/banks/yes.png" },
  { alt: "TATA Capital", src: "/images/banks/tata.png" },
  { alt: "PNB", src: "/images/banks/pnb.png" },
];

const PartnerBanks = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-4 justify-content-center align-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
