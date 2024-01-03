import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ text }) => {
    // TODO : Add shadow
    return (
        <button className="bg-navbar-button-hover text-navbar-link px-4 py-1 rounded-md">
            {text}
        </button>
    );
};

const SecondaryButton = ({ text }) => {
    // TODO : Add shadow
    return (
        <button className="bg-navbar shadow-2xl text-navbar-link px-4 py-1 rounded-md">
            {text}
        </button>
    );
};

export { PrimaryButton, SecondaryButton };

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
};
SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
};
