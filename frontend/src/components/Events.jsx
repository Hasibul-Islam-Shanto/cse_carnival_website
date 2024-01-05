// BodySection.js

import React from 'react';
import { EventItems } from './Items';
import { events } from '../data/data';

const Events = () => {

    return (
        <div className="container mx-auto pb-8 pt-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-title">Events</h2>
            {events.map((event) => (
                <EventItems key={event.name} event={event} />
            ))}
        </div>
    );
};

export default Events;
