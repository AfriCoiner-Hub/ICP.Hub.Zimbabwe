import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div>
            <div
                className="h-screen px-24 bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/bg2.jpg')" }}
            >
                <div className="container flex justify-between mx-auto pt-20 items-center">
                    <div className="w-11/12">
                        <h1 className="text-5xl lg:text-8xl mt-28 font-semibold">Unleashing Potential, Empowering Innovations on the Internet Computer Protocol.</h1>
                        <p className="font-bold mt-5 text-2xl inline-block align-middle ml-5">
                            Let us build cool solutions that live on the icp blockchain and solve people problems
                        </p>
                        <div className="flex space-x-10 mt-5">
                            <button className="bg-gradient-to-r from-blacky to-blu2 text-white p-6 rounded-2xl flex items-center space-x-2 text-2xl">
                                <FontAwesomeIcon icon={faConciergeBell} />
                                <span>Our Services</span>
                            </button>
                            <button className="bg-gradient-to-r from-blacky to-blu2 text-white p-6 rounded-2xl flex items-center space-x-2 text-2xl">
                                <FontAwesomeIcon icon={faBook} />
                                <span>Learn more</span>
                            </button>
                        </div>
                    </div>
                    <img src="./assets/group-photo.jpg" className="w-6/12 mt-16 rounded-full" alt="No Image" />
                </div>
            </div>
        </div>
    );
}

export default Home;
