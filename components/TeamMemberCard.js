import React from "react";
import { FaGlobe, FaTwitter, FaFacebookF } from "react-icons/fa";

const TeamMemberCard = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center bg-white shadow rounded-4 overflow-hidden">
          {/* Left Image */}
          <div className="col-md-6 p-0">
            <img
              src="/images/TeamMember.jpg"
              alt="Roman Frederick"
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover", minHeight: "100%" }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6 p-5">
            <h4 className="fw-bold text-blue mb-1">Roman Frederick</h4>
            <p className="text-muted mb-3">Regional Manager</p>

            {/* Social Icons */}
            <div className="d-flex gap-2 mb-3">
              <a href="#" className="btn btn-light shadow-sm rounded-circle p-2">
                <FaGlobe className="text-blue" />
              </a>
              <a href="#" className="btn btn-light shadow-sm rounded-circle p-2">
                <FaTwitter className="text-blue" />
              </a>
              <a href="#" className="btn btn-light shadow-sm rounded-circle p-2">
                <FaFacebookF className="text-blue" />
              </a>
            </div>

            <p className="text-muted">
              Praesent id ante sit amet neque blandituni posuere vitae id
              ipsum. Proin rutrum est enim, vel aliquam sapien vulputate sit
              amet. Integer sit amet finibus ex, nec mattis felis. In volutpat.
            </p>

            <ul className="list-unstyled text-muted">
              <li>
                <strong className="text-blue">Specialization :</strong> Manager
              </li>
              <li>
                <strong className="text-blue">Age :</strong> 34 Years
              </li>
              <li>
                <strong className="text-blue">Experience :</strong> 6 Years
              </li>
              <li>
                <strong className="text-blue">Email :</strong> info@yourmail.com
              </li>
              <li>
                <strong className="text-blue">Phone :</strong> (+123) 45678 900
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberCard;
