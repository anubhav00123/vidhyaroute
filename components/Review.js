import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";

const blogData = [
  {
    title: "Unsatiable Entreaties May Collecting Power.",
    date: "Feb 6, 2022",
    author: "author",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from.",
    image: "/images/smileyoung.jpg",
  },
  {
    title: "Why You Should Plan Your 2022 Trip Abroad",
    date: "Feb 5, 2022",
    author: "author",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from.",
    image: "/images/camera.jpg",
  },
  {
    title: "Going Digital Key to Small Business Success",
    date: "Feb 4, 2022",
    author: "author",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from.",
    image: "/images/smilefemale.jpg",
  },
];




const Review = () => {
  return (
    <>
      <section
        className="py-5  bg-white position-relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/reviewbg.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container position-relative z-1">
          <SectionHeading
            label="REVIEW"
            title="World Immigration News & Updates"
          />
          <div className="container" style={{ marginBottom: "100px" }}>
            <div className="row g-4">
              {blogData.map((item, index) => (
                <div key={index} className="col-12 col-md-4">
                  <div className="card h-100 shadow-sm rounded-4 overflow-hidden border-0">
                    {/* Image */}
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                      style={{ height: "220px", objectFit: "cover" }}
                    />

                    {/* Card Body */}
                    <div className="card-body">
                      <div className="d-flex text-muted small mb-2 gap-3">
                        <div className="d-flex align-items-center gap-1">
                          <FaUser className="text-blue" />{" "}
                          <span>By {item.author}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <FaCalendarAlt className="text-blue" />{" "}
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <h5 className="fw-semibold text-blue">{item.title}</h5>

                      <p
                        className="pt-3 pb-4 small text-muted"
                        style={{
                          borderBottom: "1px solid #dddddd",
                        }}
                      >
                        {item.description}
                      </p>

                      <a href="#" className="text-blue small fw-semibold">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
