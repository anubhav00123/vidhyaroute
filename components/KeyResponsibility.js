import React from "react";

const KeyResponsibility = () => {
  return (
    <>
    <div className="container py-5">
      <div className="row">
        {/* Key Responsibilities */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h4 className="fw-bold text-blue mb-3">Key Responsibilities</h4>
          <ul className="text-muted ps-3">
            <li>Etiam in magna ac dui laoreet iaculis</li>
            <li>Fusce molestie risus vel odio faucibus.</li>
            <li>A orci pretium tincidunt</li>
            <li>Fusce molestie risus vel odio</li>
            <li>Fusce vehicula libero eget pharetra ultrices</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="col-md-6">
          <h4 className="fw-bold text-blue mb-3">Experience</h4>
          <p className="text-muted">
            Praesent id ante sit amet neque blandituni posuere vitae id ipsum.
            Proin rutrum est enim, vel aliquam sapien vulputate sit amet.
          </p>

          <p className="mb-2">
            <strong className="text-blue">The Walt Company :</strong>
            <br />
            <span className="text-muted">
              Cars varius proin amet at vehicula magna. <br />
              Platea sed fames.
            </span>
          </p>

          <p className="mb-0">
            <strong className="text-blue">Ecological Compatibility:</strong>
            <br />
            <span className="text-muted">
              Cars varius proin amet at vehicula magna. <br />
              Platea sed fames.
            </span>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default KeyResponsibility;
