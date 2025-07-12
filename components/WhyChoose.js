import React from "react";
import SectionHeading from "./ui/SectionHeading";

const WhyChooseSection = ({ label, title, items = [] }) => {
  return (
    <section>
      <div className="container py-5">
        <SectionHeading label={label} title={title} />
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="p-4 h-100 d-flex flex-column justify-content-start">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mb-3"
                  style={{ width: 60, height: 60 }}
                />
                <h5 className="text-blue">{item.title}</h5>
                <p className="small text-gray">{item.desc}</p>
                <div className="mt-auto">
                  <span style={{ fontSize: "20px" }}>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
