import axios from 'axios';
import { mockEvents } from "./mock-events";

async function getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    const lastSavedTime = localStorage.getItem('last_saved_time');
    if (!accessToken) {
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');

        if (!code) {
            window.location.href = 'https://secure.meetup.com/oauth2/authorize?' +
                'client_id=at77g05b0suuo27ke1tvrs9csn&response_type=code&redirect_uri=' +
                'https://plalangan.github.io/meetup/';
            return null;
        }
        return getOrRenewToken('get', code);
    }
    if (accessToken && (Date.now() - lastSavedTime < 3600000)) {
        return accessToken;
    }
    else {
        const refreshToken = localStorage.getItem('refresh_token');
        return getOrRenewToken('renew', refreshToken);
    }
}

async function getOrRenewToken(type, key) {
    let url;
    if (type === 'get') {
        url = 'https://r5yqq8lgqb.execute-api.eu-central-1.amazonaws.com/dev/api/refresh_token/' + key;
    }
    else if (type === "renew") {
        url = 'https://r5yqq8lgqb.execute-api.eu-central-1.amazonaws.com/dev/api/refresh_token/' + key;
    }
    console.log(url)
    console.log(key)
    const tokenInfo = await axios.get(url);

    localStorage.setItem('access_token', tokenInfo.data.access_token);
    localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
    localStorage.setItem('last_saved_time', Date.now());

    return tokenInfo.data.access_token;
}


/*async function getEvents(lat, lon) {
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
*/

async function getEvents(lat, lon) {
    if (window.location.href.startsWith('http://localhost')) {
        return mockEvents.events
    }
    if (!navigator.onLine) {
        const events = localStorage.getItem('lastEvents');
        return JSON.parse(events);
    }
    const token = await getAccessToken();
    if (token) {
        let url = 'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
            + '&access_token=' + token;
        if (lat && lon) {
            url += '&lat=' + lat + '&lon=' + lon;
        }
        const result = await axios.get(url);
        const events = result.data.events;
        if (events.length) {
            localStorage.setItem('lastEvents', JSON.stringify(events));
        }
        return events;
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
