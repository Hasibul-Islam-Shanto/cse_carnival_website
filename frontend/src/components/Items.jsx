import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "./Button";
import PropTypes from 'prop-types';

const Items = ({ event }) => {
    return (
        <div className="flex odd:justify-between odd:flex-row-reverse items-center mb-8 gap-10 border border-navbar-button border-opacity-15 p-5 rounded-2xl backdrop-blur-lg">
            <div className="flex-shrink-0">
                <img src={event.image} alt="Event 1" className="" />
            </div>
            <div className="text-navbar">
                <h3 className="text-2xl font-bold md:mb-2 ">{event.name}</h3>
                <p className="md:mb-2">{event.description}</p>
                <p className="font-bold ">Registration Date : <span className="">{event.registrationDate}</span> </p>
                <p className="font-bold ">Registration Fee : <span className="">{event.registrationFee}</span> </p>
                <p className="font-bold ">Payment Deadline : <span className="">{event.paymentDeadline}</span> </p>
                <p className="font-bold ">Prize Money : <span className="">{event.prizeMoney}</span> </p>
                <div className="flex mt-4 space-x-6">
                    {event.registration && (
                        <Link to={event.registration}>
                            <PrimaryButton text="Register" />
                        </Link>
                    )}
                    {event.link && (
                        <Link to={event.link}>
                            <SecondaryButton text="View Event" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

const SponsorItem = ({ sponsor }) => {
    return (
        <div className="flex odd:justify-between odd:flex-row-reverse items-center mb-8 gap-10">
            <div className="flex-shrink-0">
                <img src={sponsor.image} alt="sponsor 1" className="h-40" />
            </div>
            <div className="text-navbar">
                <h3 className="text-2xl font-bold md:mb-2 ">{sponsor.name}</h3>
                <p className="md:mb-2">{sponsor.description}</p>
            </div>
        </div>
    );
}


const SponsorList = ({ sponsor }) => {
    return (
        // <div></div>
        <img src={sponsor.image} alt="Sponsor 1" className="w-32 h-32" />
    )
}

Items.propTypes = {
    event: PropTypes.object.isRequired,
};
SponsorList.propTypes = {
    sponsor: PropTypes.object.isRequired,
};

SponsorItem.propTypes = {
    sponsor: PropTypes.object.isRequired,
};

export { Items, SponsorList, SponsorItem };