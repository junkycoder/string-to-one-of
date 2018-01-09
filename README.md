# string-to-one-of
Convert string to one item of given array


## Install
```
npm install string-to-one-of
```

## Usage
```
import stringToOneOf from 'string-to-one-of';

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

stringToOneOf('john.doe@example.com', colors); // #E864B8

stringToOneOf('json.fortuna@example.com', colors); // #44D8BB

stringToOneOf('json.fortuna@example.com', colors); // #44D8BB
```
