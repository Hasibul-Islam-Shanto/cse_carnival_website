// BodySection.js

import React from 'react';
import EventItem from './EventItem';

const Events = () => {
    const events = [
        {
            name: "IUPC",
            description: "Description for Event 1. Lorem ijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj j j j j j j j j j j j j psum dolor sit amet, consectetur adipiscing elit.",
            image: "/Event 1.jpg",
            registration: "/",
            link: "/iupc",
        },
        {
            name: "Hackathon",
            description: "Description for Event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Event 2.jpg",
            registration: "/",
            link: "/hackathon",
        },
        {
            name: "DL Sprint",
            description: "Description for Event 3. Lorem ijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj j j j j j j j j j j j j psum dolor sit amet, consectetur adipiscing elit.",
            image: "/Event 1.jpg",
            registration: "/",
            link: "/dlsprint",
        },
        {
            name: "Code Battle",
            description: "Description for Event 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Event 2.jpg",
            registration: "/",
            link: "/codebattle",
        }
    ]

    return (
        <div className="container mx-auto pb-8 pt-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-title">Events</h2>
            {events.map((event) => (
                <EventItem key={event.name} event={event} />
            ))}
        </div>
    );
};

export default Events;
