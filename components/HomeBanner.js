import React from 'react';
import Image from 'next/image';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const HomeBanner = () => {
  return (
    <section className="home-banner position-relative overflow-hidden text-white">
      {/* Background Image */}
      <div className="banner-image-wrapper">
        <Image
          src="/images/bg1.png" // Make sure this matches your actual image path
          alt="Australia City"
          layout="fill"
          objectFit="cover"
          className="banner-bg"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="container h-80 d-flex align-items-center position-relative z-1">
        <div className="banner-content">
          <h1 className="display-5 fw-bold mb-3">
            Study In <br />
            <span className="text-highlight">Recognized Universities!</span>
          </h1>
          <p className="mb-4 text-white-50" style={{ maxWidth: '500px' }}>
            MCS has been recruiting and prepping talented professionals for over twenty years. We
            provide a unique value proposition to both.
          </p>
          <div className='d-flex justify-content-start'>
          <button className="transparent-btn fw-semibold px-4 py-2 d-inline-flex align-items-center">
            More Details <BsArrowRight className="ms-2" />
          </button>
          </div>
        </div>
      </div>

      {/* Bottom Arrows */}
      <div className="banner-controls d-flex gap-1">
        <button className="control-btn">
          <BsChevronLeft />
        </button>
        <button className="control-btn">
          <BsChevronRight />
        </button>
      </div>

      {/* Optional: White wave shape at bottom */}
      <div className="banner-wave" />
    </section>
  );
};

export default HomeBanner;
