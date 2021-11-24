const content = require("./content");
const sourceEmail = 'kahigandegwa2244@gmail.com';

const messageObj ={
    from: `Kahiga Ndegwa <${sourceEmail}>`,
    to: 'kahigakamiru@gmail.com',
    subject: 'Calender invite',
    text: 'Tukutane Review Session',
    html: `<div style="border-width:1px; border-radius:5px; box-shadow: 5px 10px;" >
        <p>This event has been arranged by Evans Kibet.</p>
        <p>We will conviene on the set date for review session</p>
    </div>
    `,
    icalEvent: {
        content: content,
    },
}


module.exports = messageObj;