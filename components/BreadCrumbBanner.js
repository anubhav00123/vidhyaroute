import Link from "next/link";

const BreadcrumbBanner = () => {
  return (
    <>
      <div
        className="breadcrumb-banner position-relative"
        style={{ backgroundImage: 'url("/images/bread.jpg")' }}
      >
        <img className="blob-image position-absolute" src="/images/whiteblob.png" />
        <div className="banner-content">
          <h1 className="banner-title text-white">OET Coaching</h1>
          <div className="breadcrumbs d-flex">
            <Link href="/" className="text-white">
              Home
            </Link>
            <span className="separator text-white">→</span>
            <span className="current-page text-white">OET Coaching</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbBanner;
