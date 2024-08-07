import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="h-28 sticky bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="p-6 flex space-x-3 hover:bg-gradient-to-r from-teal-400 to-blue-500">
                    <a href="#" className="inline-block py-4 md:py-0 mt-2">
                        <span className="p-1 text-2xl font-bold leading-none font-mono md:text-5xl">ZimHub</span>
                    </a>
                </div>

                <div className="flex space-x-10 font-mono md:text-3xl">
                    <a href="#" className="py-4 px-14 hover:font-bold hover:text-gray-900 transition hover:bg-gradient-to-r from-teal-400 to-blue-500">Home</a>
                    <a href="#about" className="py-4 px-14 hover:font-bold hover:text-gray-900 transition hover:bg-gradient-to-r from-teal-400 to-blue-500">About Us</a>
                    <a href="#services" className="py-4 px-14 hover:font-bold hover:text-gray-900 transition hover:bg-gradient-to-r from-teal-400 to-blue-500">Services</a>
                    <a href="#team" className="py-4 px-14 hover:font-bold hover:text-gray-900 transition hover:bg-gradient-to-r from-teal-400 to-blue-500">Team</a>
                </div>

                <div className="flex space-x-10">
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-700 text-3xl transition" />
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-700 text-3xl transition" />
                    </a>
                    <a href="https://example.com" aria-label="Website" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGlobe} className="hover:text-gray-700 text-3xl transition" />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-700 text-3xl transition" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
