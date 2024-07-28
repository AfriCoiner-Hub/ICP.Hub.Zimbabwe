import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
      <div id='#' className="relative">
        <div
          className="absolute inset-0 h-screen bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
        </div>
        <div className="container relative h-screen flex justify-between mx-auto items-center">
          <div className="w-11/12">
            <h1 className="text-5xl lg:text-8xl font-semibold">
              Unleashing Potential, Empowering Innovations on the
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {" "}
                Internet Computer Protocol.
              </span>
            </h1>
            <p className="font-bold mt-5 text-2xl inline-block align-middle ml-5 text-white">
              Let us build cool solutions that live on the icp blockchain and
              solve people problems
            </p>
            <div className="flex space-x-10 mt-5">
              <a href='#services' className="bg-gradient-to-r from-blacky to-violet-500  hover:from-pink-500 to-violet-500 text-white p-6 rounded-2xl flex items-center space-x-2 text-2xl">
                <FontAwesomeIcon icon={faConciergeBell} />
                <span>Our Services</span>
              </a>
              <button className="bg-gradient-to-r from-blacky to-violet-500  hover:from-pink-500 to-violet-500 text-white p-6 rounded-2xl flex items-center space-x-2 text-2xl">
                <FontAwesomeIcon icon={faBook} />
                <span>Learn more</span>
              </button>
            </div>
          </div>
          <img
            src="./assets/group-photo.jpg"
            className="w-6/12 rounded-full"
            alt="No Image"
          />
        </div>
      </div>
    );
}

export default Home;
