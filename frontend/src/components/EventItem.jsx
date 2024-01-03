import React from "react";
import { Link } from "react-router-dom";
import {PrimaryButton, SecondaryButton} from "./Button";
import PropTypes from 'prop-types';

const EventItem = ({ event }) => {
    return (
        <div className="flex odd:flex-row-reverse odd:justify-end items-center mb-8">
                <div className="flex-shrink-0">
                    <img src={event.image} alt="Event 1" className="" />
                </div>
                <div className="even:ml-8 odd:mr-8">
                    <h3 className="text-2xl font-bold md:mb-2 text-navbar">{event.name}</h3>
                    <p className='text-navbar'>{event.description}</p>
                    <div className="flex mt-8 space-x-6">
                        <Link to={event.registration}>
                            <PrimaryButton text="Register" />
                        </Link>
                        <Link to={event.link}>
                            <SecondaryButton text="View Event" />
                        </Link>
                    </div>
                </div>
            </div>
    );
}
EventItem.propTypes = {
    event: PropTypes.object.isRequired,
};
export default EventItem;