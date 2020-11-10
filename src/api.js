import { mockEvents } from "./mock-events";

async function getEvents(lat, lon) {
    const events = mockEvents.events;
    if (events.length) {
        localStorage.setItem('lastEvents', JSON.stringify(events));

    return events;
    }
    if(!navigator.onLine) {
        const events = localStorage.getItem('lastEvents');
        return JSON.parse(events);
    }
   
}

async function getSuggestions(query) {
    if (window.location.href.startsWith('http://localhost')){

    return [
        {
            city: 'Munich',
                country: 'de',
                localized_country_name: 'Germany',
                name_string: 'Munich, Germany',
                zip: 'meetup3',
                lat: 48.14,
                lon: 11.58
            },
            {
                city: 'Munich',
                country: 'us',
                localized_country_name: 'USA',
                state: 'ND',
                name_string: 'Munich, North Dakota, USA',
                zip: '58352',
                lat: 48.66,
                lon: -98.85
        }
    ]
} else {
    return [];
}};

export { getSuggestions, getEvents };
