import React from "react";

const skills = [
  { label: "Student Visa", percentage: 90 },
  { label: "Business Visa", percentage: 70 },
  { label: "Residence Visa", percentage: 80 },
];

const SkillProgress = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-blue mb-3">My Skills</h2>
        <p className="text-muted mb-4" style={{ maxWidth: "600px" }}>
          Praesent id ante sit amet neque blandituni posuere vitae id ipsum.
          Proin rutrum est enim, vel aliquam sapien vulputate sit amet.
        </p>

        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between mb-1">
              <span className="fw-semibold text-blue">{skill.label}</span>
              <span className="text-muted">{skill.percentage}%</span>
            </div>
            <div
              className="progress"
              style={{ height: "8px", backgroundColor: "#dbe3f0" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: "#4d6894",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillProgress;
