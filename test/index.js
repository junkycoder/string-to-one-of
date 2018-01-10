const stringToOneOf = require('../lib');

const colors = [
    '#6468E5',
    '#F6D900',
    '#EF5350',
    '#29C0D7',
    '#ADD918',
    '#F29140',
    '#56D556',
    '#FFB100',
    '#44D8BB',
    '#AB52C7',
    '#E864B8',
    '#299CD7',
];

console.assert(
    stringToOneOf('john.doe@example.com', colors) === '#E864B8'
);

console.assert(
    stringToOneOf('json.fortuna@example.com', colors) === '#44D8BB'
);

console.assert(
    stringToOneOf('yaman.whatever@example.com', colors) === '#299CD7'
);

console.assert(
    stringToOneOf('', colors) === colors[ 0 ]
);

console.assert(
    stringToOneOf('', []) === undefined
);

console.assert(
    stringToOneOf('some', []) === undefined
);
