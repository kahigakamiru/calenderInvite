const moment = require('moment');
const ical = require('ical-generator');

const sourceEmail = 'kahigandegwa2244@gmail.com';
const eventStart = moment('11-24-2021 15:40 PM', 'MM-DD-YYYY hh:mm A');
const eventStop = eventStart.add(1, 'hour');
const content = ical({
    domain: 'google.com',
    method: 'REQUEST',
    prodId: '//Google Inc//Google Calendar 70.9054//EN',
    events: [{
        start: eventStart,
        status: 'CONFIRMED',
        end: eventStart,
        summary: 'Review Session',
        transparency: 'OPAQUE',
        organizer: {
            name: 'Kahiga Ndegwa',
            email: sourceEmail,
            mailto: sourceEmail,
        },
        location: 'TheJitu, Nyeri',
        attendees: [{
                email: 'kahigakamiru@gmail.com',
                name: 'kahiga kamiru',
                status: 'ACCEPTED',
                rsvp: true,
                type: 'INDIVIDUAL',
                role: 'REQ-PARTICIPANT'
            }

        ]
    }]
}).toString();


module.exports = content;