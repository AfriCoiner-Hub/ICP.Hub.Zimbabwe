import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, text, icon }) => {
    return (
        <div className="shadow-lg rounded-lg w-64 h-auto p-6 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl ring-2">
            <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={icon} size="3x" className="text-blue-500" />
            </div>
            <h1 className="text-xl font-semibold mb-2 text-center">{title}</h1>
            <p className="text-gray-600 text-center">{text}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default Card;
