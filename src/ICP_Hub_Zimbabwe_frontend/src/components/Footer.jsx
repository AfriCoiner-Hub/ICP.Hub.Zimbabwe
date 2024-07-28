import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 py-5">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2 font-semibold">
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-900">
                        Home
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-900">
                        About Us
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-900">
                        Services
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-900">
                        Team
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-900">
                        Contact
                    </a>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-5 text-gray-500">
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-700 text-lg transition" />
                </a>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-700 text-lg transition" />
                </a>
                <a href="https://example.com" aria-label="Website" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGlobe} className="hover:text-gray-700 text-lg transition" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-700 text-lg transition" />
                </a>
            </div>
            <div className='mt-5'>
                <h1 className='text-center text-base text-gray-900'>@Zimhub 2024</h1>
            </div>
        </footer>
    );
}

export default Footer;
