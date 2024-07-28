
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComments, faBullhorn, faIdBadge, faWallet, faFilter } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
      <div
        id="services"
        className="section relative pt-10 pb-8 md:pt-16 md:pb-0 bg-slate-500"
      >
        <div className="container justify-between items-center flex mx-auto">
          {/* Heading start */}
          <div>
            <header className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="text-4xl leading-normal mb-2 font-bold text-black dark:text-slate-100">
                What We Do
              </h2>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 60"
                style={{ margin: "0 auto", height: "35px" }}
                xmlSpace="preserve"
              >
                <circle
                  cx="50.1"
                  cy="30.4"
                  r="5"
                  className="stroke-primary"
                  style={{
                    fill: "transparent",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                  }}
                ></circle>
                <line
                  x1="55.1"
                  y1="30.4"
                  x2="100"
                  y2="30.4"
                  className="stroke-primary"
                  style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
                ></line>
                <line
                  x1="45.1"
                  y1="30.4"
                  x2="0"
                  y2="30.4"
                  className="stroke-primary"
                  style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
                ></line>
              </svg>
              <p className="text-gray-500 dark:text-slate-100 leading-relaxed mx-auto pb-2 text-2xl">
                Save time managing advertising &amp; Content for your business.
              </p>
            </header>
            {/* End heading */}
            {/* row */}
            <div className="flex flex-wrap flex-row -mx-4 text-center lg:pb-20">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                {/* service block */}
                <div className="ring-2 rounded-lg py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <FontAwesomeIcon icon={faSearch} size="2x" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    SEO Services
                  </h3>
                  <p className="text-gray-500">
                    This is a wider card with supporting text below as a natural
                    content.
                  </p>
                </div>
                {/* end service block */}
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                {/* service block */}
                <div className="rounded-lg py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <FontAwesomeIcon icon={faComments} size="2x" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Social Content
                  </h3>
                  <p className="text-gray-500">
                    This is a wider card with supporting text below as a natural
                    content.
                  </p>
                </div>
                {/* end service block */}
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                {/* service block */}
                <div className="rounded-lg ring-2 py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <FontAwesomeIcon icon={faBullhorn} size="2x" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Creative ads
                  </h3>
                  <p className="text-gray-500">
                    This is a wider card with supporting text below as a natural
                    content.
                  </p>
                </div>
                {/* end service block */}
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                {/* service block */}
                <div className="rounded-lg py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <FontAwesomeIcon icon={faIdBadge} size="2x" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Brand Identity
                  </h3>
                  <p className="text-gray-500">
                    This is a wider card with supporting text below as a natural
                    content.
                  </p>
                </div>
                {/* end service block */}
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                {/* service block */}
                <div className="rounded-lg ring-2 py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <FontAwesomeIcon icon={faWallet} size="2x" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Budget &amp; Marketing
                  </h3>
                  <p className="text-gray-500">
                    This is a wider card with supporting text below as a natural
                    content.
                  </p>
                </div>
                {/* end service block */}
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                {/* service block */}
                <div className="rounded-lg py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <FontAwesomeIcon icon={faFilter} size="2x" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Optimize conversions
                  </h3>
                  <p className="text-gray-500">
                    This is a wider card with supporting text below as a natural
                    content.
                  </p>
                </div>
                {/* end service block */}
              </div>
            </div>
            {/* end row */}
          </div>
        </div>
      </div>
    );
}

export default Services;
