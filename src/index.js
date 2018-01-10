
/**
 *
 * @param {*} str String that you want convert to one of
 * @param {*} arr Array of items
 */
export default function stringToOneOf(str, arr) {
    return arr[
        str.split('').reduce((total, char) => total + char.charCodeAt(0), 0) % arr.length
    ];
}
