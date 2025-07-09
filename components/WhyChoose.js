import React from "react";
import SectionHeading from "./ui/SectionHeading";

const WhyChoose = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <SectionHeading
            label="WHY CHOOSE US"
            title="Vidhyaa Route is your trusted partner, guiding you from admission to arrival abroad."
          />
          <div className="row">
            {[
              {
                icon: "/images/icons/chat.png", // Replace with actual icons
                title: "Global Education",
                desc: "From course selection to visa approval, Vidhyaa Route guides your study abroad journey completely.",
              },
              {
                icon: "/images/icons/globe.png",
                title: "Worldwide Insight",
                desc: "We guide admissions to top countries like the UK, USA, Canada, and more.",
              },
              {
                icon: "/images/icons/hands.png",
                title: "Personal Mentorship",
                desc: "Vidhyaa Route offers personalized guidance based on goals, academics, and finances.",
              },
              {
                icon: "/images/icons/money.png",
                title: "Loan Guidance",
                desc: "We assist students in securing personalized education loans through trusted banks and financial institutions.",
              },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="p-4 h-100 d-flex flex-column justify-content-start">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    style={{ width: 60, height: 60 }}
                  />
                  <h5 className=" text-blue ">
                    {item.title}
                  </h5>
                  <p className="small text-gray">{item.desc}</p>
                  <div className="mt-auto ">
                    <span style={{ fontSize: "20px" }}>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
